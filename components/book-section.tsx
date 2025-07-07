import { AnimatedSection } from "./animated-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Book {
  title: string
  author: string
  cover: string
  description: string
}

const books: Book[] = [
  {
    title: "Mastery",
    author: "Robert Greene",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Robert Greene's deep dive into the path to mastery, showing how dedication, patience, and strategic practice lead to exceptional achievement. This book has transformed how I approach personal growth and leadership development.",
  },
  {
    title: "Get Together",
    author: "Bailey Richardson, Kevin Huynh, Kai Elmer Sotto",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "A practical guide to building communities that matter. This book has been instrumental in shaping my approach to creating meaningful connections and building the Innernet community.",
  },
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Rick Rubin's profound exploration of creativity as a spiritual practice. This book has deepened my understanding of presence, authenticity, and the creative process in both business and personal growth.",
  },
  {
    title: "Wherever You Go, There You Are",
    author: "Jon Kabat-Zinn",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Jon Kabat-Zinn's classic on mindfulness meditation. This book has been foundational in my approach to cultivating presence and awareness in daily life and coaching practice.",
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    cover: "/placeholder.svg?height=300&width=200",
    description:
      "Carol Dweck's groundbreaking work on the power of our beliefs. This book has been essential in my coaching approach, helping founders overcome limiting patterns and embrace growth.",
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
                src="./calm.jpeg"
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
                  <Link
                    href={`https://www.amazon.com/s?k=${encodeURIComponent(book.title + " " + book.author)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors border-b border-transparent hover:border-earth-accent pb-1"
                  >
                    Get the book
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
