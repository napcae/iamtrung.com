import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticles, formatDate, collectionSchema } from "@/lib/articles"

export const metadata = {
  title: "Case studies",
  description:
    "Founder Bottleneck Diagnostic cases and clearly labelled composite patterns: what founders thought was wrong, what the work found, and when to refer.",
  alternates: { canonical: "/case-studies" },
}

export default function CaseStudiesIndex() {
  const cases = getArticles("case-studies")
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema("case-studies", metadata.description)),
        }}
      />
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-36 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Case studies
          </h1>
          <p className="text-lg text-earth-muted mb-16">
            Real client cases and clearly labelled composite patterns. Names appear only where the client
            cleared them; every quote is verbatim. Composite patterns contain no client quote or claimed
            individual result.
          </p>
          <ul className="space-y-12">
            {cases.map((cs) => (
              <li key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block">
                  <p className="mb-2 text-xs uppercase tracking-wide text-earth-muted">
                    {cs.articleLabel ?? "Case study"}
                  </p>
                  <h2 className="text-2xl font-semibold group-hover:text-earth-accent transition-colors">
                    {cs.title}
                  </h2>
                  <p className="mt-2 text-earth-dark">{cs.description}</p>
                  <p className="mt-2 text-sm text-earth-muted">{formatDate(cs.published)}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-sm text-earth-muted">
            <Link href="/essays" className="text-earth-accent hover:underline">
              Essays →
            </Link>
          </p>
        </section>
      </main>
      <SiteFooter variant="narrow" />
    </div>
  )
}
