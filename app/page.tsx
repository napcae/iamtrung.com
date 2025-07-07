import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialProof } from "@/components/social-proof"
import { PodcastNewsletter } from "@/components/podcast-newsletter"
import { ContactCTA } from "@/components/contact-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Offerings } from "@/components/offerings"
import { SocialIcons } from "@/components/social-icons"
import { Metadata } from "@/components/metadata"
import { StructuredData } from "@/components/structured-data"
import { InnerCircle } from "@/components/inner-circle"
import { BookSection } from "@/components/book-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Metadata />
      <StructuredData />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight">
                  <span className="text-earth-accent">Architect</span> of Belonging
                </h1>
                <p className="text-lg md:text-xl text-earth-muted max-w-xl font-light">
                  I design the spaces where meaningful connection happens. Where purpose-driven founders find each
                  other, grow together, and build companies that heal humans, society and the planet.
                </p>
                <div className="pt-4">
                  <Link href="/the-innernet">
                    <Button
                      variant="outline"
                      size="lg"
                      className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    >
                      Join The Innernet
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                {/* Photo placeholder for warmth */}
                <div className="relative w-full max-w-[390px] mx-auto rounded-lg overflow-hidden border border-earth-light/30">
                  <div className="relative w-full aspect-[3/3]">
                    <Image
                      src="./me_portrait.jpeg"
                      alt="Portrait of Trung Nguyen"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">My Story</h2>
                <div className="relative rounded-lg overflow-hidden border border-earth-light/30 mb-8">
                  <Image
                    src="./me_aldi.jpeg"
                    alt="Trung Nguyen in front of a Chinese Aldi"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-8">
                <p className="text-xl leading-relaxed font-light">
                  I'm Trung. A Vietnamese-German builder obsessed with turning chaos into clarity — across startups, communities, and human systems. I design technical foundations and mindsets strong enough to grow through anything.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  After leading engineering teams and carving my own path through freelancing and venture-building, I learned something simple: Transformation doesn't happen through transactions — it happens when people bet on each other.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  Today, I help founders and high-achievers clear emotional bottlenecks, so they can scale without breaking what makes them great.
                </p>

                {/* <div className="flex space-x-4 pt-4">
                  <span className="text-earth-accent font-light">Money</span>
                  <span className="text-earth-dark">•</span>
                  <span className="text-earth-accent font-light">Mastery</span>
                  <span className="text-earth-dark">•</span>
                  <span className="text-earth-accent font-light">Meaning</span>
                </div> */}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Inner Circle Section */}
        <InnerCircle />

        {/* Mission & Vision Section */}
        <AnimatedSection id="mission" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-16 text-earth-muted">Mission & Vision</h2>
              </div>
              <div className="space-y-16">
                <div className="space-y-8">
                  <h3 className="text-2xl font-light text-earth-accent">Vision</h3>
                  <p className="text-xl leading-relaxed font-light">
                    A global, high-trust ecosystem where founders, creatives, and visionaries embrace unlimited curiosity,
                    practice fearless authenticity, demonstrate radical resilience, and foster kindness in community.
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-light text-earth-accent">Mission</h3>
                  <p className="text-xl leading-relaxed font-light">
                    To create presence-focused experiences that foster genuine human connection, collaboration, and
                    personal growth—while amplifying unheard voices and funding impactful businesses.
                  </p>
                </div>

                <p className="text-2xl font-light leading-relaxed italic">
                  "Build slow, build strong, build for impact. Focus on presence today, for a future worth living."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Offerings Section */}
        <Offerings />

        {/* Social Proof Section */}
        <SocialProof />

        {/* Books Section */}
        <BookSection />

        {/* Podcast/Newsletter Section */}
        <PodcastNewsletter />

        {/* Contact CTA Section - Now Last */}
        <ContactCTA />
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
              <Link href="#" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                About
              </Link>
              <Link href="#offerings" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Offerings
              </Link>
              <Link href="#podcast" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Podcast
              </Link>
              <Link href="#contact" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
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
