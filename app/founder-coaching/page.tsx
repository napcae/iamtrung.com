"use client"

import Link from "next/link"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"

export default function FounderCoachingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata
        title="Founder Bottleneck Diagnostic | Trung Nguyen"
        description="I find the real bottleneck slowing your startup's execution. One 90-minute session. Not coaching. Not advice. One answer: what's actually in the way, and why."
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Link
                  href="/"
                  className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors mb-8"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                  I find what&apos;s slowing your startup&apos;s execution.{" "}
                  <span className="text-earth-clay">In 90 minutes.</span>
                </h1>

                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light">
                  Most founders think they have a team problem, a process problem, or a focus problem.
                  Usually it&apos;s none of those. One structured session. One answer: what&apos;s
                  actually in the way — and why.
                </p>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-clay text-earth-clay hover:bg-earth-clay/10 hover:border-earth-clay rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book a Diagnostic Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="pt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-earth-muted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>90 minutes. Time-boxed.</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>&euro;750. One session.</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Not coaching. Not advice.</span>
                  </div>
                </div>
              </div>

              <div className="bg-earth-light p-8 border border-earth-light/50">
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-earth-muted">Your company is moving. Nothing is landing.</h3>

                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-clay mt-2.5 mr-3 flex-shrink-0" />
                      <p className="text-earth-muted font-light">
                        Your team feels busy but releases keep slipping — and you can&apos;t explain why
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-clay mt-2.5 mr-3 flex-shrink-0" />
                      <p className="text-earth-muted font-light">
                        Decisions pile up on you. Engineers wait on your sign-off for things that should be obvious
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-clay mt-2.5 mr-3 flex-shrink-0" />
                      <p className="text-earth-muted font-light">
                        You just raised or just started spending real money — and you can feel the
                        expensive mistakes coming before you make them
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-clay mt-2.5 mr-3 flex-shrink-0" />
                      <p className="text-earth-muted font-light">
                        You&apos;ve tried fixing it with process, with hiring, with more work. The drag is still there.
                      </p>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-earth-clay hover:bg-earth-sand text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                      onClick={() => (window.location.href = "#contact")}
                    >
                      Book a Diagnostic Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Founder Verdict */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-4 text-earth-muted">The Founder Verdict</h2>
                <p className="text-earth-muted font-light max-w-xs">
                  What founders say after the session — in their words, not mine.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4 border-l-2 border-earth-clay pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    &ldquo;It&apos;s like going to the doctor to get a scan you&apos;ve never had before —
                    and you find out about problems you didn&apos;t know you had.&rdquo;
                  </blockquote>
                  <footer className="space-y-1">
                    <cite className="font-light not-italic">William Burden</cite>
                    <p className="text-sm text-earth-muted">Founder, Elqo</p>
                    <p className="text-sm text-earth-muted">
                      Result: 50k landing page views in 6 months &mdash; 25% CTA click-through,
                      80% account creation rate.
                    </p>
                  </footer>
                </div>

                <div className="space-y-4 border-l-2 border-earth-clay pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    &ldquo;Our chat brought the clarity I needed — I actually just made some immediate
                    changes to how I run Screate.&rdquo;
                  </blockquote>
                  <footer className="space-y-1">
                    <cite className="font-light not-italic">Hien Nguyen</cite>
                    <p className="text-sm text-earth-muted">Founder, Screate</p>
                  </footer>
                </div>

                <div className="space-y-4 border-l-2 border-earth-clay pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    &ldquo;You know that way you already know something, but it hits when someone says
                    it to you straight? Sometimes you just need to take your medicine.&rdquo;
                  </blockquote>
                  <footer className="space-y-1">
                    <cite className="font-light not-italic">Johny Harris</cite>
                    <p className="text-sm text-earth-muted">Founder, Dai Viet Rugby</p>
                  </footer>
                </div>

                <div className="space-y-4 border-l-2 border-earth-clay pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    &ldquo;Trung was super helpful whenever I was facing an important decision around
                    my startup. His calm, clear perspective helped me see things more clearly and move
                    forward with more confidence. You have everything to gain.&rdquo;
                  </blockquote>
                  <footer className="space-y-1">
                    <cite className="font-light not-italic">Erik Fiala</cite>
                    <p className="text-sm text-earth-muted">Founder</p>
                  </footer>
                </div>

                <div className="space-y-4 border-l-2 border-earth-clay pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    &ldquo;Someone who can help you get unstuck — with a kind heart but a firm hand.&rdquo;
                  </blockquote>
                  <footer className="space-y-1">
                    <cite className="font-light not-italic">Tuong Tran</cite>
                    <p className="text-sm text-earth-muted">Founder</p>
                  </footer>
                </div>

                <p className="text-sm text-earth-muted italic">
                  Shared with permission. Sessions are confidential by default.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Leave With */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">What you leave with</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-3">
                  <h3 className="text-xl font-light">The actual bottleneck — named</h3>
                  <p className="text-earth-muted font-light">
                    Not the surface complaint you walked in with. The structural cause making everything
                    downstream harder than it needs to be. Named clearly, so you can act on it.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light">1&ndash;3 real priorities</h3>
                  <p className="text-earth-muted font-light">
                    Not a framework. Not a list of things to explore. Three things — at most — that
                    actually move the constraint. Everything else comes off the table.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light">A clearer decision structure</h3>
                  <p className="text-earth-muted font-light">
                    For the next 30&ndash;60 days. So your team stops waiting on you for every call —
                    and you stop being the bottleneck in your own company.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-clay text-earth-clay hover:bg-earth-clay/10 hover:border-earth-clay rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book a Diagnostic Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">What this is not</h2>
              </div>

              <div className="space-y-6">
                <div className="pb-5 border-b border-earth-light/80">
                  <p className="font-light">
                    <span className="text-earth-dark">Not coaching.</span>{" "}
                    <span className="text-earth-muted">
                      No ongoing relationship. No weekly accountability structure. I give you the
                      diagnosis — you run with it.
                    </span>
                  </p>
                </div>
                <div className="pb-5 border-b border-earth-light/80">
                  <p className="font-light">
                    <span className="text-earth-dark">Not advice.</span>{" "}
                    <span className="text-earth-muted">
                      I&apos;m not here to tell you what I&apos;d do. I&apos;m here to tell you
                      what&apos;s actually slowing you — which is different, and usually more useful.
                    </span>
                  </p>
                </div>
                <div className="pb-5 border-b border-earth-light/80">
                  <p className="font-light">
                    <span className="text-earth-dark">Not open-ended.</span>{" "}
                    <span className="text-earth-muted">
                      90 minutes. One specific output. Not a strategy call that ends with
                      &ldquo;here are a few things to think about.&rdquo;
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-light">
                    <span className="text-earth-dark">Not for early idea stage.</span>{" "}
                    <span className="text-earth-muted">
                      If you don&apos;t yet have a team or product in motion, this isn&apos;t the
                      right moment. Come back when you&apos;re running something real.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-muted">The investment</h2>
                <div className="space-y-4 text-earth-muted font-light">
                  <p>One wrong hire: 3&ndash;6 months and &euro;30,000+ gone.</p>
                  <p>One month of misaligned execution: &euro;15,000&ndash;40,000 in salary burned.</p>
                  <p>One week of your engineers waiting on a founder decision: &euro;2,000&ndash;4,000.</p>
                  <p className="text-earth-dark font-normal pt-4">This session: &euro;750.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 border border-earth-light/50 bg-earth-light">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light">90-Minute Founder Bottleneck Diagnostic</h3>

                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-earth-clay">&euro;750</span>
                    </div>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">90-minute structured diagnostic session</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">The primary bottleneck named — not the surface complaint</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">1&ndash;3 real priorities for the next 30&ndash;60 days</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">
                          A clearer decision structure — so you stop being the bottleneck
                        </p>
                      </li>
                    </ul>

                    <div className="pt-6">
                      <Button
                        className="w-full bg-earth-clay hover:bg-earth-sand text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                        onClick={() => (window.location.href = "#contact")}
                      >
                        Book a Diagnostic Session
                      </Button>
                    </div>

                    <p className="text-xs text-earth-muted text-center pt-4">
                      I&apos;ll ask one qualifying question first. If we&apos;re a fit, I&apos;ll send
                      you a booking link.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Common questions</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-light">How is this different from consulting or coaching?</h3>
                  <p className="text-earth-muted font-light">
                    Consultants tell you what to do. Coaches follow up weekly. I do neither. I run a
                    structured diagnostic to find the real constraint — not the symptom you came in
                    with. The output is one answer, not a roadmap.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">What if I already know what the problem is?</h3>
                  <p className="text-earth-muted font-light">
                    Most founders do. Most are right about the symptom and wrong about the cause. If
                    your diagnosis is correct, the session confirms it fast — and we spend the
                    remaining time on what to actually do about it.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Who is this for?</h3>
                  <p className="text-earth-muted font-light">
                    Founders running 3&ndash;10 person teams who feel like their company is moving
                    but nothing is landing. Founders who just raised or just started spending real
                    money and want to avoid expensive mistakes before they make them.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">What happens after the session?</h3>
                  <p className="text-earth-muted font-light">
                    You run with the output. If it&apos;s clear the bottleneck needs faster structural
                    removal than you can manage alone, we can discuss a Sprint engagement — but
                    that&apos;s optional and never assumed.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-clay text-earth-clay hover:bg-earth-clay/10 hover:border-earth-clay rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book a Diagnostic Session
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-muted">Book a session</h2>
                <p className="text-xl font-light mb-6">
                  Send a message and I&apos;ll ask one qualifying question. If we&apos;re a fit,
                  I&apos;ll send a booking link. If not, I&apos;ll tell you honestly — before you
                  spend anything.
                </p>
                <p className="text-earth-muted font-light">
                  Or DM me{" "}
                  <span className="text-earth-dark font-normal">&ldquo;diagnostic&rdquo;</span>{" "}
                  directly on LinkedIn.
                </p>
              </div>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-clay transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="w-full border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-clay transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <textarea
                      name="message"
                      placeholder="What's the problem costing you right now — in time, money, or momentum?"
                      rows={4}
                      required
                      className="w-full border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-clay transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="bg-earth-clay hover:bg-earth-sand text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Book a Diagnostic Session
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
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
              <Link href="/#podcast" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Podcast
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
