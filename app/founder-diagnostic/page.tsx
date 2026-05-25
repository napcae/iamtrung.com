import Link from "next/link"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

export const metadata = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description: "A 90-minute diagnostic to find your startup's real bottleneck. For founders with teams or founders who just raised. One session. One answer.",
}

export default function FounderDiagnosticPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        {/* Section 1: Hook */}
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-8">
              <Link
                href="/"
                className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Something in your startup is slowing everything down. You feel it. You haven&apos;t named it yet.
              </h1>

              <p className="text-xl text-earth-muted font-light leading-relaxed max-w-2xl">
                I run 90-minute Founder Bottleneck Diagnostics &mdash; one structured session to find the real constraint. Not advice. Not strategy. One answer: what&apos;s actually in the way, and why.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Recognition */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light mb-4 text-earth-accent">Your team is moving but nothing is landing.</h2>
                <p className="text-lg font-light leading-relaxed text-earth-muted">
                  Sprints end, decisions pile up, your best people are waiting on you for everything. You built something real. Now you&apos;re the bottleneck in your own machine &mdash; and you can&apos;t see it from the inside.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-earth-accent">You&apos;ve built something. You&apos;re not sure who it&apos;s really for — or how to say it.</h2>
                <p className="text-lg font-light leading-relaxed text-earth-muted">
                  You keep second-guessing the ICP, the message, who to go after first. Every conversation pulls you in a different direction. You&apos;re spending time and money, but without a clear answer to &ldquo;who is this for,&rdquo; nothing compounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mechanism */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-12">
              <p className="text-xl font-light leading-relaxed">
                Most founders who&apos;ve done this say the same thing after: &ldquo;I already knew it — I just hadn&apos;t said it out loud.&rdquo;
              </p>
              <p className="text-xl font-light leading-relaxed text-earth-muted">
                That&apos;s the point. The diagnostic doesn&apos;t give you new information. It names the thing you already felt — clearly enough that you can stop doing the expensive thing and start doing the right thing.
              </p>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;It&apos;s like going to the doctor for a scan you&apos;ve never had before and you find out problems you didn&apos;t know you had.&rdquo;
                </blockquote>
                <cite className="not-italic font-light">— Founder, B2B SaaS</cite>
              </div>

              <div className="border-l-2 border-earth-accent pl-6">
                <blockquote className="text-xl font-light leading-relaxed mb-4">
                  &ldquo;I immediately sat down and decoded the whole thing and I know exactly what I need to do next.&rdquo;
                </blockquote>
                <cite className="not-italic font-light">— Hien Nguyen, Sidekiq</cite>
              </div>

              <div className="aspect-video w-full max-w-2xl">
                <iframe
                  src="https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview"
                  className="w-full h-full"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Deliverables */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-earth-accent">One session. 90 minutes. You leave with:</h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                <span className="font-light text-lg">
                  The actual bottleneck named — not the surface complaint, the structural cause
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                <span className="font-light text-lg">
                  1–3 real priorities replacing current noise
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                <span className="font-light text-lg">
                  A clearer decision structure for the next 30–60 days
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-earth-green mr-3 mt-1 flex-shrink-0" />
                <span className="font-light text-lg">
                  Less expensive drift
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: About */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-6 text-lg font-light leading-relaxed">
              <p>
                I&apos;ve worked with 25+ early-stage founders across B2B SaaS, hardware, marketplace, and agency models. The surface complaints differ. The structural causes repeat.
              </p>
              <p className="text-earth-muted">
                A founder who has seen the same five patterns in ten companies can name the real problem faster than the founder living inside it.
              </p>
              <p>
                I&apos;m not offering coaching or advisory through this page. One diagnostic. One session. One answer. What comes next is a separate conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="text-2xl font-light mb-2">
              $299. 90 minutes.
            </p>
            <p className="text-xl text-earth-muted font-light mb-8">
              DM me &ldquo;diagnostic&rdquo; on{" "}
              <Link href="https://www.linkedin.com/in/trungfromberlin/" target="_blank" rel="noopener noreferrer" className="text-earth-accent hover:underline">
                LinkedIn
              </Link>{" "}
              to start.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-earth-light/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-earth-muted">
                &copy; {new Date().getFullYear()} Trung Nguyen. All rights reserved.
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
