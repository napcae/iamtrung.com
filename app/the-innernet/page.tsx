import Link from "next/link"
import { ArrowRight, Check, ArrowLeft, Users, Globe, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"

export default function TheInnernetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata
        title="The Innernet | Sustainable High Performance"
        description="A calm, high-clarity community for leaders, operators, and emerging talent who want to grow from the inside out. Inner work for outer impact."
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
                  The <span className="text-earth-accent">Innernet</span>
                </h1>

                <p className="text-xl md:text-2xl font-light text-earth-muted">
                  Sustainable High Performance
                </p>

                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light leading-relaxed">
                  A calm, high-clarity community for leaders, operators, and emerging talent who want to grow from the inside out.
                </p>

                <p className="text-lg text-earth-muted max-w-xl font-light leading-relaxed">
                  We help you build sustainable high performance through guided reflection, emotional clarity, and shared wisdom — <span className="text-earth-accent">inner work for outer impact.</span>
                </p>

                <div className="pt-4">
                  <Button
                    asChild
                    className="group bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <a href="https://lu.ma/calendar/cal-Ba6Y0gdYqYZqdIP" target="_blank" rel="noopener noreferrer">
                      Join Weekly Reflection Session
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-earth-muted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Weekly Ritual</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Global Community</span>
                  </div>
                </div>
              </div>

              <div className="bg-earth-light p-8 border border-earth-light/50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Is This You?</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're ambitious but tired of burning out to achieve your goals
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You want high performance without losing yourself in the process
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're looking for clarity, not more tactics or hacks
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You value depth over noise, and connection over content
                      </p>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                    >
                      <a href="https://lu.ma/calendar/cal-Ba6Y0gdYqYZqdIP" target="_blank" rel="noopener noreferrer">
                        Join the Next Session
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why I Built It */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-muted">Why I Built This</h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed">
                  I built InnerNet because everywhere I looked — founders, operators, emerging talent — people were smart but stuck: high output, low clarity, and slowly burning themselves down.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  I wanted a space where people could learn the emotional and strategic operating systems behind performance, so they could scale their lives and companies without losing themselves.
                </p>
                <p className="text-xl font-light leading-relaxed text-earth-accent italic">
                  The world doesn't need more hustle — it needs wiser operators who build from center, not chaos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">What Makes It Different</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                  <h3 className="text-xl font-light text-earth-accent">Spaciousness > Pressure</h3>
                  <p className="text-earth-muted font-light">
                    A space that feels like exhaling. High standards without hardness.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                  <h3 className="text-xl font-light text-earth-accent">Clarity > Hacks</h3>
                  <p className="text-earth-muted font-light">
                    We focus on the inner loops that power everything — identity, patterns, emotional regulation.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                  <h3 className="text-xl font-light text-earth-accent">Connection > Content</h3>
                  <p className="text-earth-muted font-light">
                    Depth without heaviness. Growth without noise. Shared wisdom over solo learning.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-light">
                  <h3 className="text-xl font-light text-earth-accent">Character > Skills</h3>
                  <p className="text-earth-muted font-light">
                    Philosophy-backed, community-fueled personal evolution for lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Weekly Ritual */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-muted">Weekly Reflection Session</h2>
                <p className="text-lg text-earth-muted font-light">The core ritual</p>
              </div>

              <div className="space-y-8">
                <p className="text-xl font-light leading-relaxed">
                  Every week, we slow down for 30 minutes to reset our minds and learn from each other.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span className="text-lg font-light">Clear mental noise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span className="text-lg font-light">Build emotional precision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span className="text-lg font-light">Reset the inner loop so the outer loop runs better</span>
                  </li>
                </ul>

                <p className="text-lg text-earth-muted font-light italic">
                  One deep prompt. No fluff. Your weekly mindset OS upgrade.
                </p>

                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <a href="https://lu.ma/calendar/cal-Ba6Y0gdYqYZqdIP" target="_blank" rel="noopener noreferrer">
                      Join the Next Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Member Stories</h2>
              </div>

              <div className="space-y-12">
                <article itemScope itemType="https://schema.org/Review">
                  <div className="space-y-6">
                    <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                      "I'm really happy to have met you, and I think it's fantastic that you want to bring more structure to the startup scene here. I find sharing in the founder circle incredibly valuable, though it does require a certain level of trust."
                    </blockquote>
                    <footer>
                      <cite itemProp="author" className="font-light">
                        Lien
                      </cite>
                      <p className="text-sm text-earth-muted">Founder & Innernet Member</p>
                    </footer>
                  </div>
                </article>

                <article itemScope itemType="https://schema.org/Review">
                  <div className="space-y-6">
                    <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                      "I really appreciate the format because it creates meaningful connections with people who are facing similar challenges. You can feel everyone's motivation to work on their goals, and the trust we've built makes these sessions truly valuable."
                    </blockquote>
                    <footer>
                      <cite itemProp="author" className="font-light">
                        Alex
                      </cite>
                      <p className="text-sm text-earth-muted">Founder & Innernet Member</p>
                    </footer>
                  </div>
                </article>

                <article itemScope itemType="https://schema.org/Review">
                  <div className="space-y-6">
                    <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                      "We're not in this journey alone. Everyone faces their own challenges, and knowing that others are working towards their goals makes the burden feel lighter. I appreciate how supportive we are, sharing our perspectives and decision-making processes."
                    </blockquote>
                    <footer>
                      <cite itemProp="author" className="font-light">
                        Martin Hoang
                      </cite>
                      <p className="text-sm text-earth-muted">Founder & Innernet Member</p>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-muted">Stay Connected</h2>
                <p className="text-lg text-earth-muted font-light">No spam. No pressure. Just honest conversations.</p>
              </div>

              <div className="space-y-8">
                <p className="text-xl font-light leading-relaxed">
                  If this resonates and you want to go deeper:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start text-lg font-light">
                    <span className="text-earth-green mr-3">🟢</span>
                    <span><a href="https://chat.whatsapp.com/F7bJ8CNxWqYIhZgNSjyOIv" target="_blank" rel="noopener noreferrer" className="text-earth-accent hover:underline">WhatsApp community</a> — low-noise, high-signal updates</span>
                  </li>
                  <li className="flex items-start text-lg font-light">
                    <span className="mr-3">✉️</span>
                    <span><a href="https://theuncomfortzone.substack.com" target="_blank" rel="noopener noreferrer" className="text-earth-accent hover:underline">The Uncomfort Zone</a> — reflections on work, identity, and alignment</span>
                  </li>
                </ul>

                <p className="text-xl font-light text-earth-accent">
                  👉 Join if it feels right
                </p>

                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <a href="https://lu.ma/calendar/cal-Ba6Y0gdYqYZqdIP" target="_blank" rel="noopener noreferrer">
                      Join the Weekly Reflection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
