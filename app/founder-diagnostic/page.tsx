import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

export const metadata = {
  title: "The Founder Verdict | Trung Nguyen",
  description: "A 90-minute diagnostic for bootstrapped founders. One session. One verdict. No dependency.",
}

export default function FounderDiagnosticPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
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
                You've built something real. Revenue is there. The team is growing. But somehow, scaling still feels like it depends on you showing up for everything.
              </p>

              <p className="text-lg text-earth-muted font-light">
                If that sounds familiar, keep reading.
              </p>
            </div>
          </div>
        </section>

        {/* The Pattern */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Sound familiar?</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                You're the default decision-maker for things that shouldn't need you anymore.
              </p>
              <p>
                Progress happens — but only when you're present, pushing, holding it together.
              </p>
              <p>
                You've tried hiring, delegating, systematizing. Some of it helped. But the weight didn't really shift.
              </p>
              <p>
                And there's this quiet question you don't say out loud:
              </p>
              <p className="text-2xl text-earth-accent italic">
                "Does this actually scale — with me still inside it?"
              </p>
            </div>
          </div>
        </section>

        {/* The Real Issue */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Here's what I've noticed</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                Most founders assume they have a hiring problem. Or a focus problem. Or a market timing problem.
              </p>
              <p>
                Usually, it's none of those.
              </p>
              <p>
                What's actually happening is simpler — and harder to see from inside:
              </p>
              <p className="text-earth-accent">
                Your founder operating system is under strain. And you're compensating personally.
              </p>
              <p className="text-earth-muted">
                That's not a character flaw. It's architecture. And architecture can be seen clearly — if someone helps you look.
              </p>
            </div>
          </div>
        </section>

        {/* The Offer */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">The Founder Verdict</h2>
                <p className="text-xl font-light mb-6">
                  A 90-minute diagnostic session.
                </p>
                <p className="text-lg font-light text-earth-muted mb-8">
                  No coaching. No frameworks for the sake of frameworks. No long-term commitment. Just clarity.
                </p>

                <p className="text-lg font-light mb-6">
                  We look at your company like a system under load and examine three things:
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Decision Load</h3>
                    <p className="text-earth-muted font-light">How decisions get made, delayed, or pulled back to you.</p>
                  </div>

                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Execution Load</h3>
                    <p className="text-earth-muted font-light">Where effort turns into progress — and where it leaks.</p>
                  </div>

                  <div className="border-l-2 border-earth-accent pl-6">
                    <h3 className="text-lg font-light mb-1">Trust Load</h3>
                    <p className="text-earth-muted font-light">What can't yet survive without you — and why.</p>
                  </div>
                </div>
              </div>

              <div className="bg-earth-background p-8 border border-earth-light/50">
                <h3 className="text-xl font-light mb-6">You walk away with:</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">The one bottleneck creating most of the friction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">One decision you've been postponing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">Two things that need to be true in the next 90 days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                    <span className="font-light">One thing to stop trying to fix</span>
                  </li>
                </ul>

                <p className="text-earth-muted font-light italic mt-8">
                  Not insight for insight's sake. A verdict you can act on — alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-earth-accent text-white">
          <div className="w-full max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic">
              "This made things uncomfortably clear — in a good way."
            </blockquote>
            <p className="mt-4 text-white/70 font-light">— Bootstrapped founder, after the session</p>
          </div>
        </section>

        {/* Why Me */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">Why I do this</h2>

            <div className="space-y-6 text-xl font-light leading-relaxed">
              <p>
                I spent years as a systems architect — building and scaling technical infrastructure inside growing companies.
              </p>
              <p>
                Over time, I started noticing something: most companies don't break because of product or market.
              </p>
              <p className="text-earth-accent">
                They break because the founder quietly becomes the constraint — and no one names it.
              </p>
              <p>
                I don't fix companies. I help founders see the system they're already running — clearly enough to decide what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8">
              If this resonates
            </h2>

            <p className="text-xl text-earth-muted font-light mb-6">
              The session is 90 minutes. €1,000. No follow-up required.
            </p>

            <p className="text-earth-muted font-light mb-8 max-w-xl mx-auto">
              If you want clarity more than reassurance — and you're ready to hear something you might not like — this might be useful.
            </p>

            <Button
              asChild
              className="group bg-earth-accent hover:bg-earth-green text-white rounded-none px-10 py-6 h-auto font-light transition-all duration-300 text-lg"
            >
              <a href="https://cal.com/trungfromberlin/intro-call" target="_blank" rel="noopener noreferrer">
                Book a session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-sm text-earth-muted mt-8">
              No pressure. If it's not the right moment, that's fine too.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-earth-light/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-earth-muted">
                © {new Date().getFullYear()} Trung Nguyen. All rights reserved.
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
