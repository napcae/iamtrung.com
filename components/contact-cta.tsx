"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <AnimatedSection id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-16 text-earth-muted">Let's Connect</h2>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-earth-light/30 mb-8">
              <Image
                src="./connect.jpeg"
                alt="Let's connect and start a conversation"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8">
              <p className="text-xl font-light">
                I work with founders who are committed to building technology with purpose and integrity. If that's you,
                let's start a conversation.
              </p>
              <p className="text-xl font-light text-earth-accent">
                The world needs more builders who care about the impact of what they create.
              </p>
              <Button
                asChild
                className="w-full sm:w-auto bg-earth-accent hover:bg-earth-green text-white rounded-full px-8"
              >
                <a href="https://cal.com/trungfromberlin/intro-call" target="_blank" rel="noopener noreferrer">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
