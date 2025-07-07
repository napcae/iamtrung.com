"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import Image from "next/image"

export function PodcastNewsletter() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert("Newsletter subscription coming soon!");
  };

  return (
    <AnimatedSection id="podcast" className="py-32 px-6 md:px-12 lg:px-24 bg-earth-light">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light text-earth-accent mb-4">The Uncomfort Zone</h2>
            <Image
              src="/newsletter.jpeg"
              alt="Newsletter illustration"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg border border-earth-light/30 mb-8"
              priority
            />
          </div>
          <div className="space-y-12">

            <p className="text-xl font-light">
              Join founders and leaders who receive my weekly insights on growth, technology, and embracing
              discomfort as a catalyst for transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 group">
                <article>
                  <div className="aspect-square relative bg-earth-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                      <Image
                      src="/podcast/episode-16.jpg"
                      alt="Opening Your Inner Door: The Power of Being Real episode cover"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm">Latest Episode</span>
                    </div>
                  </div>
                  <header>
                    <h3 className="text-lg font-light group-hover:text-earth-accent transition-colors duration-300">
                    Opening Your Inner Door: The Power of Being Real
                    </h3>
                    <p className="text-sm text-earth-muted">Episode 16 • 9 min</p>
                  </header>
                </article>
              </div>

              <div className="space-y-4">
                <div className="p-8 border border-earth-light/50 h-full flex flex-col bg-earth-background">
                  <h3 className="text-xl font-light mb-4">Weekly Newsletter</h3>
                  <p className="text-earth-muted font-light mb-6 flex-grow">
                    Get actionable insights on building resilient systems and teams, delivered directly to your inbox.
                  </p>
                  <a
                    href="https://theuncomfortzone.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-earth-accent hover:bg-earth-green text-white">
                      Subscribe
                    </Button>
                  </a>
                  <p className="text-xs text-earth-muted mt-4">
                    Join today. No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="https://theuncomfortzone.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-light text-earth-accent hover:text-earth-green transition-colors border-b border-earth-light/50 hover:border-earth-accent pb-1"
            >
              Explore all episodes
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
