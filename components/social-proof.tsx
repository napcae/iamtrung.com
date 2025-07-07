"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { AnimatedSection } from "./animated-section"
import Image from "next/image"

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
              <Image
                src="./workshop.jpg"
                alt="Trung Nguyen speaking at a workshop"
                fill
                className="object-cover"
                priority
              />
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
            > {/*
              <span className="text-earth-muted text-lg font-light">Google</span>
              <span className="text-earth-muted text-lg font-light">Stripe</span>
              <span className="text-earth-muted text-lg font-light">Airbnb</span>
              <span className="text-earth-muted text-lg font-light">Shopify</span>
              <span className="text-earth-muted text-lg font-light">Vercel</span> */}
            </div>

            {/* Testimonials */}
            <div className="space-y-12">
              <article itemScope itemType="https://schema.org/Review">
                <div className="space-y-6">
                  <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                    "I think it's more about learning different ways to manage my own energy from others. There are so many valuable insights shared, and I want to apply these to both my professional and personal life."
                  </blockquote>
                  <footer>
                    <cite itemProp="author" className="font-light">
                      Tina Nguyen
                    </cite>
                    <p className="text-sm text-earth-muted">Founder & Workshop Participant</p>
                  </footer>
                </div>
              </article>

              <article itemScope itemType="https://schema.org/Review">
                <div className="space-y-6">
                  <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                    "This applies to my personal life as well. Just try everything, A-B test everything, see what works. If it feels good for you, then do it. That's the mindset I'll be applying going forward in my life."
                  </blockquote>
                  <footer>
                    <cite itemProp="author" className="font-light">
                      Minh Tran
                    </cite>
                    <p className="text-sm text-earth-muted">Founder & Workshop Participant</p>
                  </footer>
                </div>
              </article>

              <article itemScope itemType="https://schema.org/Review">
                <div className="space-y-6">
                  <blockquote itemProp="reviewBody" className="text-xl font-light leading-relaxed">
                    "I also like this group. I think it's always teaching me things. Like today, I definitely learned how to add more KPIs and make my life a little more organized, which was my goal."
                  </blockquote>
                  <footer>
                    <cite itemProp="author" className="font-light">
                      Choo Choo
                    </cite>
                    <p className="text-sm text-earth-muted">Founder & Workshop Participant</p>
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
