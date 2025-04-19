"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface TestimonialMinimalProps {
  quote: string
  author: string
  company: string
  delay?: number
}

export function TestimonialMinimal({ quote, author, company, delay = 0 }: TestimonialMinimalProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className="space-y-6"
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      <p className="text-xl font-light leading-relaxed">"{quote}"</p>
      <div>
        <p className="font-light">{author}</p>
        <p className="text-sm text-[#555]">{company}</p>
      </div>
    </div>
  )
}
