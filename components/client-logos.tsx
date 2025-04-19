"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24 border-t border-b border-[#222]"
      style={{
        opacity: isInView ? 0.6 : 0,
        transition: "opacity 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          <p className="text-sm text-[#555] w-full md:w-auto text-center md:text-left">Trusted by leaders at:</p>
          <span className="text-[#555] text-lg font-light">Google</span>
          <span className="text-[#555] text-lg font-light">Stripe</span>
          <span className="text-[#555] text-lg font-light">Airbnb</span>
          <span className="text-[#555] text-lg font-light">Shopify</span>
          <span className="text-[#555] text-lg font-light">Vercel</span>
        </div>
      </div>
    </div>
  )
}
