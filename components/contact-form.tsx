"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#5C5C5C]">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          value={formState.name}
          onChange={handleChange}
          required
          className="border-[#E9EDC9] focus-visible:ring-[#D4A373] bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#5C5C5C]">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formState.email}
          onChange={handleChange}
          required
          className="border-[#E9EDC9] focus-visible:ring-[#D4A373] bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#5C5C5C]">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help you?"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
          className="border-[#E9EDC9] focus-visible:ring-[#D4A373] bg-white"
        />
      </div>

      <Button
        type="submit"
        className="w-full sm:w-auto bg-[#D4A373] hover:bg-[#C69C6D] text-white rounded-full px-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>

      {isSubmitted && (
        <div className="p-4 bg-[#FEFAE0] text-[#D4A373] rounded-md border border-[#E9EDC9]">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
    </form>
  )
}
