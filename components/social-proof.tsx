"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { AnimatedSection } from "./animated-section"

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <AnimatedSection className="py-32 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-16 text-earth-muted">Trusted By</h2>
            {/* Photo placeholder for warmth */}
            <div className="aspect-[4/3] relative bg-earth-light/50 rounded-lg overflow-hidden border border-earth-light/30 mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                <p className="text-sm">Add a photo from a speaking engagement or workshop</p>
              </div>
            </div>
          </div>
          <div className="space-y-16">
            {/* Logos */}
            <div
              ref={ref}
              className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center"
              style={{
                opacity: isInView ? 0.6 : 0,
                transition: "opacity 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span className="text-earth-muted text-lg font-light">Google</span>
              <span className="text-earth-muted text-lg font-light">Stripe</span>
              <span className="text-earth-muted text-lg font-light">Airbnb</span>
              <span className="text-earth-muted text-lg font-light">Shopify</span>
              <span className="text-earth-muted text-lg font-light">Vercel</span>
            </div>

            {/* Testimonials */}
            <div className="space-y-12">
              <article itemScope itemType="https://schema.org/Review">
                <div className="space-y-6">
                  <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                    "Trung helped us navigate our Series B with both technical precision and emotional intelligence. His
                    guidance on scaling our infrastructure while preserving our culture was invaluable."
                  </blockquote>
                  <footer>
                    <cite itemProp="author" className="font-light">
                      Sarah Chen
                    </cite>
                    <p className="text-sm text-earth-muted">CTO, Growth-stage SaaS</p>
                  </footer>
                </div>
              </article>

              <article itemScope itemType="https://schema.org/Review">
                <div className="space-y-6">
                  <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                    "What sets Trung apart is his ability to see both the technical and human dimensions of scaling. He
                    doesn't just solve problems—he builds capabilities that last."
                  </blockquote>
                  <footer>
                    <cite itemProp="author" className="font-light">
                      Michael Rodriguez
                    </cite>
                    <p className="text-sm text-earth-muted">Founder & CEO, AI Platform</p>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
