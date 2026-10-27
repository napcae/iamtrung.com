import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { ArrowRight, Check, AlertCircle, Network, TrendingUp, ClipboardList, Search, Compass, MessageSquare, HelpCircle, NotebookPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { TrackedLink } from "@/components/tracked-link"
import { withParams } from "@/lib/url"
import {
  founderDiagnosticMeta,
  hero,
  recognition,
  process,
  about,
  cta,
  videoEmbed,
  teardown,
  caseStudies,
} from "@/data/founder-diagnostic"

export const metadata: Metadata = {
  title: { absolute: founderDiagnosticMeta.title },
  description: founderDiagnosticMeta.description,
  alternates: { canonical: "/founder-diagnostic" },
  openGraph: {
    type: "website",
    url: "/founder-diagnostic",
    siteName: "Trung Nguyen",
    title: founderDiagnosticMeta.title,
    description: founderDiagnosticMeta.description,
    images: [
      {
        url: "/og/founder-bottleneck-diagnostic.png",
        width: 1200,
        height: 630,
        alt: "Founder Bottleneck Diagnostic — 90 minutes, one constraint, one decision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: founderDiagnosticMeta.title,
    description: founderDiagnosticMeta.description,
    images: ["/og/founder-bottleneck-diagnostic.png"],
  },
}

const diagnosticUrl = "https://iamtrung.com/founder-diagnostic"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${diagnosticUrl}#service`,
  name: "Founder Bottleneck Diagnostic",
  alternateName: "90-Minute Execution Bottleneck Diagnostic",
  description: founderDiagnosticMeta.description,
  url: diagnosticUrl,
  mainEntityOfPage: diagnosticUrl,
  serviceType: "Founder bottleneck diagnostic",
  provider: {
    "@type": "Person",
    "@id": "https://iamtrung.com/#trung-nguyen",
    name: "Trung Nguyen",
    url: "https://iamtrung.com/about",
    jobTitle: "Founder Bottleneck Diagnostician",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Founders of operating companies with a live, costly execution or decision problem",
  },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    "@id": `${diagnosticUrl}#offer`,
    name: "One 90-minute Founder Bottleneck Diagnostic",
    price: "750",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: diagnosticUrl,
  },
}

export default function FounderDiagnosticPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />

      <main className="flex-1">
        {/* Section 1: Hook */}
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-normal leading-relaxed">
                {hero.headline}
              </h1>

              <p className="text-xl text-earth-dark font-normal leading-relaxed max-w-2xl">
                {hero.subheadline}
              </p>

              {/* Hero CTA (2026-10-20): price and checkout above the fold; the quiz is a
                  quiet text link, never a second button. */}
              <div className="space-y-4">
                <p className="text-lg text-earth-muted font-normal">{hero.cta.priceLine}</p>
                <Button
                  asChild
                  className="group w-full sm:w-auto max-w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-6 sm:px-10 py-5 h-auto font-normal transition-all duration-300 text-lg whitespace-normal"
                >
                  <TrackedLink
                    event="checkout_hero"
                    carryParam="client_reference_id"
                    href={withParams(hero.cta.buttonUrl, { client_reference_id: "lp_hero" })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hero.cta.buttonText}
                    <ArrowRight className="ml-3 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </TrackedLink>
                </Button>
                <p className="text-sm text-earth-muted">
                  <TrackedLink
                    event="quiz_hero"
                    carryParam="source"
                    href={withParams(hero.cta.quiz.url, { source: "landing_hero" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-earth-dark transition-colors"
                  >
                    {hero.cta.quiz.text}
                  </TrackedLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Recognition */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-earth-accent mt-1" />
              </div>
              <div>
                <h2 className="text-2xl font-normal mb-6 text-earth-accent">{recognition[0].headline}</h2>
                <div className="space-y-3 text-lg font-normal leading-relaxed text-earth-dark">
                  {recognition[0].body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Teardown — anatomy of a diagnosis (on-page visual) */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-12 text-earth-accent">{teardown.sectionHeadline}</h2>

            <div className="space-y-8">
              {/* Surface complaint */}
              <div className="flex gap-6">
                <MessageSquare className="h-6 w-6 text-earth-muted flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-muted uppercase tracking-wide font-medium mb-2">The complaint, in his words</h3>
                  <p className="text-xl font-normal leading-relaxed text-earth-dark italic">&ldquo;{teardown.surfaceComplaint}&rdquo;</p>
                </div>
              </div>

              {/* The one question -> the answer */}
              <div className="flex gap-6">
                <HelpCircle className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-lg font-normal leading-relaxed text-earth-dark">
                    <span className="text-earth-accent font-medium">Q:</span> {teardown.theQuestion}
                  </p>
                  <p className="text-lg font-normal leading-relaxed text-earth-muted flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    &ldquo;{teardown.theAnswer}&rdquo;
                  </p>
                </div>
              </div>

              {/* The reveal */}
              <div className="flex gap-6">
                <Search className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">{teardown.revealLabel}</h3>
                  <ul className="space-y-3">
                    {teardown.reveal.map((fact, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <span className="font-normal text-lg text-earth-dark">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The real bottleneck */}
              <div className="border-l-4 border-earth-accent pl-6 py-2">
                <p className="text-xl font-normal leading-relaxed text-earth-dark">{teardown.realBottleneck}</p>
              </div>

              {/* Closing quote */}
              <div className="bg-earth-background rounded-lg p-8 border-l-4 border-earth-accent">
                <blockquote className="text-xl font-normal leading-relaxed mb-4">
                  &ldquo;{teardown.quote}&rdquo;
                </blockquote>
                <cite className="not-italic font-light text-earth-muted">— {teardown.attribution}</cite>
              </div>

              <Link
                href="/case-studies/the-dashboard-he-never-opened"
                className="inline-flex items-center text-sm text-earth-accent hover:underline"
              >
                Read the full case study
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>

              {/* Bridge from the builder case to the dependency reader, then the one
                  buyer-matched case (caseStudies[0]) before the fit filter */}
              <p className="text-lg font-normal leading-relaxed text-earth-dark">{teardown.bridge}</p>

              <CaseCard c={caseStudies[0]} />
            </div>
          </div>
        </section>

        {/* Section 4: Existing video (preserved). The "I already knew it" framing line was
            removed 2026-10-20: never a pre-purchase promise (TrungOPS strategy/positioning.md). */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="aspect-video w-full max-w-2xl rounded-lg overflow-hidden border border-earth-light shadow-sm">
              <iframe
                src={videoEmbed.src}
                className="w-full h-full"
                allow={videoEmbed.allow}
              />
            </div>
          </div>
        </section>

        {/* Section: What you leave with */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-12 text-earth-accent">{process.sectionHeadline}</h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <ClipboardList className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <ul className="space-y-4">
                  {process.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <span className="font-normal text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6">
                <Compass className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <p className="text-earth-muted font-normal leading-relaxed">{process.test}</p>
              </div>

              <div className="flex gap-6">
                <NotebookPen className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-normal leading-relaxed">{process.beforeSession}</p>
              </div>

              <div className="flex gap-6">
                <Search className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-normal leading-relaxed">{process.whatItIsnt}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: About (fit filter) */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-6 text-lg font-normal leading-relaxed">
              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <Check className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">Who this is for</h3>
                  <p>{about.whoFor}</p>
                </div>
              </div>

              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <Network className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">The pattern</h3>
                  <p>{about.pattern}</p>
                </div>
              </div>

              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <TrendingUp className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">The cost</h3>
                  <p className="text-earth-muted">{about.math}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: CTA — single priced rung (diagnostic), live Stripe checkout. The €49
            fallback is paused off this page (operator call, 2026-08-07). The quiz is the
            one secondary path, a text link (2026-10-20). Spec:
            TrungOPS/context/website/landing-page.md, Section 8. */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-2xl mx-auto text-center">
            {/* Judges' table photo (2026-10-27, TrungOPS photo bank P236): the title on the name card was printed
                by the organiser, not us. It sits with the career line at the ask, never in the hero. */}
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto mb-6 rounded-lg overflow-hidden border border-earth-light/30">
              <Image
                src="/trung-judges-table.jpg"
                alt="Trung Nguyen questioning a startup pitch from the judges' table, name card reading Founder Bottleneck Diagnostician"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base font-normal leading-relaxed text-earth-muted mb-10 max-w-xl mx-auto">
              {cta.about.text}{" "}
              <TrackedLink event="about_bottom" href={cta.about.url} className="underline hover:text-earth-dark transition-colors">
                {cta.about.linkText}
              </TrackedLink>
            </p>
            <p className="text-3xl font-normal mb-4">{cta.diagnostic.headline}</p>
            <p className="text-lg font-normal leading-relaxed text-earth-dark mb-4 max-w-xl mx-auto">
              {cta.diagnostic.body}
            </p>
            <p className="text-base font-normal leading-relaxed text-earth-muted mb-8 max-w-xl mx-auto">
              {cta.diagnostic.credit}
            </p>
            <Button
              asChild
              className="group w-full sm:w-auto max-w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-6 sm:px-12 py-6 sm:py-8 h-auto font-normal transition-all duration-300 text-lg sm:text-xl whitespace-normal"
            >
              <TrackedLink
                event="checkout_bottom"
                carryParam="client_reference_id"
                href={withParams(cta.diagnostic.buttonUrl, { client_reference_id: "lp_bottom" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.diagnostic.buttonText}
                <ArrowRight className="ml-3 h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
            </Button>

            <p className="text-sm text-earth-muted mt-8">
              <TrackedLink
                event="linkedin_dm"
                href={cta.secondary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-earth-dark transition-colors"
              >
                {cta.secondary.text}
              </TrackedLink>
            </p>

            <p className="text-sm text-earth-muted mt-3">
              <TrackedLink
                event="quiz_bottom"
                carryParam="source"
                href={withParams(cta.quiz.url, { source: "landing_bottom" })}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-earth-dark transition-colors"
              >
                {cta.quiz.text}
              </TrackedLink>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function CaseCard({ c }: { c: (typeof caseStudies)[number] }) {
  return (
    <div className="bg-earth-light rounded-lg p-8 border-l-4 border-earth-accent">
      <blockquote className="text-xl font-normal leading-relaxed mb-4">
        &ldquo;{c.quote}&rdquo;
      </blockquote>
      <cite className="not-italic font-light text-earth-muted block mb-6">— {c.attribution}</cite>
      <dl className="space-y-2 text-base">
        <div className="flex gap-3">
          <dt className="text-earth-muted uppercase tracking-wide text-xs font-medium pt-1 w-20 flex-shrink-0">Came in</dt>
          <dd className="text-earth-dark">{c.problem}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="text-earth-muted uppercase tracking-wide text-xs font-medium pt-1 w-20 flex-shrink-0">Root</dt>
          <dd className="text-earth-dark">{c.root}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="text-earth-muted uppercase tracking-wide text-xs font-medium pt-1 w-20 flex-shrink-0">Outcome</dt>
          <dd className="text-earth-dark">{c.outcome}</dd>
        </div>
      </dl>
      {"caseStudySlug" in c && typeof c.caseStudySlug === "string" && (
        <Link
          href={`/case-studies/${c.caseStudySlug}`}
          className="inline-flex items-center mt-6 text-sm text-earth-accent hover:underline"
        >
          Read the full case study
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      )}
    </div>
  )
}
