import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

export const metadata = {
  title: "Re:Connect Vietnam | Trung Nguyen",
  description: "Movement. Mental Health. Sustainable High Performance. A 12-month reflection. A 6-week journey. A story about coming back — to self, to roots, to what actually matters.",
}

export default function ReconnectVietnamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[90vh] flex items-center bg-gradient-to-b from-earth-light to-earth-background relative overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/reconnect/hero-cycling.jpg"
              alt="Cycling through Vietnam mountains"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="w-full max-w-6xl mx-auto relative z-10">
            <div className="space-y-8 max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                Re:<span className="text-earth-accent">Connect</span> Vietnam
              </h1>
              <p className="text-xl md:text-2xl text-earth-muted font-light">
                Movement. Mental Health. Sustainable High Performance.
              </p>
              <p className="text-lg text-earth-muted font-light italic">
                A 12-month reflection. A 6-week journey.<br />
                A story about coming back — to self, to roots, to what actually matters.
              </p>
              <div className="pt-8 space-y-4">
                <p className="text-xl font-light leading-relaxed">
                  After 12 months living in Vietnam, I'm riding from Hanoi to Saigon to tell a different story about performance, purpose, and mental health.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  This journey is about <span className="text-earth-accent">reconnection</span> — with the body, the mind, and a new generation of builders shaping modern Vietnam.
                </p>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                >
                  <a href="https://cal.com/trungfromberlin/intro-call" target="_blank" rel="noopener noreferrer">
                    Support Mental Health Sessions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-earth-accent text-earth-accent hover:bg-earth-accent/10 rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                >
                  <a href="https://www.linkedin.com/in/ctn1991/" target="_blank" rel="noopener noreferrer">
                    Follow the Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Exists */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">Why This Exists</h2>
                <p className="text-lg text-earth-muted font-light italic mb-4">The Human Truth</p>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-earth-light/30 mt-8">
                  <Image
                    src="/reconnect/movement-peace.jpg"
                    alt="Person finding peace through movement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed">
                  For years, I lived in high-performance environments: unicorn startups, fast growth, constant pressure.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  I was successful — and burned out. More than once.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  What finally helped wasn't pushing harder. It was <span className="text-earth-accent">slowing down. Moving. Reconnecting.</span>
                </p>
                <p className="text-xl font-light leading-relaxed">
                  Cycling, running, climbing — they brought me back into my body. They taught me a different definition of performance:
                </p>
                <p className="text-2xl font-light leading-relaxed text-earth-accent italic">
                  Sustainable. Calm. Aligned. Human.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  Re:Connect Vietnam exists to share that story — openly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Cause */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">The Cause</h2>
                <p className="text-lg text-earth-muted font-light">Mental Health in Practice</p>
              </div>
              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed">
                  This project raises awareness for mental health by talking about my own story — without filters or hero narratives.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  All funds raised go toward:
                </p>
                <ul className="space-y-4 text-xl font-light">
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span>Facilitated group mental health sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span>Safe spaces for people struggling with stress, burnout, or identity transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-accent mr-3">→</span>
                    <span>Conversations around sustainable high performance, not hustle</span>
                  </li>
                </ul>
                <p className="text-xl font-light leading-relaxed italic text-earth-muted">
                  This is not charity as marketing.<br />
                  It's community support — done quietly, intentionally, and locally.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6 h-auto font-light transition-all duration-300"
                  >
                    <a href="https://cal.com/trungfromberlin/intro-call" target="_blank" rel="noopener noreferrer">
                      Contribute to the Cause
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">The Journey</h2>
                <p className="text-lg text-earth-muted font-light">January 2025 · 6 weeks · ~2,500 km</p>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-earth-light/30 mt-8">
                  <Image
                    src="/reconnect/vietnam-road.jpg"
                    alt="Vietnam countryside road"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-earth-accent">Route</h3>
                  <p className="text-xl font-light">
                    Hanoi → Ha Giang → Cao Bang → Hanoi → Central Vietnam → Saigon
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-earth-accent">How I Travel</h3>
                  <p className="text-xl font-light">
                    Gravel bike · Minimal setup · Homestays · Conversations
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-earth-accent">Along the Way</h3>
                  <ul className="space-y-3 text-xl font-light">
                    <li className="flex items-start">
                      <span className="text-earth-accent mr-3">→</span>
                      <span>Stories from the road</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-accent mr-3">→</span>
                      <span>Reflections on identity, work, and wellbeing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-accent mr-3">→</span>
                      <span>Conversations with locals, founders, and builders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-accent mr-3">→</span>
                      <span>A modern story of Vietnam — beyond headlines</span>
                    </li>
                  </ul>
                </div>
                <p className="text-2xl font-light italic text-earth-accent">
                  This is not about speed. It's about presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where the Story Lives */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">Where the Story Lives</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border border-earth-light/50 bg-earth-background space-y-4">
                  <h3 className="text-xl font-light text-earth-accent">LinkedIn — The Meaning</h3>
                  <ul className="space-y-2 text-earth-muted font-light">
                    <li>Reflections & synthesis</li>
                    <li>Sustainable high performance</li>
                    <li>Second season of business</li>
                    <li>Identity shifts after moving to Vietnam</li>
                    <li>Founders, investors, and builders</li>
                  </ul>
                  <a href="https://www.linkedin.com/in/ctn1991/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors">
                    Follow on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="p-6 border border-earth-light/50 bg-earth-background space-y-4">
                  <h3 className="text-xl font-light text-earth-accent">Instagram — The Feeling</h3>
                  <ul className="space-y-2 text-earth-muted font-light">
                    <li>Cinematic moments</li>
                    <li>Quiet roads, faces, landscapes</li>
                    <li>The emotional texture of the journey</li>
                  </ul>
                  <a href="https://www.instagram.com/trung.berlin/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-earth-accent hover:text-earth-green transition-colors">
                    Follow on Instagram <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">About Me</h2>
                <div className="relative w-32 h-32 md:w-48 md:h-48 lg:aspect-[3/4] lg:w-full lg:h-auto rounded-lg overflow-hidden border border-earth-light/30 mt-8">
                  <Image
                    src="/me_portrait.jpeg"
                    alt="Trung Nguyen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed">
                  I'm Trung — founder, angel investor, and community builder.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  Born and raised in Germany, I moved to Vietnam a year ago to reconnect with my roots and rethink how I live and work.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  I've worked as a software engineer and staff engineer in infrastructure and security, built companies, and experienced multiple burnouts along the way.
                </p>
                <p className="text-xl font-light leading-relaxed">
                  Today, I work with founders on alignment and sustainable high performance, lead the Founders Running Club HCMC, and explore how movement creates clarity.
                </p>
                <p className="text-xl font-light leading-relaxed text-earth-accent">
                  Re:Connect Vietnam is part of that work — just more honest, and more human.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Gratitude */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-light text-earth-accent">Thank You</h2>
            <p className="text-xl font-light max-w-2xl mx-auto">
              This journey is supported by a small group of people and partners who believe in the mission.
            </p>
            <p className="text-lg text-earth-muted font-light italic">
              Your trust makes this possible.
            </p>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-light mb-8 text-earth-accent">Stay Connected</h2>
                <p className="text-lg text-earth-muted font-light">If this resonates and you want to go deeper:</p>
              </div>
              <div className="space-y-6">
                <ul className="space-y-4 text-xl font-light">
                  <li className="flex items-start">
                    <span className="text-earth-green mr-3">🟢</span>
                    <span><Link href="/the-innernet" className="text-earth-accent hover:underline">The Innernet</Link> — community for sustainable high performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✉️</span>
                    <span><a href="https://theuncomfortzone.substack.com" target="_blank" rel="noopener noreferrer" className="text-earth-accent hover:underline">The Uncomfort Zone</a> — reflections on work, identity, and alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">🏃</span>
                    <span><a href="https://www.instagram.com/frcsaigon/" target="_blank" rel="noopener noreferrer" className="text-earth-accent hover:underline">Founders Running Club HCMC</a></span>
                  </li>
                </ul>
                <p className="text-lg text-earth-muted font-light italic">
                  No spam. No pressure. Just honest conversations.
                </p>
                <p className="text-lg font-light text-earth-accent">
                  👉 Join if it feels right
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-earth-background to-earth-light">
          <div className="w-full max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl font-light leading-relaxed">
              This is not about fixing anything.
            </p>
            <p className="text-xl font-light leading-relaxed">
              It's about <span className="text-earth-accent">reconnecting</span> — with ourselves, with each other, and with a healthier way of performing.
            </p>
            <p className="text-xl font-light leading-relaxed">
              If you've ever felt burned out, disconnected, or quietly exhausted — this journey is for you.
            </p>
            <div className="pt-8 space-y-4">
              <p className="text-lg text-earth-muted font-light italic">
                Keep it simple, keep it fresh, smile and let it go
              </p>
              <p className="text-xl font-light text-earth-accent">
                — Yours truly, Trung
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-earth-light/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-earth-muted">
                © {new Date().getFullYear()} Trung Nguyen. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                About
              </Link>
              <Link href="/#offerings" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Offerings
              </Link>
              <Link href="/#contact" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  )
}

