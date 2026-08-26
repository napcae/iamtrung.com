#!/usr/bin/env node
// Generates a text/markdown sibling file next to every static HTML page in
// ./out — /about -> /about.md, /essays/foo -> /essays/foo.md, and so on.
//
// GitHub Pages (this site's host) is a pure static file server: it cannot
// inspect an incoming Accept header and vary its response, so real
// same-URL content negotiation per acceptmarkdown.com is not achievable
// from static files alone (see infra/README.md for the edge-worker path
// that closes that gap). These sibling files are the static-hosting-native
// fallback: any agent that knows the convention (documented in
// public/llms.txt) can fetch <path>.md directly, and they double as the
// origin content an edge worker would proxy for true negotiation.
//
// Two sources, by fidelity:
//   1. Essays / case studies / media appearances already have a markdown
//      source of truth in content/<kind>/<slug>.md — reuse it verbatim.
//   2. Every other page is derived from its own rendered HTML output, so
//      the markdown can never drift from what a visitor actually sees.
//
// Runs as a "postbuild" script, after `next build` has written ./out.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { pageHtmlToMarkdown } from "./lib/html-to-markdown.mjs"

const root = process.cwd()
const outDir = path.join(root, "out")
const contentDir = path.join(root, "content")
const siteUrl = "https://iamtrung.com"

// Paths (relative to ./out, without extension) intentionally excluded from
// the generic HTML->Markdown pass: 404 has its own dedicated agent-facing
// design (app/not-found.tsx), and /d/ documents are deliberately unlisted
// (see CLAUDE.md "Branded documents") — no sibling files, same as they get
// no sitemap/llms.txt entry.
const EXCLUDED_PREFIXES = ["404", "d/"]

function articleKinds() {
  return ["essays", "case-studies", "media"].filter((kind) => fs.existsSync(path.join(contentDir, kind)))
}

/** Copies each content/<kind>/<slug>.md source into out/<kind>/<slug>.md. */
function generateArticleMarkdown() {
  const handled = new Set()
  for (const kind of articleKinds()) {
    const dir = path.join(contentDir, kind)
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md")) continue
      const slug = file.replace(/\.md$/, "")
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      const { data, content } = matter(raw)
      const title = data.title ?? slug
      const body = [
        `# ${title}`,
        "",
        content.trim(),
        "",
        "---",
        `Source: ${siteUrl}/${kind}/${slug}`,
      ].join("\n")

      const outPath = path.join(outDir, kind, `${slug}.md`)
      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      fs.writeFileSync(outPath, body + "\n")
      handled.add(path.posix.join(kind, slug))
    }
  }
  return handled
}

function walkHtmlFiles(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "_next") continue
      files.push(...walkHtmlFiles(abs, rel))
    } else if (entry.name.endsWith(".html")) {
      files.push(rel)
    }
  }
  return files
}

function routeFor(relHtmlPath) {
  // index.html -> "" (home), about.html -> "about", essays/foo.html -> "essays/foo"
  const withoutExt = relHtmlPath.replace(/\.html$/, "")
  return withoutExt === "index" ? "" : withoutExt
}

/** Derives a markdown sibling for every remaining page from its built HTML. */
function generateDerivedMarkdown(alreadyHandled) {
  let count = 0
  for (const relHtmlPath of walkHtmlFiles(outDir)) {
    const route = routeFor(relHtmlPath)
    if (alreadyHandled.has(route)) continue
    if (EXCLUDED_PREFIXES.some((prefix) => (route + "/").startsWith(prefix) || relHtmlPath.startsWith(prefix))) {
      continue
    }

    const html = fs.readFileSync(path.join(outDir, relHtmlPath), "utf8")
    const markdown = pageHtmlToMarkdown(html)
    if (!markdown) continue

    const canonicalPath = route ? `/${route}` : "/"
    const body = `${markdown}\n\n---\nSource: ${siteUrl}${canonicalPath}\n`

    const outPath = path.join(outDir, route ? `${route}.md` : "index.md")
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, body)
    count += 1
  }
  return count
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error("generate-markdown-siblings: ./out does not exist — run `next build` first.")
    process.exit(1)
  }

  const articleRoutes = generateArticleMarkdown()
  const derivedCount = generateDerivedMarkdown(articleRoutes)

  console.log(
    `generate-markdown-siblings: wrote ${articleRoutes.size} article .md files + ${derivedCount} derived .md files`,
  )
}

main()
