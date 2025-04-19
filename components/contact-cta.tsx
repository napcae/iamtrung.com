"use client"

import type React from "react"

import { useState } from "react"
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
            {/* Photo placeholder for warmth */}
            <div className="aspect-[4/3] relative bg-earth-light/50 rounded-lg overflow-hidden border border-earth-light/30 mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-earth-muted">
                <p className="text-sm">Add a warm, inviting photo here</p>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-xl font-light">
                I work with founders who are committed to building technology with purpose and integrity. If that's you,
                let's start a conversation.
              </p>
              <p className="text-xl font-light text-earth-clay">
                The world needs more builders who care about the impact of what they create.
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2 group">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus-visible:ring-0 focus-visible:border-earth-clay transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus-visible:ring-0 focus-visible:border-earth-clay transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your vision"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="border-0 border-b border-earth-light/50 rounded-none bg-transparent px-0 py-2 text-earth-dark placeholder:text-earth-muted focus-visible:ring-0 focus-visible:border-earth-clay transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-earth-clay hover:bg-earth-sand text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Start the Conversation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <div className="text-earth-dark font-light p-4 border border-earth-clay/30 bg-earth-clay/10">
                  Thank you for reaching out. I'll get back to you within 24 hours to discuss how we can work together.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
