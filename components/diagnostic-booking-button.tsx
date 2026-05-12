"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DiagnosticBookingButtonProps {
  url?: string
  text?: string
  className?: string
  variant?: "default" | "outline"
}

export function DiagnosticBookingButton({
  url = "https://cal.com/trungfromberlin/founder-bottleneck-diagnostic",
  text = "Book a Founder Diagnostic Session",
  className = "w-full",
  variant = "default",
}: DiagnosticBookingButtonProps) {
  const baseClasses = "rounded-none px-8 py-6 h-auto font-light transition-all duration-300 flex items-center justify-center gap-2"

  const variantClasses =
    variant === "outline"
      ? "group border border-earth-clay text-earth-clay hover:bg-earth-clay/10"
      : "bg-earth-clay hover:bg-earth-sand text-white"

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button className={`${baseClasses} ${variantClasses} ${className}`}>
        {text}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  )
}
