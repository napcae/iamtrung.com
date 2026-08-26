#!/usr/bin/env node
// Regression check for the agent-readiness fixes: fails the build (and CI)
// if a future change silently drops the 404 recovery content, a markdown
// sibling, the privacy page, or the llms.txt guidance section. Runs as
// chained onto the end of the "build" script in package.json, after
// generate-markdown-siblings.mjs.

import fs from "node:fs"
import path from "node:path"
import { pageHtmlToMarkdown } from "./lib/html-to-markdown.mjs"

const root = process.cwd()
const outDir = path.join(root, "out")
const failures = []

function read(relPath) {
  const abs = path.join(outDir, relPath)
  return fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : null
}

function check(condition, message) {
  if (!condition) failures.push(message)
}

// 1. Agent-friendly 404: real recovery content, not the bare Next.js default.
const notFoundHtml = read("404.html")
check(notFoundHtml !== null, "out/404.html is missing")
if (notFoundHtml) {
  check(/sitemap\.xml/.test(notFoundHtml), "404 page does not link to sitemap.xml")
  check(/llms\.txt/.test(notFoundHtml), "404 page does not link to llms.txt")
  check(!/This page could not be found\.<\/h2>/.test(notFoundHtml), "404 page still shows the bare Next.js default body")
}

// 2. Privacy trust-anchor page: real content, at least 500 characters.
const privacyHtml = read("privacy.html")
check(privacyHtml !== null, "out/privacy.html is missing")
if (privacyHtml) {
  const text = pageHtmlToMarkdown(privacyHtml)
  check(text.length >= 500, `privacy page content is only ${text.length} chars (need >= 500)`)
}

// 3. Every essay / case study / media article has a markdown sibling.
const contentDir = path.join(root, "content")
for (const kind of ["essays", "case-studies", "media"]) {
  const dir = path.join(contentDir, kind)
  if (!fs.existsSync(dir)) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    const slug = file.replace(/\.md$/, "")
    check(fs.existsSync(path.join(outDir, kind, `${slug}.md`)), `missing markdown sibling for ${kind}/${slug}`)
  }
}

// 4. Core pages have a markdown sibling for agents that fetch <path>.md directly.
for (const route of ["index", "about", "founder-diagnostic", "privacy"]) {
  check(fs.existsSync(path.join(outDir, `${route}.md`)), `missing markdown sibling for ${route}`)
}

// 5. llms.txt carries explicit when-to-use guidance.
const llmsTxt = read("llms.txt")
check(llmsTxt !== null, "out/llms.txt is missing")
if (llmsTxt) {
  check(/## When to use this/i.test(llmsTxt), "llms.txt is missing a 'When to use this' section")
  check(/privacy/i.test(llmsTxt), "llms.txt does not reference the privacy page")
}

// 6. sitemap.xml references the privacy page.
const sitemap = read("sitemap.xml")
check(sitemap !== null, "out/sitemap.xml is missing")
if (sitemap) {
  check(sitemap.includes("https://iamtrung.com/privacy"), "sitemap.xml is missing the /privacy entry")
}

if (failures.length > 0) {
  console.error("verify-agent-readiness: FAILED\n" + failures.map((f) => ` - ${f}`).join("\n"))
  process.exit(1)
}

console.log("verify-agent-readiness: all checks passed")
