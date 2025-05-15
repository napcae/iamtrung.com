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
            <h2 className="text-2xl font-light text-earth-accent mb-4">The Inner Circle</h2>
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-earth-light/30">
              <Image
                src="./inner_circle_gathering.jpeg"
                alt="Inner Circle community gathering"
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
              The Inner Circle is more than a network—it's a carefully curated ecosystem where genuine connection
              happens naturally, where vulnerability is strength, and where your success is measured by your impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Connect Deeply</h4>
                <p className="text-earth-muted font-light">
                  Move beyond transactional networking to form authentic relationships that sustain you through the
                  founder journey.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Scale Mindfully</h4>
                <p className="text-earth-muted font-light">
                  Grow your impact without sacrificing your values or wellbeing. Build businesses that serve humanity.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Give Back</h4>
                <p className="text-earth-muted font-light">
                  Join a community committed to regenerative practices that give back to society and nature.
                </p>
              </div>

              <div className="space-y-4 p-6 border border-earth-light bg-earth-background/50">
                <h4 className="text-xl font-light text-earth-accent">Presence Focus</h4>
                <p className="text-earth-muted font-light">
                  Experience the power of being fully present—with yourself and others—as the foundation for meaningful
                  work.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/inner-circle">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                >
                  Join The Inner Circle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
