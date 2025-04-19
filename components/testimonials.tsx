"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote:
      "Trung helped us scale from 1 to 6 teams while maintaining our engineering excellence and culture. His technical expertise combined with his people-first approach made all the difference.",
    author: "Engineering Director",
    company: "Tech Startup",
  },
  {
    id: 2,
    quote:
      "What sets Trung apart is his ability to dig deep into problems, understand the root causes, and guide us toward sustainable solutions. He doesn't just fix issues—he builds capabilities.",
    author: "Founder & CEO",
    company: "SaaS Company",
  },
  {
    id: 3,
    quote:
      "Trung creates space for others to grow. His coaching helped me navigate the transition from engineer to leader, focusing on both technical excellence and emotional intelligence.",
    author: "Engineering Manager",
    company: "Growth-stage Startup",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="absolute -top-12 -left-12 text-[#D4A373] opacity-20">
        <Quote size={80} />
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="py-6">
                <blockquote className="text-lg md:text-xl italic mb-6 text-[#5C5C5C] relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <p className="font-medium text-[#5C5C5C]">{testimonial.author}</p>
                  <p className="text-sm text-[#5C5C5C]/70">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              index === activeIndex ? "bg-[#D4A373]" : "bg-[#D4A373]/30",
            )}
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#fffaf5]/80 backdrop-blur-sm shadow-sm pointer-events-auto border border-[#E9EDC9] text-[#5C5C5C] hover:bg-[#FEFAE0] hover:text-[#5C5C5C]"
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#fffaf5]/80 backdrop-blur-sm shadow-sm pointer-events-auto border border-[#E9EDC9] text-[#5C5C5C] hover:bg-[#FEFAE0] hover:text-[#5C5C5C]"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
