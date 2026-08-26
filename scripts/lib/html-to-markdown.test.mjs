import test from "node:test"
import assert from "node:assert/strict"
import { htmlToMarkdown, extractMainHtml, pageHtmlToMarkdown } from "./html-to-markdown.mjs"

test("converts headings and paragraphs", () => {
  const html = '<h1 class="x">Title</h1><p>Hello <strong>world</strong>.</p>'
  assert.equal(htmlToMarkdown(html), "# Title\n\nHello **world**.")
})

test("converts links, preserving href and inner text", () => {
  const html = '<p>See <a href="/about" class="link">About</a> for more.</p>'
  assert.equal(htmlToMarkdown(html), "See [About](/about) for more.")
})

test("converts unordered lists", () => {
  const html = "<ul><li>One</li><li>Two</li></ul>"
  assert.equal(htmlToMarkdown(html), "- One\n- Two")
})

test("decodes common HTML entities", () => {
  const html = "<p>&quot;I&#x27;m sure&quot; &amp; done.</p>"
  assert.equal(htmlToMarkdown(html), '"I\'m sure" & done.')
})

test("drops svg icons and script/style blocks entirely", () => {
  const html =
    '<p>Text<svg><path d="M0 0"/></svg></p><script>alert(1)</script><style>.x{color:red}</style>'
  assert.equal(htmlToMarkdown(html), "Text")
})

test("strips italic/emphasis markup", () => {
  const html = "<p>This is <em>important</em>.</p>"
  assert.equal(htmlToMarkdown(html), "This is _important_.")
})

test("collapses excess blank lines from nested block elements", () => {
  const html = "<div><section><p>A</p></section><section><p>B</p></section></div>"
  assert.equal(htmlToMarkdown(html), "A\n\nB")
})

test("extractMainHtml pulls only the <main> region", () => {
  const html = "<header>Nav</header><main><p>Content</p></main><footer>Foot</footer>"
  assert.equal(extractMainHtml(html), "<p>Content</p>")
})

test("extractMainHtml falls back to the full document when there is no <main>", () => {
  const html = "<div><p>Content</p></div>"
  assert.equal(extractMainHtml(html), html)
})

test("pageHtmlToMarkdown composes extraction and conversion", () => {
  const html = "<header><nav>Skip me</nav></header><main><h1>Hi</h1><p>Body</p></main>"
  assert.equal(pageHtmlToMarkdown(html), "# Hi\n\nBody")
})

test("image tags become markdown images when alt or src is present", () => {
  const html = '<img alt="A portrait" src="/me.jpg"/>'
  assert.equal(htmlToMarkdown(html), "![A portrait](/me.jpg)")
})

test("adjacent sibling links with no whitespace between them get separated", () => {
  const html = '<div><a href="/a">First</a><a href="/b">Second</a></div>'
  assert.equal(htmlToMarkdown(html), "[First](/a)\n\n[Second](/b)")
})

test("adjacent inline spans with no whitespace get separated by a space", () => {
  const html = '<p><span class="pill">Name a problem</span><span class="pill">Attack it</span></p>'
  assert.equal(htmlToMarkdown(html), "Name a problem Attack it")
})

test("a span immediately followed by punctuation does not gain a stray space", () => {
  const html = 'Who is <span class="accent">Trung Nguyen</span>?'
  assert.equal(htmlToMarkdown(html), "Who is Trung Nguyen?")
})

test("images with neither alt nor src are dropped", () => {
  const html = '<div class="spacer"><img/></div>'
  assert.equal(htmlToMarkdown(html), "")
})
