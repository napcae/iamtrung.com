import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import Image from "next/image"

export function Offerings() {
  return (
    <AnimatedSection id="offerings" className="py-32 px-6 md:px-12 lg:px-24 bg-earth-light">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light text-earth-accent mb-4">How I Help</h2>
            <div className="relative rounded-lg overflow-hidden border border-earth-light/30 mb-8">
              <Image
                src="./founders_pause.png"
                alt="Founders taking a mindful pause"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-16">
            {/* Founder Coaching */}
            <article className="space-y-6 group">
              <h3 className="text-2xl font-light group-hover:text-earth-accent transition-colors duration-300">
                Founder Coaching
              </h3>
              <p className="text-lg leading-relaxed font-light text-earth-muted">
                Clear emotional roadblocks that keep you from doing the hard things you're meant for. Develop resilience
                without burning out.
              </p>
              <ul className="space-y-3 text-earth-muted">
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Emotional intelligence for technical founders</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Presence-based leadership development</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Building resilience through vulnerability</span>
                </li>
              </ul>
              <Link
                href="/founder-coaching"
                className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors border-b border-transparent hover:border-earth-accent pb-1"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>

            {/* The Inner Circle */}
            <article className="space-y-6 group">
              <h3 className="text-2xl font-light group-hover:text-earth-accent transition-colors duration-300">
                The Inner Circle
              </h3>
              <p className="text-earth-muted font-light">
                Join a curated community of values-driven founders committed to unlimited curiosity, fearless authenticity,
                radical resilience, and kindness in community.
              </p>
              <ul className="space-y-3 text-earth-muted">
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Presence-focused experiences and retreats</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Peer learning and accountability groups</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Access to funding for impactful businesses</span>
                </li>
              </ul>
              <Link
                href="/inner-circle"
                className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors border-b border-transparent hover:border-earth-accent pb-1"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>

            {/* Overcoming Procrastination Workshop */}
            {/* <article className="space-y-6 group">
              <h3 className="text-2xl font-light group-hover:text-earth-accent transition-colors duration-300">
                Overcoming Procrastination Workshop
              </h3>
              <p className="text-lg leading-relaxed font-light text-earth-muted">
                A 3-hour workshop that helps you break through procrastination patterns and take decisive action. Stop
                planning, start doing.
              </p>
              <ul className="space-y-3 text-earth-muted">
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Identify your unique procrastination triggers</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Learn practical techniques for immediate action</span>
                </li>
                <li className="flex items-baseline group cursor-pointer">
                  <span className="text-earth-accent mr-3 transition-all duration-300 group-hover:translate-x-1">→</span>
                  <span>Create a personalized system for sustained momentum</span>
                </li>
              </ul>
              <Link
                href="/procrastination-workshop"
                className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors border-b border-transparent hover:border-earth-accent pb-1"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article> */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
