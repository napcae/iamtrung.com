#!/usr/bin/env node
// Regression check for the agent-readiness fixes: fails the build (and CI)
// if a future change silently drops the 404 recovery content, a markdown
// sibling, the privacy page, or the llms.txt guidance section. Runs as
// chained onto the end of the "build" script in package.json, after
// generate-markdown-siblings.mjs.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
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

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

function tagAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]*)"`, "i"))
  return match ? decodeHtml(match[1]) : null
}

function metaContent(html, key) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if (tagAttribute(tag, "property") === key || tagAttribute(tag, "name") === key) {
      return tagAttribute(tag, "content")
    }
  }
  return null
}

function canonicalHref(html) {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    if (tagAttribute(tag, "rel") === "canonical") return tagAttribute(tag, "href")
  }
  return null
}

function footerLinksToFaq(html) {
  return /<footer\b[\s\S]*href="\/essays\/what-happens-in-a-diagnostic"/i.test(html)
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

    const articleHtml = read(`${kind}/${slug}.html`)
    check(articleHtml !== null, `missing rendered HTML for ${kind}/${slug}`)
    if (articleHtml) {
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      const { data } = matter(raw)
      const expectedUrl = `https://iamtrung.com/${kind}/${slug}`
      check(canonicalHref(articleHtml) === expectedUrl, `${kind}/${slug} has the wrong canonical URL`)
      check(metaContent(articleHtml, "og:title") === data.title, `${kind}/${slug} does not have its own og:title`)
      check(metaContent(articleHtml, "og:url") === expectedUrl, `${kind}/${slug} does not have its own og:url`)
      check(metaContent(articleHtml, "twitter:title") === data.title, `${kind}/${slug} does not have its own twitter:title`)
      check(footerLinksToFaq(articleHtml), `${kind}/${slug} footer does not link to the FAQ`)
      check(
        /"datePublished":"\d{4}-\d{2}-\d{2}"/.test(articleHtml),
        `${kind}/${slug} does not emit an ISO 8601 datePublished`,
      )
    }
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
  for (const kind of ["essays", "case-studies", "media"]) {
    const dir = path.join(contentDir, kind)
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md")) continue
      const slug = file.replace(/\.md$/, "")
      check(
        sitemap.includes(`https://iamtrung.com/${kind}/${slug}`),
        `sitemap.xml is missing /${kind}/${slug}`,
      )
    }
  }
}

// 7. The commercial page must be independently identifiable in search/share
// surfaces and expose the paid service as structured data.
const diagnosticHtml = read("founder-diagnostic.html")
check(diagnosticHtml !== null, "out/founder-diagnostic.html is missing")
if (diagnosticHtml) {
  check(
    canonicalHref(diagnosticHtml) === "https://iamtrung.com/founder-diagnostic",
    "founder-diagnostic has the wrong canonical URL",
  )
  check(
    metaContent(diagnosticHtml, "og:url") === "https://iamtrung.com/founder-diagnostic",
    "founder-diagnostic inherits the homepage og:url",
  )
  check(
    metaContent(diagnosticHtml, "og:title") === "Founder Bottleneck Diagnostic | Trung Nguyen",
    "founder-diagnostic inherits the homepage og:title",
  )
  check(
    !diagnosticHtml.includes("Founder Bottleneck Diagnostic | Trung Nguyen | Trung Nguyen"),
    "founder-diagnostic title repeats the site name",
  )
  check(/"@type":"Service"/.test(diagnosticHtml), "founder-diagnostic is missing Service JSON-LD")
  check(/"price":"750","priceCurrency":"EUR"/.test(diagnosticHtml), "Service JSON-LD price is missing or stale")
}

// 8. Social previews use the branded decision graphic, not the raw portrait.
const homeHtml = read("index.html")
if (homeHtml) {
  check(
    metaContent(homeHtml, "og:image") === "https://iamtrung.com/og/founder-bottleneck-diagnostic.png",
    "homepage og:image is not the branded diagnostic graphic",
  )
}

// 9. The existing diagnostic FAQ answer is discoverable from site footers.
for (const route of [
  "index",
  "about",
  "privacy",
  "founder-diagnostic",
  "procrastination-workshop",
  "reconnect-vietnam",
  "the-innernet",
  "essays",
  "case-studies",
  "media",
]) {
  const html = read(`${route}.html`)
  check(html !== null, `out/${route}.html is missing`)
  if (html) check(footerLinksToFaq(html), `${route} footer does not link to the FAQ`)
}

if (failures.length > 0) {
  console.error("verify-agent-readiness: FAILED\n" + failures.map((f) => ` - ${f}`).join("\n"))
  process.exit(1)
}

console.log("verify-agent-readiness: all checks passed")
