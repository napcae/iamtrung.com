import Link from "next/link"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

export const metadata = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description: "A 90-minute execution bottleneck diagnostic for founders with teams. One session. One verdict. No dependency.",
}

export default function FounderDiagnosticPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
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

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                The business is working.<br />
                <span className="text-earth-accent">So why does everything still run through you?</span>
              </h1>

              <p className="text-xl text-earth-muted font-light leading-relaxed max-w-2xl">
                You&apos;ve built something real. Revenue is there. The team is growing. But somehow,
                scaling still feels like it depends on you showing up for everything.
              </p>

              <p className="text-lg text-earth-muted font-light">
                If that sounds familiar, keep reading.
              </p>
            </div>
          </div>
        </section>

        {/* Sound Familiar — ICP A + ICP B */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Sound familiar?</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                You&apos;re the default decision-maker for things that shouldn&apos;t need you anymore.
              </p>
              <p>
                Progress happens &mdash; but only when you&apos;re present, pushing, holding it together.
              </p>
              <p>
                You&apos;ve tried hiring, delegating, systematizing. Some of it helped. But the weight
                didn&apos;t really shift.
              </p>
              <p className="text-earth-muted">
                Or maybe you&apos;re earlier: you just raised, or just started spending real money.
                You haven&apos;t hit the wall yet &mdash; but you can already feel the expensive
                mistakes forming before you make them. The burn rate is becoming visible.
                The first hires are coming. And there&apos;s no room for a wrong call.
              </p>
              <p className="text-2xl text-earth-accent italic">
                &ldquo;Does this actually scale &mdash; with me still inside it?&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* The Real Issue */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Here&apos;s what I&apos;ve noticed</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                Most founders assume they have a hiring problem. Or a focus problem. Or a market
                timing problem.
              </p>
              <p>
                Usually, it&apos;s none of those.
              </p>
              <p>
                What&apos;s actually happening is simpler &mdash; and harder to see from inside:
              </p>
              <p className="text-earth-accent">
                Your founder operating system is under strain. And you&apos;re compensating personally.
              </p>
              <p className="text-earth-muted">
                That&apos;s not a character flaw. It&apos;s architecture. And architecture can be
                seen clearly &mdash; if someone helps you look.
              </p>
            </div>
          </div>
        </section>

        {/* The Founder Verdict — Social Proof */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-4 text-earth-accent">The Founder Verdict</h2>
            <p className="text-earth-muted font-light mb-16">
              What founders say after the session &mdash; in their words, not mine.
            </p>

            <div className="space-y-12">
              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;It&apos;s like going to the doctor to get a scan you&apos;ve never had
                  before &mdash; and you find out about problems you didn&apos;t know you had.&rdquo;
                </blockquote>
                <p className="text-sm text-earth-muted mt-1">— Founder, B2B SaaS</p>
              </div>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;You know that way you already know something, but it hits when someone
                  says it to you straight? Sometimes you just need to take your medicine.&rdquo;
                </blockquote>
                <cite className="not-italic font-light">Johny Harris</cite>
                <p className="text-sm text-earth-muted mt-1">Founder, Dai Viet Rugby</p>
              </div>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;Our chat brought the clarity I needed &mdash; I actually just made some
                  immediate changes to how I run things.&rdquo;
                </blockquote>
                <p className="text-sm text-earth-muted mt-1">— Founder, early-stage startup</p>
              </div>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;Trung was super helpful whenever I was facing an important decision around
                  my startup. His calm, clear perspective helped me see things more clearly and
                  move forward with more confidence. You have everything to gain.&rdquo;
                </blockquote>
                <cite className="not-italic font-light">Erik Fiala</cite>
                <p className="text-sm text-earth-muted mt-1">Founder</p>
              </div>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;Someone who can help you get unstuck &mdash; with a kind heart but
                  a firm hand.&rdquo;
                </blockquote>
                <cite className="not-italic font-light">Tuong Tran</cite>
                <p className="text-sm text-earth-muted mt-1">Director, Hex &mdash; Australian education startup</p>
                <p className="text-sm text-earth-muted mt-1">via LinkedIn</p>
              </div>

              <p className="text-sm text-earth-muted italic">
                Named with permission. Anonymous quotes shared as received.
              </p>
            </div>
          </div>
        </section>

        {/* The Offer */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">How it works</h2>
                <p className="text-xl font-light mb-6">
                  A 90-minute execution bottleneck diagnostic.
                </p>
                <p className="text-lg font-light text-earth-muted mb-8">
                  No coaching. No frameworks for the sake of frameworks. No long-term commitment.
                  Just clarity.
                </p>

                <p className="text-lg font-light mb-6">
                  We look at your company like a system under load and examine three things:
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Decision Load</h3>
                    <p className="text-earth-muted font-light">
                      How decisions get made, delayed, or pulled back to you.
                    </p>
                  </div>

                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Execution Load</h3>
                    <p className="text-earth-muted font-light">
                      Where effort turns into progress &mdash; and where it leaks.
                    </p>
                  </div>

                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Trust Load</h3>
                    <p className="text-earth-muted font-light">
                      What can&apos;t yet survive without you &mdash; and why.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-earth-light p-8 border border-earth-light/50">
                <h3 className="text-xl font-light mb-6">You walk away with:</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">
                      The actual bottleneck named &mdash; not the surface complaint you walked
                      in with
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">One decision you&apos;ve been postponing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">
                      Two things that need to be true in the next 90 days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">
                      A clearer decision structure &mdash; so your team stops waiting on you
                      for every call
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">One thing to stop trying to fix</span>
                  </li>
                </ul>

                <p className="text-earth-muted font-light italic mt-8">
                  Not insight for insight&apos;s sake. A verdict you can act on &mdash; alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Inaction + Price */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">The investment</h2>

            <div className="space-y-4 text-lg font-light text-earth-muted mb-10">
              <p>One wrong hire: 3&ndash;6 months and &euro;30,000+ gone.</p>
              <p>One month of misaligned execution: &euro;15,000&ndash;40,000 in salary burned.</p>
              <p>One week of your best engineers waiting on a founder decision: &euro;2,000&ndash;4,000.</p>
            </div>

            <p className="text-2xl font-light">
              This session: <span className="text-earth-accent">&euro;750.</span>
            </p>
            <p className="text-earth-muted font-light mt-3">
              90 minutes. No follow-up required. A verdict you can act on alone.
            </p>
          </div>
        </section>

        {/* Disqualifier */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-light mb-8 text-earth-muted">This isn&apos;t for everyone</h2>
            <div className="space-y-3 text-base font-light text-earth-muted">
              <p>
                If you&apos;re still in early idea stage with no team and no product in motion,
                this isn&apos;t the right moment. Come back when you&apos;re running something real.
              </p>
              <p>
                If you want ongoing coaching, accountability, or reassurance &mdash; this isn&apos;t
                that. It&apos;s one session. One verdict.
              </p>
              <p>
                If the problem feels theoretical (&ldquo;it would be useful to think about
                this&rdquo;) &mdash; wait until it&apos;s costing you something. The session works
                best when there&apos;s real pressure behind it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Me */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Why I do this</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                I spent years as a systems architect &mdash; building and scaling technical
                infrastructure inside growing companies.
              </p>
              <p>
                Over time, I started noticing something: most companies don&apos;t break because
                of product or market.
              </p>
              <p className="text-earth-accent">
                They break because the founder quietly becomes the constraint &mdash; and no
                one names it.
              </p>
              <p>
                I don&apos;t fix companies. I help founders see the system they&apos;re already
                running &mdash; clearly enough to decide what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8">
              If this resonates
            </h2>

            <p className="text-xl text-earth-muted font-light mb-6">
              90 minutes. &euro;750. No follow-up required.
            </p>

            <p className="text-earth-muted font-light mb-8 max-w-xl mx-auto">
              If you want clarity more than reassurance &mdash; and you&apos;re ready to hear
              something you might not like &mdash; this might be useful.
            </p>

            <Button
              asChild
              className="group bg-earth-accent hover:bg-earth-green text-white rounded-none px-10 py-6 h-auto font-light transition-all duration-300 text-lg"
            >
              <a href="https://cal.com/trungfromberlin/founder-bottleneck-diagnostic" target="_blank" rel="noopener noreferrer">
                Book a session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-sm text-earth-muted mt-8">
              No pressure. If it&apos;s not the right moment, that&apos;s fine too.
            </p>
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
