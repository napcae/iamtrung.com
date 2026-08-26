import test from "node:test"
import assert from "node:assert/strict"
import { negotiate, markdownSiblingPath } from "./markdown-negotiation-worker.js"

test("negotiate: explicit text/markdown wins", () => {
  assert.equal(negotiate("text/markdown"), "markdown")
})

test("negotiate: standard browser Accept header prefers html", () => {
  assert.equal(negotiate("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), "html")
})

test("negotiate: missing Accept header defaults to html", () => {
  assert.equal(negotiate(null), "html")
})

test("negotiate: q-values decide between explicit markdown and html", () => {
  assert.equal(negotiate("text/markdown;q=0.9, text/html;q=0.5"), "markdown")
  assert.equal(negotiate("text/markdown;q=0.3, text/html;q=0.8"), "html")
})

test("negotiate: a tie between markdown and html (both via */*) prefers html", () => {
  assert.equal(negotiate("*/*"), "html")
})

test("negotiate: an explicit type with no html/markdown/wildcard is unsupported", () => {
  assert.equal(negotiate("application/pdf"), "unsupported")
})

test("markdownSiblingPath: root path maps to /index.md", () => {
  assert.equal(markdownSiblingPath("/"), "/index.md")
})

test("markdownSiblingPath: a normal path gets .md appended", () => {
  assert.equal(markdownSiblingPath("/about"), "/about.md")
  assert.equal(markdownSiblingPath("/essays/founder-is-the-bottleneck"), "/essays/founder-is-the-bottleneck.md")
})

test("markdownSiblingPath: a trailing slash is normalized before appending", () => {
  assert.equal(markdownSiblingPath("/about/"), "/about.md")
})

test("markdownSiblingPath: a request already for a .md file is left alone", () => {
  assert.equal(markdownSiblingPath("/about.md"), null)
})
