// Pure, dependency-free HTML -> Markdown conversion used to build the
// text/markdown sibling files served alongside each page (see
// scripts/generate-markdown-siblings.mjs). Deliberately narrow: it only
// needs to handle the semantic, hand-authored HTML this site actually
// renders (h1-h4, p, a, ul/ol/li, strong/b, em/i, blockquote, img, br) —
// not arbitrary HTML from the wider web.

const ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  "#x27": "'",
  "#39": "'",
  nbsp: " ",
  mdash: "—",
  ndash: "–",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
}

function decodeEntities(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z0-9]+);/g, (match, code) => {
    if (code[0] === "#") {
      const isHex = code[1] === "x" || code[1] === "X"
      const num = parseInt(code.slice(isHex ? 2 : 1), isHex ? 16 : 10)
      return Number.isNaN(num) ? match : String.fromCodePoint(num)
    }
    return code in ENTITIES ? ENTITIES[code] : match
  })
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i"))
  return match ? match[1] : ""
}

/** Extracts the contents of the single <main>...</main> region of a rendered page. */
export function extractMainHtml(html) {
  const start = html.indexOf("<main")
  if (start === -1) return html
  const openEnd = html.indexOf(">", start)
  const end = html.indexOf("</main>", openEnd)
  if (openEnd === -1 || end === -1) return html
  return html.slice(openEnd + 1, end)
}

/** Converts a fragment of this site's rendered HTML into readable Markdown. */
export function htmlToMarkdown(html) {
  let text = html

  // Drop non-content elements entirely (icons, embeds, scripts/styles).
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, "")
  text = text.replace(/<script[\s\S]*?<\/script>/gi, "")
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "")

  // Links and images (must run before the generic tag stripper).
  text = text.replace(/<a\b[^>]*>/gi, (tag) => `[[[LINK:${attr(tag, "href")}]]]`)
  text = text.replace(/<\/a>/gi, "]]]END_LINK]]]")
  text = text.replace(/<img\b[^>]*>/gi, (tag) => {
    const alt = attr(tag, "alt")
    const src = attr(tag, "src")
    return alt || src ? `![${alt}](${src})` : ""
  })

  // Headings.
  text = text.replace(/<h([1-4])\b[^>]*>/gi, (_m, level) => `\n\n${"#".repeat(Number(level))} `)
  text = text.replace(/<\/h[1-4]>/gi, "\n\n")

  // Inline emphasis.
  text = text.replace(/<(strong|b)\b[^>]*>/gi, "**")
  text = text.replace(/<\/(strong|b)>/gi, "**")
  text = text.replace(/<(em|i)\b[^>]*>/gi, "_")
  text = text.replace(/<\/(em|i)>/gi, "_")

  // Lists.
  text = text.replace(/<li\b[^>]*>/gi, "\n- ")
  text = text.replace(/<\/li>/gi, "")
  text = text.replace(/<\/?(ul|ol)\b[^>]*>/gi, "\n")

  // Blockquotes and line breaks.
  text = text.replace(/<blockquote\b[^>]*>/gi, "\n> ")
  text = text.replace(/<\/blockquote>/gi, "\n")
  text = text.replace(/<br\s*\/?>/gi, "\n")

  // Block-level boundaries become paragraph breaks.
  text = text.replace(/<\/(p|div|section|article|footer|header)>/gi, "\n\n")
  text = text.replace(/<(p|div|section|article|footer|header)\b[^>]*>/gi, "")

  // Inline wrapper tags (spans, buttons) carry no block boundary of their
  // own, but sibling inline elements are often adjacent with zero
  // whitespace in source (e.g. pill-and-arrow diagram steps) — a bare
  // strip would run their text together, so closing tags leave a space.
  text = text.replace(/<\/(span|button)>(?![.,!?;:)\]])/gi, " ")

  // Strip everything else (remaining wrapper tags and their openings).
  text = text.replace(/<[^>]+>/g, "")

  // Re-attach captured link targets: [[[LINK:href]]]text]]]END_LINK]]] -> [text](href)
  text = text.replace(/\[\[\[LINK:([^\]]*)\]\]\]([\s\S]*?)\]\]\]END_LINK\]\]\]/g, (_m, href, label) => {
    const cleanLabel = label.trim()
    return cleanLabel ? `[${cleanLabel}](${href})` : ""
  })

  // Sibling links/buttons in a flex row often have zero whitespace between
  // them in source (e.g. two CTA buttons side by side) — without this they
  // read as one run-on link. Force a break between a closed link and
  // whatever starts immediately after it.
  text = text.replace(/(\]\([^)]*\))(?=\[)/g, "$1\n\n")

  text = decodeEntities(text)

  // Collapse whitespace: trim each line, collapse 3+ blank lines to 1.
  text = text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n")
  text = text.replace(/\n{3,}/g, "\n\n").trim()

  return text
}

export function pageHtmlToMarkdown(html) {
  return htmlToMarkdown(extractMainHtml(html))
}
