import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Indexed long-form content: essays (buyer-question articles) and case
// studies. Unlike /d/ documents these ARE meant for search and AI-answer
// crawlers — indexed, in the sitemap, internally linked. Source of truth
// for the copy is napcae/TrungOPS (see each file's `source` frontmatter) —
// edit there first, then mirror the body here.

export type ArticleKind = "essays" | "case-studies"

export interface Article {
  slug: string
  title: string
  description: string
  published: string
  updated: string
  content: string
}

function dirFor(kind: ArticleKind): string {
  return path.join(process.cwd(), "content", kind)
}

export function getArticleSlugs(kind: ArticleKind): string[] {
  const dir = dirFor(kind)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getArticle(kind: ArticleKind, slug: string): Article {
  const raw = fs.readFileSync(path.join(dirFor(kind), `${slug}.md`), "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    description: data.description ?? "",
    published: data.published ? String(data.published) : "",
    updated: data.updated ? String(data.updated) : "",
    content,
  }
}

export function getArticles(kind: ArticleKind): Article[] {
  return getArticleSlugs(kind)
    .map((slug) => getArticle(kind, slug))
    .sort((a, b) => (a.published < b.published ? 1 : -1))
}

export function formatDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}
