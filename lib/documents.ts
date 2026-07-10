import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Forwardable branded documents. Source of truth for content decisions is
// napcae/TrungOPS (see each file's `source` frontmatter field) — edit there
// first, then mirror the body here. Rendered at /d/[slug]; a matching PDF is
// generated at /d/[slug].pdf during deploy (scripts/generate-pdfs.mjs).
const DOCUMENTS_DIR = path.join(process.cwd(), "content", "documents")

export interface BrandedDocument {
  slug: string
  title: string
  label: string
  description: string
  updated: string
  content: string
}

export function getDocumentSlugs(): string[] {
  return fs
    .readdirSync(DOCUMENTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getDocument(slug: string): BrandedDocument {
  const raw = fs.readFileSync(path.join(DOCUMENTS_DIR, `${slug}.md`), "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    label: data.label ?? "",
    description: data.description ?? "",
    updated: data.updated ? String(data.updated) : "",
    content,
  }
}

export function formatUpdated(updated: string): string {
  const date = new Date(updated)
  if (Number.isNaN(date.getTime())) return updated
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}
