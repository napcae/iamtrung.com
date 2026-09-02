import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticles, formatDate } from "@/lib/articles"

export const metadata = {
  title: "Essays",
  description:
    "Essays by Trung Nguyen, Founder Bottleneck Diagnostician — direct answers to the questions capable founders actually ask about stalled decisions, execution and growth.",
  alternates: { canonical: "/essays" },
}

export default function EssaysIndex() {
  const essays = getArticles("essays")
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-36 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Essays</h1>
          <p className="text-lg text-earth-muted mb-16">
            Direct answers to the questions founders actually ask — each one opens with the answer, then
            goes deep.
          </p>
          <ul className="space-y-12">
            {essays.map((essay) => (
              <li key={essay.slug}>
                <Link href={`/essays/${essay.slug}`} className="group block">
                  <h2 className="text-2xl font-semibold group-hover:text-earth-accent transition-colors">
                    {essay.title}
                  </h2>
                  <p className="mt-2 text-earth-dark">{essay.description}</p>
                  <p className="mt-2 text-sm text-earth-muted">{formatDate(essay.published)}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-sm text-earth-muted">
            <Link href="/case-studies" className="text-earth-accent hover:underline">
              Case studies →
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
