import Link from "next/link"
import { ArrowRight, ArrowLeft, Check, AlertCircle, Target, Network, TrendingUp, Lightbulb, ClipboardList, Search, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

export const metadata = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description: "A 90-minute diagnostic to find your startup's real bottleneck. For founders with teams or founders who just raised. One session. One answer.",
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
                Something in your startup is slowing everything down. You feel it. You haven&apos;t named it yet.
              </h1>

              <p className="text-xl text-earth-muted font-light leading-relaxed max-w-2xl">
                I run 90-minute Founder Bottleneck Diagnostics &mdash; one structured session to find the real constraint. Not advice. Not strategy. One answer: what&apos;s actually in the way, and why.
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
                  <h2 className="text-2xl font-normal mb-6 text-earth-accent">Your team is moving but nothing is landing.</h2>
                  <div className="space-y-3 text-lg font-light leading-relaxed text-earth-muted">
                    <p>Sprints end. Decisions pile up. Your best people are waiting on you.</p>
                    <p>You&apos;re the bottleneck in your own machine — and you can&apos;t see it from the inside.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-earth-accent mt-1" />
                </div>
                <div>
                  <h2 className="text-2xl font-normal mb-6 text-earth-accent">You&apos;ve built something. You&apos;re not sure who it&apos;s really for.</h2>
                  <div className="space-y-3 text-lg font-light leading-relaxed text-earth-muted">
                    <p>Every conversation pulls you in a different direction.</p>
                    <p>Without a clear answer to &ldquo;who is this for,&rdquo; nothing compounds.</p>
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
              <p className="text-sm text-earth-muted font-light tracking-wide uppercase">
                What founders say
              </p>

              <div className="bg-earth-light rounded-lg p-8 border-l-4 border-earth-accent">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;It&apos;s like going to the doctor for a scan you&apos;ve never had before and you find out problems you didn&apos;t know you had.&rdquo;
                </blockquote>
                <cite className="not-italic font-light text-earth-muted">— Founder, B2B SaaS</cite>
              </div>

              <div className="bg-earth-light rounded-lg p-8 border-l-4 border-earth-accent">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;I immediately sat down and decoded the whole thing and I know exactly what I need to do next.&rdquo;
                </blockquote>
                <cite className="not-italic font-light text-earth-muted">— Hien Nguyen, Sidekiq</cite>
              </div>

              <div className="aspect-video w-full max-w-2xl rounded-lg overflow-hidden border border-earth-light shadow-sm">
                <iframe
                  src="https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview"
                  className="w-full h-full"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: How it runs (process + what you leave with) */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">How the 90 minutes runs</h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <ClipboardList className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">Before</h3>
                  <p className="text-lg font-light leading-relaxed">
                    A short intake. You send me where things actually stand: team, traction, what feels stuck. No deck, no prep theatre &mdash; fifteen minutes of honesty.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Search className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">During</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Ninety minutes, live, just us. I ask, you answer, and we follow the thread to the real constraint &mdash; not the one you walked in assuming it was.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Compass className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">After</h3>
                  <p className="text-lg font-light leading-relaxed mb-6">
                    You walk out with a clear answer &mdash; one you can act on the same week:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <span className="font-light text-lg">
                        The actual bottleneck named — not the surface complaint, the structural cause
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <span className="font-light text-lg">
                        1–3 real priorities replacing current noise
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <span className="font-light text-lg">
                        A clearer decision structure for the next 30–60 days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <span className="font-light text-lg">
                        Less expensive drift
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: About */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-6 text-lg font-light leading-relaxed">
              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <Network className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">The pattern</h3>
                  <p>
                    25+ early-stage founders. B2B SaaS, hardware, marketplace, agency. The surface complaints differ. The structural causes repeat.
                  </p>
                </div>
              </div>

              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <TrendingUp className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">The math</h3>
                  <p className="text-earth-muted">
                    Most founders clear 6–12 weeks of avoided drift. For a 5-person team at $10k/month, that&apos;s <span className="text-earth-dark font-medium">$15k–$30k in runway recovered</span>.
                  </p>
                </div>
              </div>

              <div className="bg-earth-light rounded-lg p-8 flex gap-6">
                <Lightbulb className="h-6 w-6 text-earth-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm text-earth-accent uppercase tracking-wide font-light mb-3">What this is</h3>
                  <p>
                    Not coaching. Not ongoing advisory. One diagnostic &mdash; and what comes next is a separate conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="text-3xl font-normal mb-12">
              One session. 90 minutes. One answer.
            </p>
            <Button
              asChild
              className="group bg-earth-accent hover:bg-earth-green text-white rounded-none px-12 py-8 h-auto font-normal transition-all duration-300 text-xl"
            >
              <a href="https://www.linkedin.com/in/ctn1991/" target="_blank" rel="noopener noreferrer">
                Start on LinkedIn
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
