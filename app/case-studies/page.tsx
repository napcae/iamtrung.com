import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticles, formatDate } from "@/lib/articles"

export const metadata = {
  title: "Case studies",
  description:
    "Founder Bottleneck Diagnostic case studies — what the founder thought was wrong, what the session found, and what changed, with real numbers where clients cleared them.",
  alternates: { canonical: "/case-studies" },
}

export default function CaseStudiesIndex() {
  const cases = getArticles("case-studies")
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-36 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Case studies
          </h1>
          <p className="text-lg text-earth-muted mb-16">
            What the founder thought was wrong, what the diagnostic found, and what changed. Names appear
            only where the client cleared them; every quote is verbatim.
          </p>
          <ul className="space-y-12">
            {cases.map((cs) => (
              <li key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block">
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
      <footer className="py-12 px-6 border-t border-earth-light/50">
        <div className="mx-auto max-w-2xl flex justify-between items-center gap-6">
          <p className="text-sm text-earth-muted">© {new Date().getFullYear()} Trung Nguyen</p>
          <div className="flex items-center gap-6">
            <Link
              href="/essays/what-happens-in-a-diagnostic"
              className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
            >
              FAQ
            </Link>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  )
}
