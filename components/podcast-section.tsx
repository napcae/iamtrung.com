import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"

export function PodcastSection() {
  return (
    <AnimatedSection id="podcast" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-16 text-[#999999]">Weekly Insights</h2>
          </div>
          <div className="space-y-12">
            <p className="text-xl font-light">
              Each week, I explore the intersection of technology, leadership, and personal growth with industry experts
              and thought leaders. Join thousands of founders who tune in for actionable strategies and fresh
              perspectives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 group">
                <div className="aspect-square relative bg-[#222] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Podcast episode"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white/20 rounded-none"
                    >
                      Listen Now
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-light group-hover:text-[#3B82F6] transition-colors duration-300">
                    Building Resilient Teams in Uncertain Markets
                  </h3>
                  <p className="text-sm text-[#555]">Episode 42 • 48 min</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="aspect-square relative bg-[#222] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Podcast episode"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white/20 rounded-none"
                    >
                      Listen Now
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-light group-hover:text-[#3B82F6] transition-colors duration-300">
                    The Future of Sustainable Tech: Beyond the Hype
                  </h3>
                  <p className="text-sm text-[#555]">Episode 41 • 52 min</p>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center text-lg font-light text-[#3B82F6] hover:text-[#3B82F6]/80 transition-colors border-b border-[#333] hover:border-[#3B82F6] pb-1"
            >
              Browse all episodes
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="pt-12 border-t border-[#222]">
              <h3 className="text-xl font-light mb-6">Join the Community</h3>
              <p className="text-[#999999] font-light mb-6">
                Get weekly insights on technology, leadership, and personal growth delivered to your inbox, plus
                exclusive resources only for subscribers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border border-[#333] px-4 py-2 text-white placeholder:text-[#555] focus:outline-none focus:border-[#3B82F6] transition-colors duration-300 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#3B82F6] text-white px-6 py-2 font-light hover:bg-[#3B82F6]/80 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-[#555] mt-4">Join 10,000+ subscribers. No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
