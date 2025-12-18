"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-earth-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl font-light">
            Trung Nguyen
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-sm font-light text-earth-muted hover:text-earth-dark transition-colors">
              About
            </Link>
            <Link
              href="/#mission"
              className="text-sm font-light text-earth-muted hover:text-earth-dark transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#offerings"
              className="text-sm font-light text-earth-muted hover:text-earth-dark transition-colors"
            >
              Offerings
            </Link>
            <Link
              href="/#podcast"
              className="text-sm font-light text-earth-muted hover:text-earth-dark transition-colors"
            >
              Podcast
            </Link>
            <Link
              href="/reconnect-vietnam"
              className="text-sm font-light text-earth-accent hover:text-earth-dark transition-colors"
            >
              Re:Connect Vietnam
            </Link>
            <Link href="/#contact">
              <Button
                variant="outline"
                size="sm"
                className="border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none transition-all duration-300"
              >
                Start the Conversation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-earth-dark"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-20 z-50 bg-earth-background md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-6 space-y-8">
              <Link
                href="/#about"
                className="text-xl font-light text-earth-muted hover:text-earth-dark transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/#mission"
                className="text-xl font-light text-earth-muted hover:text-earth-dark transition-colors"
                onClick={closeMenu}
              >
                Mission
              </Link>
              <Link
                href="/#offerings"
                className="text-xl font-light text-earth-muted hover:text-earth-dark transition-colors"
                onClick={closeMenu}
              >
                Offerings
              </Link>
              <Link
                href="/#podcast"
                className="text-xl font-light text-earth-muted hover:text-earth-dark transition-colors"
                onClick={closeMenu}
              >
                Podcast
              </Link>
              <Link
                href="/reconnect-vietnam"
                className="text-xl font-light text-earth-accent hover:text-earth-dark transition-colors"
                onClick={closeMenu}
              >
                Re:Connect Vietnam
              </Link>
              <Link href="/#contact" onClick={closeMenu}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none w-full transition-all duration-300"
                >
                  Start the Conversation
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
