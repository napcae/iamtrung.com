import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticle, formatDate, type ArticleKind } from "@/lib/articles"

// Shared renderer for /essays/[slug] and /case-studies/[slug].
// Every article links back to the diagnostic and entity pages, and carries
// Article JSON-LD inline so it exists in the static HTML.

const KIND_LABEL: Record<ArticleKind, { label: string; indexPath: string; indexName: string }> = {
  essays: { label: "Essay", indexPath: "/essays", indexName: "All essays" },
  "case-studies": { label: "Case study", indexPath: "/case-studies", indexName: "All case studies" },
}

export function ArticlePage({ kind, slug }: { kind: ArticleKind; slug: string }) {
  const article = getArticle(kind, slug)
  const meta = KIND_LABEL[kind]
  const url = `https://iamtrung.com/${kind}/${slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    datePublished: article.published,
    dateModified: article.updated || article.published,
    author: {
      "@type": "Person",
      "@id": "https://iamtrung.com/#trung-nguyen",
      name: "Trung Nguyen",
      url: "https://iamtrung.com/about",
      jobTitle: "Founder Bottleneck Diagnostician",
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation />

      <main className="flex-1">
        <article className="mx-auto max-w-2xl px-6 pt-36 pb-16 md:pb-24">
          <header className="mb-12">
            <Link
              href={meta.indexPath}
              className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {meta.indexName}
            </Link>
            <p className="mb-4 text-sm uppercase tracking-wide text-earth-muted">{meta.label}</p>
            <h1 className="text-4xl md:text-5xl text-earth-dark leading-tight">{article.title}</h1>
            <div className="mt-6 border-b border-earth-sand pb-6">
              <p className="text-sm text-earth-muted">
                Trung Nguyen · {formatDate(article.published)}
                {article.updated && article.updated !== article.published
                  ? ` · Updated ${formatDate(article.updated)}`
                  : ""}
              </p>
            </div>
          </header>

          <div className="branded-doc">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          <footer className="mt-16 border-t border-earth-sand pt-6 text-sm text-earth-muted">
            <p>
              <Link href="/about" className="text-earth-accent hover:underline">
                Trung Nguyen
              </Link>{" "}
              is a Founder Bottleneck Diagnostician. He runs{" "}
              <Link href="/founder-diagnostic" className="text-earth-accent hover:underline">
                90-minute diagnostics
              </Link>{" "}
              for post-MVP founder-led companies with 3–20 people.
            </p>
            <div className="mt-6 flex justify-end">
              <SocialIcons />
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
