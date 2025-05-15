"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"

export default function FounderCoachingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata
        title="Founder Coaching | Trung Nguyen"
        description="Clear emotional roadblocks that keep you from doing the hard things you're meant for. Develop resilience without burning out."
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
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
                  Clear the <span className="text-earth-accent">Roadblocks</span> to Your Greatest Work
                </h1>

                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light">
                  Founder coaching that helps high-achievers overcome emotional barriers—so you can do the hard things
                  you're meant for, without burning out or losing yourself in the process.
                </p>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="pt-8 flex items-center space-x-4 text-sm text-earth-muted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Limited Spots</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Application Required</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>

              <div className="bg-earth-light p-8 border border-earth-light/50">
                {/* Photo placeholder for warmth */}
                <div className="aspect-[4/3] relative bg-earth-light/50 rounded-lg overflow-hidden border border-earth-light/30 mb-8">
                  <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                    <p className="text-sm">Add a photo of you coaching a client</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Is This You?</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're a high-achieving founder who's built something impressive, but you're hitting emotional
                        walls that technical skills can't solve
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're struggling with imposter syndrome, decision paralysis, or perfectionism that's keeping
                        you from your next level
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You want to scale your impact without sacrificing your wellbeing or compromising your values
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're seeking a trusted guide who's walked the founder path and can help you navigate its
                        emotional complexities
                      </p>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                      onClick={() => (window.location.href = "#contact")}
                    >
                      Apply Now (Free Discovery Call)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">The Process</h2>
              </div>

              <div className="space-y-16">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-earth-green mr-6 flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-light">Discovery Call</h3>
                      <p className="text-earth-muted font-light">
                        A 30-minute conversation to understand your unique challenges, goals, and whether we're the
                        right fit for each other. No pressure, no obligations—just honest exploration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-earth-green mr-6 flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-light">Deep Dive Session</h3>
                      <p className="text-earth-muted font-light">
                        A 90-minute intensive where we map your emotional landscape, identify core patterns, and create
                        a personalized roadmap for transformation. You'll leave with immediate action steps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-earth-green mr-6 flex-shrink-0">
                      3
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-light">Ongoing Support</h3>
                      <p className="text-earth-muted font-light">
                        Bi-weekly 60-minute sessions focused on implementation, accountability, and navigating
                        challenges as they arise. Plus, unlimited Telegram access for time-sensitive situations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book Your Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Transformations</h2>
                {/* Photo placeholder for warmth */}
                <div className="aspect-[4/3] relative bg-earth-light/50 rounded-lg overflow-hidden border border-earth-light/30 mb-8">
                  <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                    <p className="text-sm">Add a photo of a client transformation moment</p>
                  </div>
                </div>
              </div>

              <div className="space-y-16">
                <div className="space-y-6 border-l-2 border-earth-green pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    "Working with Trung helped me break through the emotional barriers that were holding my company
                    back. I went from constant overwhelm to focused leadership, and our team culture has completely
                    transformed."
                  </blockquote>
                  <footer>
                    <cite className="font-light">Sarah Chen</cite>
                    <p className="text-sm text-earth-muted">CEO, Growth-stage SaaS</p>
                  </footer>
                </div>

                <div className="space-y-6 border-l-2 border-earth-green pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    "Trung's approach combines technical understanding with emotional intelligence in a way I've never
                    experienced before. He helped me see how my perfectionism was actually sabotaging our product
                    launches."
                  </blockquote>
                  <footer>
                    <cite className="font-light">Michael Rodriguez</cite>
                    <p className="text-sm text-earth-muted">Founder & CTO, AI Platform</p>
                  </footer>
                </div>

                <div className="pt-8">
                  <p className="text-earth-muted italic">
                    "My coaching is 100% confidential. These testimonials are shared with explicit permission."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Investment</h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 border border-earth-light/50 bg-earth-background">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light">3-Month Intensive</h3>

                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-earth-accent">$9,000</span>
                      <span className="text-earth-muted ml-2">USD</span>
                    </div>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">90-minute deep dive session</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">6 bi-weekly 60-minute coaching sessions</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">Unlimited Telegram access</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">Personalized resources and exercises</p>
                      </li>
                    </ul>

                    <div className="pt-6">
                      <Button
                        className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                        onClick={() => (window.location.href = "#contact")}
                      >
                        Apply Now (Free Discovery Call)
                      </Button>
                    </div>

                    <p className="text-xs text-earth-muted text-center pt-4">
                      Payment plans available. Only 3 spots open each month.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-light">Money-Back Guarantee</h3>
                  <p className="text-earth-muted font-light">
                    If after our first two sessions you don't feel this is the right fit, I'll refund your investment in
                    full. No questions asked. I only want to work with founders I can truly help.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book Your Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">FAQ</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-light">How is this different from other coaching?</h3>
                  <p className="text-earth-muted font-light">
                    Most coaching focuses on strategies and tactics. I focus on the emotional barriers preventing you
                    from implementing what you already know. As a founder myself, I understand the unique pressures you
                    face and bring both technical expertise and emotional intelligence to our work.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">How do I know if I'm ready for this?</h3>
                  <p className="text-earth-muted font-light">
                    You're ready if you've hit a ceiling in your growth that more knowledge or harder work can't break
                    through. If you're sensing that the next level requires internal transformation, not just external
                    strategies, this work is for you.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">What results can I expect?</h3>
                  <p className="text-earth-muted font-light">
                    Clients typically experience clearer decision-making, reduced anxiety, improved leadership presence,
                    better boundaries, and the ability to take bold action without the paralysis of perfectionism or
                    imposter syndrome.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Is this therapy?</h3>
                  <p className="text-earth-muted font-light">
                    No. While our work addresses emotional patterns, it's focused specifically on your growth as a
                    founder and leader. I'm not a therapist, and this isn't a substitute for mental health treatment if
                    that's what you need.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Book Your Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Get Started</h2>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-earth-light/30 mb-8">
                  <Image
                    src="/connect.jpeg"
                    alt="Let's connect and start a conversation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-xl font-light">
                  Ready to break through your emotional roadblocks and do your greatest work? Let's start with a free
                  discovery call to explore how we might work together.
                </p>
              </div>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                  <div className="space-y-2 group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-transparent border border-earth-light/50 px-4 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-accent transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="w-full bg-transparent border border-earth-light/50 px-4 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-accent transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <textarea
                      name="message"
                      placeholder="Tell me about your challenges"
                      rows={4}
                      required
                      className="w-full bg-transparent border border-earth-light/50 px-4 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-accent transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Book Your Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
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
