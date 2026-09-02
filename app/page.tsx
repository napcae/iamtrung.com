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
import { StructuredData } from "@/components/structured-data"
import { InnerCircle } from "@/components/inner-circle"
import { BookSection } from "@/components/book-section"

export const metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <StructuredData />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  Founder Bottleneck <span className="text-earth-accent">Diagnostician</span>
                </h1>
                <p className="text-lg md:text-xl text-earth-dark max-w-xl font-normal">
                  I'm Trung Nguyen. I find the constraint founders are already scaling around instead of fixing.
                  90 minutes, one session — for capable founders compensating for a blind spot instead of resolving it.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link href="/founder-diagnostic">
                    <Button
                      variant="outline"
                      size="lg"
                      className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                    >
                      The Founder Bottleneck Diagnostic
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
                  >
                    Who is Trung Nguyen? →
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
                <h2 className="text-2xl font-semibold mb-16 text-earth-dark">My Story</h2>
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
                <p className="text-xl leading-relaxed font-normal">
                  I'm Trung. A Vietnamese-German builder obsessed with turning chaos into clarity — across startups, communities, and human systems. I design technical foundations and mindsets strong enough to grow through anything.
                </p>
                <p className="text-xl leading-relaxed font-normal">
                  After leading engineering teams and carving my own path through freelancing and venture-building, I learned something simple: Transformation doesn't happen through transactions — it happens when people bet on each other.
                </p>
                <p className="text-xl leading-relaxed font-normal">
                  Today I run Founder Bottleneck Diagnostics: 90 minutes to find and name the constraint behind
                  stalled decisions, execution and growth. I still write about the founder's internal state,
                  because it distorts business diagnosis — but the commercial work is structural, not therapy
                  and not ongoing coaching.
                </p>

                {/* <div className="flex space-x-4 pt-4">
                  <span className="text-earth-accent font-normal">Money</span>
                  <span className="text-earth-dark">•</span>
                  <span className="text-earth-accent font-normal">Mastery</span>
                  <span className="text-earth-dark">•</span>
                  <span className="text-earth-accent font-normal">Meaning</span>
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
                <h2 className="text-2xl font-semibold mb-16 text-earth-dark">Mission & Vision</h2>
              </div>
              <div className="space-y-16">
                <div className="space-y-8">
                  <h3 className="text-2xl font-medium text-earth-accent">Vision</h3>
                  <p className="text-xl leading-relaxed font-normal">
                    A global, high-trust ecosystem where founders, creatives, and visionaries embrace unlimited curiosity,
                    practice fearless authenticity, demonstrate radical resilience, and foster kindness in community.
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-medium text-earth-accent">Mission</h3>
                  <p className="text-xl leading-relaxed font-normal">
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
              <Link href="/about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                About
              </Link>
              <Link href="#offerings" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Offerings
              </Link>
              <Link href="#podcast" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Podcast
              </Link>
              <Link href="/essays" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Essays
              </Link>
              <Link href="/case-studies" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Case studies
              </Link>
              <Link href="#contact" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Contact
              </Link>
              <Link
                href="/essays/what-happens-in-a-diagnostic"
                className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
              >
                FAQ
              </Link>
              <Link href="/privacy" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Privacy
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
