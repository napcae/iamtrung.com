"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function PodcastNewsletter() {
  return (
    <AnimatedSection id="podcast" className="py-32 px-6 md:px-12 lg:px-24 bg-earth-light">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-16 text-earth-muted">The Uncomfort Zone</h2>
          </div>
          <div className="space-y-12">
            <p className="text-xl font-light">
              Join thousands of founders and leaders who receive my weekly insights on growth, technology, and embracing
              discomfort as a catalyst for transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 group">
                <article>
                  <div className="aspect-square relative bg-earth-light overflow-hidden">
                    {/* Podcast episode image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                      <p className="text-sm">Add podcast episode image here</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm">Latest Episode</span>
                    </div>
                  </div>
                  <header>
                    <h3 className="text-lg font-light group-hover:text-earth-clay transition-colors duration-300">
                      Building Antifragile Systems in Uncertain Times
                    </h3>
                    <p className="text-sm text-earth-muted">Episode 42 • 48 min</p>
                  </header>
                </article>
              </div>

              <div className="space-y-4">
                <div className="p-8 border border-earth-light/50 h-full flex flex-col bg-earth-background">
                  <h3 className="text-xl font-light mb-4">Weekly Newsletter</h3>
                  <p className="text-earth-muted font-light mb-6 flex-grow">
                    Get actionable insights on building resilient systems and teams, delivered directly to your inbox.
                  </p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-transparent border border-earth-light/50 px-4 py-2 text-earth-dark placeholder:text-earth-muted focus:outline-none focus:border-earth-clay transition-colors duration-300"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-earth-clay text-white px-6 py-2 font-light hover:bg-earth-sand transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-earth-muted mt-4">
                    Join 10,000+ subscribers. No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="https://uncomfortzone.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-light text-earth-clay hover:text-earth-sand transition-colors border-b border-earth-light/50 hover:border-earth-clay pb-1"
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
