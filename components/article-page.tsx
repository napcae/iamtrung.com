import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticle, getLeadAnswer, formatDate, type ArticleKind } from "@/lib/articles"

// Shared renderer for /essays/[slug], /case-studies/[slug], and
// /media/[slug]. Every page links back to the diagnostic and entity pages,
// and carries JSON-LD (Article, or PodcastEpisode for media) inline so it
// exists in the static HTML.

const KIND_LABEL: Record<ArticleKind, { label: string; indexPath: string; indexName: string }> = {
  essays: { label: "Essay", indexPath: "/essays", indexName: "All essays" },
  "case-studies": { label: "Case study", indexPath: "/case-studies", indexName: "All case studies" },
  media: { label: "Podcast", indexPath: "/media", indexName: "All appearances" },
}

export function ArticlePage({ kind, slug }: { kind: ArticleKind; slug: string }) {
  const article = getArticle(kind, slug)
  const meta = KIND_LABEL[kind]
  const url = `https://iamtrung.com/${kind}/${slug}`

  const person = {
    "@type": "Person",
    "@id": "https://iamtrung.com/#trung-nguyen",
    name: "Trung Nguyen",
    url: "https://iamtrung.com/about",
    jobTitle: "Founder Bottleneck Diagnostician",
  }

  const schema =
    kind === "media"
      ? {
          "@context": "https://schema.org",
          "@type": "PodcastEpisode",
          name: article.title,
          description: article.description,
          url,
          mainEntityOfPage: url,
          datePublished: article.published,
          dateModified: article.updated || article.published,
          associatedMedia: article.episodeUrl
            ? { "@type": "MediaObject", contentUrl: article.episodeUrl }
            : undefined,
          partOfSeries: article.podcastName
            ? { "@type": "PodcastSeries", name: article.podcastName }
            : undefined,
          actor: [person],
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          url,
          mainEntityOfPage: url,
          datePublished: article.published,
          dateModified: article.updated || article.published,
          author: person,
        }

  // Essay titles are phrased as the founder's own question, and the lead
  // paragraph already answers it directly (GEO article shape, strategy/seo.md)
  // — FAQPage schema turns that into a structure AI answer engines can lift
  // verbatim instead of having to summarize prose.
  const faqSchema =
    kind === "essays" && article.title.trim().endsWith("?")
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: article.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: getLeadAnswer(article.content),
              },
            },
          ],
        }
      : undefined

  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
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
                {kind === "media" && article.hostName && article.podcastName
                  ? `With ${article.hostName} on ${article.podcastName} · `
                  : "Trung Nguyen · "}
                {formatDate(article.published)}
                {article.updated && article.updated !== article.published
                  ? ` · Updated ${formatDate(article.updated)}`
                  : ""}
              </p>
              {kind === "media" && article.episodeUrl && (
                <p className="mt-2 text-sm">
                  <a
                    href={article.episodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-accent hover:underline"
                  >
                    Watch the full episode →
                  </a>
                </p>
              )}
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
              for capable founders who are compensating for a blind spot instead of resolving it.
            </p>
            <div className="mt-6 flex items-center justify-end gap-6">
              <Link
                href="/essays/what-happens-in-a-diagnostic"
                className="text-earth-accent hover:underline"
              >
                FAQ
              </Link>
              <SocialIcons />
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
