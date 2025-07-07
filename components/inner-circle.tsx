import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import Image from "next/image"

export function InnerCircle() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert("Newsletter subscription coming soon!");
  };

  return (
    <AnimatedSection
      id="inner-circle"
      className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-earth-light to-earth-background"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light text-earth-accent mb-4">The Innernet</h2>
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
              A Global Community of <span className="text-earth-accent">Values-Driven</span> Founders
            </h3>

            <p className="text-xl leading-relaxed font-light">
              The Innernet is more than a network—it's a carefully curated ecosystem where genuine connection
              happens naturally, where vulnerability is strength, and where your success is measured by your impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Unlimited Curiosity & Growth</h4>
                <p className="text-earth-muted font-light">
                  Embrace a beginner's mind, constantly learning, evolving, and improving through every experience.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Fearless Authenticity</h4>
                <p className="text-earth-muted font-light">
                  Be true to yourself and others. Lead with transparency, vulnerability, and integrity.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Radical Resilience</h4>
                <p className="text-earth-muted font-light">
                  Face challenges with determination and bounce back stronger, using setbacks as fuel for growth.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Kindness in Community</h4>
                <p className="text-earth-muted font-light">
                  Collaborate and foster meaningful relationships. Together, we're stronger and more capable of creating lasting impact.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/the-innernet">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                >
                  Join The Innernet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
