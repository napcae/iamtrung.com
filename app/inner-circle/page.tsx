import Link from "next/link"
import { ArrowRight, Check, ArrowLeft, Users, Globe, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"

export default function InnerCirclePage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata
        title="The Inner Circle | Trung Nguyen"
        description="A global community of values-driven founders committed to unlimited curiosity, fearless authenticity, radical resilience, and kindness in community."
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
                  The <span className="text-earth-accent">Inner Circle</span>
                </h1>

                <p className="text-2xl font-light italic text-earth-muted">
                  "Build slow, build strong, build for impact."
                </p>

                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light">
                  A global community of values-driven founders committed to creating businesses that serve humanity
                  while honoring our shared connection to each other and the planet.
                </p>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Apply to Join
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="pt-8 flex items-center space-x-4 text-sm text-earth-muted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Application-Only</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Limited to 100 Members</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-earth-green mr-2" />
                    <span>Values-Aligned</span>
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
                        You're a founder who believes business can be a force for positive change in the world
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're seeking deeper connections beyond transactional networking
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You want to scale your impact without sacrificing your values or wellbeing
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-earth-muted">
                        You're committed to giving back to society and nature as you grow
                      </p>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300">
                      Apply Now (Takes 5 Minutes)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Our Values</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-background">
                  <div className="text-earth-green mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-light">Unlimited Curiosity & Growth</h3>
                  <p className="text-earth-muted font-light">
                    Embrace a beginner's mind, constantly learning, evolving, and improving through every experience.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-background">
                  <div className="text-earth-green mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-light">Fearless Authenticity</h3>
                  <p className="text-earth-muted font-light">
                    Be true to yourself and others. Lead with transparency, vulnerability, and integrity.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-background">
                  <div className="text-earth-green mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-light">Radical Resilience</h3>
                  <p className="text-earth-muted font-light">
                    Face challenges with determination and bounce back stronger, using setbacks as fuel for growth.
                  </p>
                </div>

                <div className="space-y-4 p-6 border border-earth-light/50 bg-earth-background">
                  <div className="text-earth-green mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-light">Kindness in Community</h3>
                  <p className="text-earth-muted font-light">
                    Collaborate and foster meaningful relationships. Together, we're stronger and more capable of creating lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">What You Get</h2>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-light">Quarterly In-Person Retreats</h3>
                  <p className="text-earth-muted font-light">
                    Immersive 3-day experiences in beautiful locations where we disconnect from technology to connect
                    deeply with each other. Focused on presence, vulnerability, and authentic relationship-building.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Monthly Virtual Gatherings</h3>
                  <p className="text-earth-muted font-light">
                    Facilitated sessions focused on specific challenges and opportunities. These aren't webinars—they're
                    intimate conversations where everyone contributes their wisdom and experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Peer Accountability Groups</h3>
                  <p className="text-earth-muted font-light">
                    Join a small group of 4-5 founders who meet weekly to support each other's growth, celebrate wins,
                    and work through challenges together. These groups become your trusted inner circle.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-light">Access to Funding</h3>
                  <p className="text-earth-muted font-light">
                    Members get priority access to investment opportunities through our network of values-aligned
                    investors. We help connect purpose-driven founders with capital that respects their vision.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Apply to Join
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
                      <p className="text-sm text-earth-muted">Founder & Inner Circle Member</p>
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
                      <p className="text-sm text-earth-muted">Founder & Inner Circle Member</p>
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
                      <p className="text-sm text-earth-muted">Founder & Inner Circle Member</p>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Membership */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Membership</h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 border border-earth-light/50 bg-earth-light">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light">Annual Membership</h3>

                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-earth-accent">$12,000</span>
                      <span className="text-earth-muted ml-2">USD / year</span>
                    </div>

                    <ul className="space-y-4 pt-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">4 quarterly in-person retreats (travel not included)</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">12 monthly virtual gatherings</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">Weekly peer accountability group</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">Priority access to investment opportunities</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                        <p className="text-earth-muted">Private community platform access</p>
                      </li>
                    </ul>

                    <div className="pt-6">
                      <Button className="w-full bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300">
                        Apply Now (Takes 5 Minutes)
                      </Button>
                    </div>

                    <p className="text-xs text-earth-muted text-center pt-4">
                      Limited to 100 members. Application required.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-light">Our Commitment</h3>
                  <p className="text-earth-muted font-light">
                    10% of all membership fees go directly to our Impact Fund, which invests in underrepresented
                    founders building solutions for pressing social and environmental challenges.
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Apply to Join
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Application Process</h2>
              </div>

              <div className="space-y-16">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-earth-green/10 flex items-center justify-center text-earth-green mr-6 flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-light">Submit Application</h3>
                      <p className="text-earth-muted font-light">
                        Complete a brief application sharing your story, values, and why you want to join The Inner
                        Circle. This takes about 5 minutes.
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
                      <h3 className="text-xl font-light">Values Alignment Call</h3>
                      <p className="text-earth-muted font-light">
                        If your application resonates, we'll schedule a 30-minute call to explore alignment and answer
                        any questions. This is a two-way conversation to ensure mutual fit.
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
                      <h3 className="text-xl font-light">Welcome & Onboarding</h3>
                      <p className="text-earth-muted font-light">
                        Once accepted, you'll receive a welcome package and be paired with a current member who will
                        help you integrate into the community and make meaningful connections from day one.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Start Your Application
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
