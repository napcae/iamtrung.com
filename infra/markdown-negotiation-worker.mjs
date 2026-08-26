// Cloudflare Worker: real Accept-header content negotiation for iamtrung.com.
//
// Why this exists: iamtrung.com is a static export served by GitHub Pages,
// which cannot inspect a request's Accept header and vary its response —
// it has no server logic at all. Every same-URL "Accept: text/markdown"
// negotiation check (see acceptmarkdown.com) is therefore structurally
// impossible from the static files alone. This Worker sits in front of
// the domain and supplies the missing per-request logic, without moving
// hosting off GitHub Pages: it proxies to the existing origin and, when a
// requester prefers text/markdown, swaps in the sibling .md file that
// `scripts/generate-markdown-siblings.mjs` already writes into the static
// export (out/about.md, out/essays/foo.md, etc.) at build time.
//
// Deployment (requires a Cloudflare account with iamtrung.com's DNS on
// it — see infra/README.md for the full walkthrough):
//   1. wrangler login
//   2. wrangler deploy --name iamtrung-markdown-negotiation
//   3. Add a Worker Route for iamtrung.com/* to this Worker in the
//      Cloudflare dashboard (or via wrangler.toml `routes`).
//
// Not deployed by this change — it requires Cloudflare account access
// this session does not have.

function parseAccept(header) {
  if (!header) return [{ type: "*/*", q: 1 }]
  return header
    .split(",")
    .map((part) => {
      const [type, ...params] = part.trim().split(";").map((s) => s.trim())
      let q = 1
      for (const p of params) {
        const m = p.match(/^q=([0-9.]+)$/)
        if (m) q = parseFloat(m[1])
      }
      return { type: type.toLowerCase(), q }
    })
    .sort((a, b) => b.q - a.q)
}

function mediaMatches(range, candidate) {
  if (range === "*/*") return true
  if (range === candidate) return true
  const [rangeType] = range.split("/")
  const [candidateType] = candidate.split("/")
  return range.endsWith("/*") && rangeType === candidateType
}

function qFor(ranges, candidate) {
  for (const r of ranges) {
    if (r.q > 0 && mediaMatches(r.type, candidate)) return r.q
  }
  return 0
}

/** 'markdown' | 'html' | 'unsupported' */
export function negotiate(acceptHeader) {
  const ranges = parseAccept(acceptHeader)
  const markdownQ = qFor(ranges, "text/markdown")
  const htmlQ = qFor(ranges, "text/html")
  if (markdownQ === 0 && htmlQ === 0) return "unsupported"
  return markdownQ > htmlQ ? "markdown" : "html"
}

export function markdownSiblingPath(pathname) {
  if (pathname.endsWith(".md")) return null // already a direct .md request
  const trimmed = pathname.replace(/\/$/, "")
  return trimmed === "" ? "/index.md" : `${trimmed}.md`
}

function withVary(headers, extra) {
  const out = new Headers(headers)
  const existing = out.get("Vary")
  const values = new Set(
    (existing ? existing.split(",") : []).map((v) => v.trim()).filter(Boolean),
  )
  for (const v of extra) values.add(v)
  out.set("Vary", [...values].join(", "))
  return out
}

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const preference = negotiate(request.headers.get("Accept"))

    if (preference === "unsupported") {
      return new Response(
        "# 406 Not Acceptable\n\nThis resource is available as text/html or text/markdown only.\n",
        {
          status: 406,
          headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" },
        },
      )
    }

    if (preference === "markdown") {
      const siblingPath = markdownSiblingPath(url.pathname)
      if (siblingPath) {
        const mdUrl = new URL(url)
        mdUrl.pathname = siblingPath
        const mdResponse = await fetch(mdUrl.toString(), { cf: { cacheEverything: true } })
        if (mdResponse.ok) {
          const headers = withVary(mdResponse.headers, ["Accept", "Accept-Encoding"])
          headers.set("Content-Type", "text/markdown; charset=utf-8")
          return new Response(mdResponse.body, { status: 200, headers })
        }
        // No precomputed sibling for this path yet — fall through to HTML
        // rather than error, so coverage gaps degrade gracefully.
      }
    }

    const originResponse = await fetch(request)
    const headers = withVary(originResponse.headers, ["Accept", "Accept-Encoding"])
    return new Response(originResponse.body, { status: originResponse.status, headers })
  },
}
