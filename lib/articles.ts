import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Metadata } from "next"

// Indexed long-form content: essays (buyer-question articles), case
// studies, and media appearances (podcast/video). Unlike /d/ documents
// these ARE meant for search and AI-answer crawlers — indexed, in the
// sitemap, internally linked. Source of truth for the copy is
// napcae/TrungOPS (see each file's `source` frontmatter) — edit there
// first, then mirror the body here.

export type ArticleKind = "essays" | "case-studies" | "media"

export interface Article {
  slug: string
  title: string
  description: string
  published: string
  updated: string
  content: string
  image?: string
  // media-only fields
  podcastName?: string
  hostName?: string
  episodeUrl?: string
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
    published: normalizeArticleDate(data.published),
    updated: normalizeArticleDate(data.updated),
    content,
    image: data.image,
    podcastName: data.podcastName,
    hostName: data.hostName,
    episodeUrl: data.episodeUrl,
  }
}

// YAML parses unquoted YYYY-MM-DD frontmatter values as Date objects. String(Date)
// produces a locale-shaped value ("Mon Aug 03 2026 ...") that is not the ISO 8601
// date Google expects in Article structured data. Keep the source's date-only shape.
export function normalizeArticleDate(value: unknown): string {
  if (!value) return ""
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }

  const raw = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw

  const parsed = new Date(raw)
  return Number.isNaN(parsed.getTime()) ? raw : parsed.toISOString().slice(0, 10)
}

export function getArticleMetadata(kind: ArticleKind, slug: string): Metadata {
  const article = getArticle(kind, slug)
  const pathname = `/${kind}/${slug}`
  const image = article.image || "/og/founder-bottleneck-diagnostic.png"
  const imageSize = article.image ? { width: 1254, height: 1254 } : { width: 1200, height: 630 }

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "article",
      url: pathname,
      siteName: "Trung Nguyen",
      title: article.title,
      description: article.description,
      publishedTime: article.published,
      modifiedTime: article.updated || article.published,
      authors: ["https://iamtrung.com/about"],
      images: [{ url: image, ...imageSize, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
  }
}

export function getArticles(kind: ArticleKind): Article[] {
  return getArticleSlugs(kind)
    .map((slug) => getArticle(kind, slug))
    .sort((a, b) => (a.published < b.published ? 1 : -1))
}

// The lead paragraph of every essay is written as a direct, self-contained
// answer to the title question (`strategy/seo.md` "GEO article shape") —
// exactly what FAQPage schema's acceptedAnswer wants. Strip markdown syntax
// down to plain text since JSON-LD text fields don't render markdown.
export function getLeadAnswer(content: string): string {
  const firstParagraph = content.trim().split(/\n\s*\n/)[0] ?? ""
  return firstParagraph
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
    .replace(/[*_`]/g, "") // bold/italic/code markers
    .replace(/\s+/g, " ")
    .trim()
}

export function formatDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

// Structural signals, not copy changes. `TrungOPS/strategy/seo.md` records the
// SAGEO Arena (KDD 2026) finding that GEO is a pipeline — crawl/index →
// retrieve → rerank → cite — and that schema/metadata was what mitigated
// failures at the early stages, where rewriting prose for "quotability" can
// actually hurt. So the lever here is structure: say what each page is and how
// the corpus fits together, without touching a word of the essays.

const SITE = "https://iamtrung.com"

const KIND_INDEX: Record<ArticleKind, string> = {
  essays: "Essays",
  "case-studies": "Case studies",
  media: "Media",
}

// Home > Essays > This essay. Mirrors the visible "All essays ←" trail already
// at the top of every article page, which is what Google asks breadcrumb markup
// to correspond to.
export function breadcrumbSchema(kind: ArticleKind, title: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: KIND_INDEX[kind], item: `${SITE}/${kind}` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE}/${kind}/${slug}` },
    ],
  }
}

// One URL that enumerates the whole corpus for a kind. Without this an index
// page is just a list of links; with it a crawler that fetches /essays alone
// comes away with every title, description and date in the cluster.
export function collectionSchema(kind: ArticleKind, description: string) {
  const articles = getArticles(kind)
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/${kind}#collection`,
    name: KIND_INDEX[kind],
    description,
    url: `${SITE}/${kind}`,
    isPartOf: { "@type": "WebSite", "@id": `${SITE}/#website` },
    about: { "@type": "Person", "@id": `${SITE}/#trung-nguyen` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE}/${kind}/${article.slug}`,
        name: article.title,
      })),
    },
  }
}
