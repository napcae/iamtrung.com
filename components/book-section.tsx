import { AnimatedSection } from "./animated-section"
import Image from "next/image"

interface Book {
  title: string
  author: string
  cover: string
  description: string
}

const books: Book[] = [
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "This book transformed how I approach complex problems. It taught me to see patterns and relationships rather than isolated events, fundamentally changing my approach to building technology and organizations that can adapt to changing conditions.",
  },
  {
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Taleb's concept of systems that gain from disorder revolutionized my philosophy on resilience. It's influenced how I build teams that don't just withstand challenges but actively grow stronger through them—a critical advantage in today's volatile markets.",
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "The distinction between fixed and growth mindsets has been foundational to my coaching approach. This book helped me understand how to cultivate environments where people continuously evolve and embrace challenges as opportunities for growth.",
  },
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "This book transformed how I approach complex problems. It taught me to see patterns and relationships rather than isolated events, fundamentally changing my approach to building technology and organizations that can adapt to changing conditions.",
  },
  {
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Taleb's concept of systems that gain from disorder revolutionized my philosophy on resilience. It's influenced how I build teams that don't just withstand challenges but actively grow stronger through them—a critical advantage in today's volatile markets.",
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "The distinction between fixed and growth mindsets has been foundational to my coaching approach. This book helped me understand how to cultivate environments where people continuously evolve and embrace challenges as opportunities for growth.",
  },
]

export function BookSection() {
  return (
    <AnimatedSection id="books" className="py-32 px-6 md:px-12 lg:px-24 bg-earth-background">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-16 text-earth-muted">Books That Shaped Me</h2>
            <p className="text-xl font-light">
              These works have profoundly influenced my thinking and approach to technology, leadership, and personal
              growth. They might transform your perspective too.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-earth-light/30 mt-8">
              <Image
                src="/calm.jpeg"
                alt="A peaceful reading space"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="space-y-24">
            {books.map((book, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
                <div className="md:col-span-1">
                  <div className="relative aspect-[2/3] bg-earth-light overflow-hidden shadow-md">
                    {/* Book cover placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-earth-muted text-xs text-center p-2">
                      Add {book.title} cover image here
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <h3 className="text-xl font-light group-hover:text-earth-green transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-sm text-earth-muted">by {book.author}</p>
                  <p className="text-earth-muted font-light">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
