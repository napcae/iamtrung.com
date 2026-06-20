import Link from "next/link"
import { ArrowRight, ArrowLeft, Check, AlertCircle, Target, Network, TrendingUp, Lightbulb, ClipboardList, Search, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import {
  founderDiagnosticMeta,
  hero,
  recognition,
  testimonials,
  process,
  about,
  cta,
  videoEmbed,
} from "@/data/founder-diagnostic"

export const metadata = {
  title: founderDiagnosticMeta.title,
  description: founderDiagnosticMeta.description,
}

export default function FounderDiagnosticPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        {/* Section 1: Hook */}
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-8">
              <Link
                href="/"
                className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>

              <h1 className="text-4xl md:text-5xl font-normal leading-relaxed">
                {hero.headline}
              </h1>

              <p className="text-xl text-earth-dark font-normal leading-relaxed max-w-2xl">
                {hero.subheadline}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Recognition */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-earth-accent mt-1" />
                </div>
                <div>
                  <h2 className="text-2xl font-normal mb-6 text-earth-accent">{recognition[0].headline}</h2>
                  <div className="space-y-3 text-lg font-normal leading-relaxed text-earth-dark">
                    {recognition[0].body.split(". ").filter(Boolean).map((sentence, i) => (
                      <p key={i}>{sentence}.</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-earth-accent mt-1" />
                </div>
                <div>
                  <h2 className="text-2xl font-normal mb-6 text-earth-accent">{recognition[1].headline}</h2>
                  <div className="space-y-3 text-lg font-normal leading-relaxed text-earth-dark">
                    {recognition[1].body.split(". ").filter(Boolean).map((sentence, i) => (
                      <p key={i}>{sentence}.</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mechanism */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-12">
              <p className="text-sm text-earth-muted font-normal tracking-wide uppercase">
                What founders say
              </p>

              {testimonials.map((t) => (
                <div key={t.id} className="bg-earth-light rounded-lg p-8 border-l-4 border-earth-accent">
                  <blockquote className="text-xl font-normal leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <cite className="not-italic font-light text-earth-muted">— {t.attribution}</cite>
                </div>
              ))}

              <div className="aspect-video w-full max-w-2xl rounded-lg overflow-hidden border border-earth-light shadow-sm">
                <iframe
                  src={videoEmbed.src}
                  className="w-full h-full"
                  allow={videoEmbed.allow}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: How it runs (process + what you leave with) */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-12 text-earth-accent">{process.sectionHeadline}</h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <ClipboardList className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">Before</h3>
                  <p className="text-lg font-normal leading-relaxed">
                    {process.before}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Search className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">During</h3>
                  <p className="text-lg font-normal leading-relaxed">
                    {process.during}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Compass className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">After</h3>
                  <p className="text-lg font-normal leading-relaxed mb-6">
                    {process.after.intro}
                  </p>
                  <ul className="space-y-4">
                    {process.after.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <span className="font-normal text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: About */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-6 text-lg font-normal leading-relaxed">
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
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">The math</h3>
                  <p className="text-earth-muted">
                    Most founders clear 6–12 weeks of avoided drift. For a 5-person team at $10k/month, that&apos;s{" "}
                    <span className="text-earth-dark font-medium">$15k–$30k in runway recovered</span>.
                  </p>
                </div>
              </div>

              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <Lightbulb className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-medium mb-3">What this is</h3>
                  <p>{about.frame}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="text-3xl font-normal mb-12">
              {cta.headline}
            </p>
            <Button
              asChild
              className="group bg-earth-accent hover:bg-earth-green text-white rounded-none px-12 py-8 h-auto font-normal transition-all duration-300 text-xl"
            >
              <a href={cta.buttonUrl} target="_blank" rel="noopener noreferrer">
                {cta.buttonText}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-earth-light/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-earth-muted">
                &copy; {new Date().getFullYear()} Trung Nguyen. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                About
              </Link>
              <Link href="/#offerings" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Offerings
              </Link>
              <Link href="/#contact" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  )
}
