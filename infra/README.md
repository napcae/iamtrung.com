# Markdown content negotiation (optional, requires infra decision)

`GET /about` with `Accept: text/markdown` currently returns HTML — the
[acceptmarkdown.com](https://acceptmarkdown.com) check flags this. This is
a hosting-model limit, not a bug: iamtrung.com is a static export served
directly by **GitHub Pages**, which cannot inspect a request's `Accept`
header or vary its response. No static host can pass that check on the
identical URL; it requires something with per-request logic in front of
the origin.

## What's already shipped (no infra change needed)

`scripts/generate-markdown-siblings.mjs` runs on every build and writes a
`.md` sibling next to every page — `/about` → `/about.md`,
`/essays/foo` → `/essays/foo.md`, home → `/index.md`. Essays, case
studies, and media appearances reuse their real markdown source; every
other page is derived from its own rendered HTML, so it can't drift from
what a visitor sees. `public/llms.txt` documents this convention so
agents that already know to try `<path>.md` get clean markdown today,
without any DNS or account changes.

## What full same-URL negotiation requires

`markdown-negotiation-worker.js` in this folder is a ready-to-deploy
Cloudflare Worker that:

- Parses the `Accept` header (including q-values) to decide whether a
  requester prefers `text/markdown` or `text/html`.
- On a markdown preference, proxies the matching `.md` sibling above
  instead of the HTML page, with `Content-Type: text/markdown;
  charset=utf-8` and `Vary: Accept, Accept-Encoding`.
- Returns `406` for a request that explicitly excludes both HTML and
  markdown (e.g. `Accept: application/pdf`).
- Otherwise passes the request straight through to GitHub Pages
  unchanged, still setting `Vary` so caches don't mix HTML and markdown
  responses for the same URL.

It's covered by `infra/markdown-negotiation-worker.test.mjs` (`pnpm test`).

**This has not been deployed** — it requires Cloudflare account access
this session doesn't have, plus a DNS decision only the site owner should
make. To turn it on:

1. Add `iamtrung.com` to a Cloudflare account (free plan is enough) and
   point its DNS there — either move the domain's nameservers to
   Cloudflare, or use "CNAME setup" if the registrar supports partial
   delegation.
2. Keep the existing DNS records that point at GitHub Pages
   (`iamtrung.com` → GitHub Pages' A records, `CNAME` file already sets
   the custom domain on the Pages side) but proxy them through Cloudflare
   (orange-clouded).
3. `cd infra && wrangler login && wrangler deploy`.
4. In the Cloudflare dashboard (or by uncommenting `routes` in
   `wrangler.toml`), add a Worker Route for `iamtrung.com/*` pointing at
   this Worker.
5. Re-run the verification below.

## Verifying after deployment

```bash
curl -sI -H "Accept: text/markdown" https://iamtrung.com/about
# expect: HTTP 200, Content-Type: text/markdown; charset=utf-8, Vary: Accept, ...

curl -sI https://iamtrung.com/about
# expect: HTTP 200, Content-Type: text/html; charset=utf-8, Vary: Accept, ... (unchanged for browsers)
```

## Alternative worth considering

`next.config.js` already defines `headers()` and `redirects()` — both are
silently no-ops under `output: 'export'` (Next.js warns about this on
every build) because GitHub Pages never runs Next's server. Moving
hosting to a platform with request-time logic (Vercel, Netlify, Cloudflare
Pages with Functions) would make that existing config real, fix the
currently-dead `/contact` → `/#contact` redirect, and let this
negotiation live in ordinary Next.js middleware instead of a separate
Worker. That's a bigger call than adding a Worker in front of GitHub
Pages, so it's flagged here rather than done — worth a look if GitHub
Pages' static-only model keeps showing up as a limitation.
