import Link from "next/link"
import { ArrowRight, Check, ArrowLeft, Clock, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"

export default function ProcrastinationWorkshopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata
        title="Overcoming Procrastination Workshop | Trung Nguyen"
        description="A transformative 3-hour workshop that helps high-achievers break through procrastination patterns and take decisive action."
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
                  Stop Planning, <span className="text-earth-accent">Start Doing</span>
                </h1>

                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light">
                  A transformative 3-hour workshop that helps high-achievers break through procrastination patterns and
                  take decisive action on their most important work.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center text-earth-muted">
                    <Clock className="h-5 w-5 text-earth-green mr-2" />
                    <span>3 Hours</span>
                  </div>
                  <div className="flex items-center text-earth-muted">
                    <Calendar className="h-5 w-5 text-earth-green mr-2" />
                    <span>May 15, 2023</span>
                  </div>
                  <div className="flex items-center text-earth-muted">
                    <Users className="h-5 w-5 text-earth-green mr-2" />
                    <span>Limited to 20 Participants</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-earth-light p-8 border border-earth-light/50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Is This You?</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You have big ideas but struggle to take consistent action on them
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">You find yourself caught in endless planning and perfectionism</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're tired of watching opportunities pass by while you hesitate
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You want a practical system for consistent execution, not just motivation
                      </p>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300">
                      Reserve Your Spot ($497)
                    </Button>
                  </div>

                  <p className="text-xs text-earth-muted text-center pt-4">
                    Only 20 spots available. 7 spots remaining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">What You'll Learn</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-light">The Psychology of Procrastination</h3>
                  <p className="text-earth-muted font-light">
                    Understand the hidden emotional drivers behind your procrastination patterns. Discover why willpower
                    and motivation aren't enough, and what actually works instead.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Your Unique Procrastination Profile</h3>
                  <p className="text-earth-muted font-light">
                    Identify your specific procrastination triggers and patterns. Are you a perfectionist, avoider,
                    busy-bee, or novelty-seeker? Each type requires a different approach.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">The Action Protocol</h3>
                  <p className="text-earth-muted font-light">
                    Learn a step-by-step system for breaking through resistance and taking immediate action on your most
                    important projects. This practical framework works even when motivation is low.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Implementation Planning</h3>
                  <p className="text-earth-muted font-light">
                    Create your personalized implementation plan to maintain momentum after the workshop. You'll leave
                    with clear next steps and accountability structures to ensure lasting change.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Details */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Workshop Details</h2>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                    <h3 className="text-xl font-light">Date & Time</h3>
                    <p className="text-earth-muted font-light">
                      May 15, 2023
                      <br />
                      10:00 AM - 1:00 PM Pacific Time
                    </p>
                  </div>

                  <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                    <h3 className="text-xl font-light">Location</h3>
                    <p className="text-earth-muted font-light">
                      Live Virtual Workshop
                      <br />
                      Zoom link provided upon registration
                    </p>
                  </div>

                  <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                    <h3 className="text-xl font-light">Group Size</h3>
                    <p className="text-earth-muted font-light">
                      Limited to 20 participants
                      <br />
                      For personalized attention
                    </p>
                  </div>

                  <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                    <h3 className="text-xl font-light">Recording</h3>
                    <p className="text-earth-muted font-light">
                      Full workshop recording available
                      <br />
                      Lifetime access included
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">3-hour interactive workshop with practical exercises</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">Procrastination Profile Assessment ($97 value)</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">The Action Protocol Workbook ($47 value)</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">2-week email follow-up sequence with implementation prompts</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">Private community access for 30 days post-workshop</p>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Success Stories</h2>
              </div>

              <div className="space-y-16">
                <div className="space-y-6 border-l-2 border-earth-green pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    "I've read countless books on productivity, but this workshop finally helped me understand why I
                    procrastinate and gave me practical tools to break the cycle. I launched my podcast within a week of
                    attending."
                  </blockquote>
                  <footer>
                    <cite className="font-light">James Wilson</cite>
                    <p className="text-sm text-earth-muted">Creative Director & Podcast Host</p>
                  </footer>
                </div>

                <div className="space-y-6 border-l-2 border-earth-green pl-6">
                  <blockquote className="text-xl font-light leading-relaxed">
                    "The Action Protocol alone was worth 10x the price of admission. I've applied it to my writing
                    practice and have finally finished the manuscript I've been 'working on' for three years."
                  </blockquote>
                  <footer>
                    <cite className="font-light">Sophia Martinez</cite>
                    <p className="text-sm text-earth-muted">Author & Entrepreneur</p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Investment</h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 border border-earth-light/50 bg-earth-light">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-light">Workshop Registration</h3>
                      <div className="bg-earth-green/10 text-earth-green px-3 py-1 text-sm">7 Spots Left</div>
                    </div>

                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-earth-accent">$497</span>
                      <span className="text-earth-muted ml-2">USD</span>
                    </div>

                    <div className="pt-6">
                      <Button className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300">
                        Reserve Your Spot Now
                      </Button>
                    </div>

                    <p className="text-xs text-earth-muted text-center pt-4">
                      Secure payment. Satisfaction guaranteed.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-light">100% Satisfaction Guarantee</h3>
                  <p className="text-earth-muted font-light">
                    If you don't find the workshop valuable, simply let us know by the end of the session and we'll
                    refund your investment in full. No questions asked.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
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
                <h2 className="text-2xl font-light mb-16 text-earth-muted">FAQ</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-light">Will this be recorded?</h3>
                  <p className="text-earth-muted font-light">
                    Yes, the full workshop will be recorded and you'll have lifetime access to the replay. However, I
                    encourage live attendance for the interactive exercises and personalized feedback.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">How is this different from other productivity workshops?</h3>
                  <p className="text-earth-muted font-light">
                    Most productivity workshops focus on techniques and tools. This workshop addresses the emotional and
                    psychological roots of procrastination, giving you a complete system that works with your unique
                    patterns, not against them.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Is this right for me if I'm not a founder?</h3>
                  <p className="text-earth-muted font-light">
                    Absolutely. This workshop is designed for any high-achiever who struggles with procrastination,
                    regardless of your professional background. Past participants have included writers, artists,
                    executives, and entrepreneurs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">What if I can't attend live?</h3>
                  <p className="text-earth-muted font-light">
                    While live attendance is recommended, you'll still get tremendous value from the recording and
                    materials. You can also submit questions in advance, which I'll address during the workshop.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
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
