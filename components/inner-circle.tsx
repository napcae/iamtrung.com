import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import Image from "next/image"

export function InnerCircle() {
  return (
    <AnimatedSection
      id="inner-circle"
      className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-earth-light to-earth-background"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light text-earth-accent mb-4">The Innernet</h2>
            <p className="text-lg text-earth-muted font-light mb-8">Sustainable High Performance</p>
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-earth-light/30">
              <Image
                src="./inner_circle_gathering.jpeg"
                alt="Innernet community gathering"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-light">
              A Calm, High-Clarity Community for <span className="text-earth-accent">Sustainable Growth</span>
            </h3>

            <p className="text-xl leading-relaxed font-light">
              A space for leaders, operators, and emerging talent who want to grow from the inside out.
              We help you build sustainable high performance through guided reflection, emotional clarity, and shared wisdom.
            </p>

            <p className="text-lg leading-relaxed font-light text-earth-muted italic">
              Inner work for outer impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2 p-4 border border-earth-light bg-earth-background/50">
                <h4 className="text-lg font-light text-earth-accent">Spaciousness > Pressure</h4>
                <p className="text-earth-muted font-light text-sm">
                  High standards without hardness. A space that feels like exhaling.
                </p>
              </div>

              <div className="space-y-2 p-4 border border-earth-light bg-earth-background/50">
                <h4 className="text-lg font-light text-earth-accent">Clarity > Hacks</h4>
                <p className="text-earth-muted font-light text-sm">
                  Focus on the inner loops that power everything.
                </p>
              </div>

              <div className="space-y-2 p-4 border border-earth-light bg-earth-background/50">
                <h4 className="text-lg font-light text-earth-accent">Connection > Content</h4>
                <p className="text-earth-muted font-light text-sm">
                  Depth without heaviness. Growth without noise.
                </p>
              </div>

              <div className="space-y-2 p-4 border border-earth-light bg-earth-background/50">
                <h4 className="text-lg font-light text-earth-accent">Character > Skills</h4>
                <p className="text-earth-muted font-light text-sm">
                  Philosophy-backed personal evolution.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
              >
                <a href="https://lu.ma/calendar/cal-Ba6Y0gdYqYZqdIP" target="_blank" rel="noopener noreferrer">
                  Join Weekly Reflection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link href="/the-innernet">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
