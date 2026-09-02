import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { personSchema } from "@/components/structured-data"

// Entity page — the canonical answer to "Who is Trung Nguyen?" for people
// and for crawlers. Copy source of truth: TrungOPS context/website/entity-pages.md
// (grounded in strategy/positioning.md, strategy/icp.md, offers/diagnostic.md).
// No price appears on this page — pricing is set in the conversation.

const entityDescription =
  "Trung Nguyen is a Founder Bottleneck Diagnostician who runs 90-minute diagnostics for capable founders who are compensating for their blind spot instead of resolving it, finding and naming the structural constraint behind stalled decisions, execution and growth."

export const metadata = {
  title: { absolute: "About Trung Nguyen — Founder Bottleneck Diagnostician" },
  description: entityDescription,
  alternates: { canonical: "/about" },
}

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://iamtrung.com/about#profilepage",
  url: "https://iamtrung.com/about",
  name: "About Trung Nguyen — Founder Bottleneck Diagnostician",
  mainEntity: personSchema,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Navigation />

      <main className="flex-1">
        {/* Who is Trung Nguyen */}
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Link
              href="/"
              className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Who is <span className="text-earth-accent">Trung Nguyen</span>?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-2 space-y-6">
                <p className="text-xl leading-relaxed font-normal">{entityDescription}</p>
                <p className="text-xl leading-relaxed font-normal italic">
                  "I'm the person you call when things are moving but you're not sure you're moving in the
                  right direction."
                </p>
                <article itemScope itemType="https://schema.org/Review" className="border-l-2 border-earth-accent/30 pl-4">
                  <blockquote itemProp="reviewBody" className="text-base leading-relaxed font-normal text-earth-muted italic">
                    "He doesn't expect anything in return. He just wants to see people succeed."
                  </blockquote>
                  <footer className="mt-2 text-sm text-earth-muted not-italic">
                    — <cite itemProp="author">Michael Serpell</cite>, Planetary Productions
                  </footer>
                </article>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-earth-light/30">
                <div className="relative w-full aspect-[3/4]">
                  <Image src="/me_portrait.jpeg" alt="Portrait of Trung Nguyen" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What he does */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">What is a Founder Bottleneck Diagnostic?</h2>
            <p className="text-xl leading-relaxed font-normal">
              A 90-minute structured session with one job: find the real constraint in a founder-led company
              and say it out loud. State the problem, pull the facts, find the gap, name the pattern, leave
              with one concrete move. Not advice. Not strategy work. Most founders describe the result the
              same way afterwards: "I already knew it — I just hadn't said it out loud."
            </p>
            <p className="text-xl leading-relaxed font-normal">
              The diagnostic exists because founders are usually confidently wrong about their own bottleneck.
              The explanation they carry — team problem, process problem, focus problem — is comfortable, and
              the company keeps scaling around the real constraint every week it stays unnamed.
            </p>
            <div>
              <Link href="/founder-diagnostic">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-earth-accent text-earth-accent hover:bg-earth-accent/10 hover:border-earth-accent rounded-none px-8 py-6 transition-all duration-300"
                >
                  How the diagnostic works
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who he works with */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">Who he works with</h2>
            <p className="text-xl leading-relaxed font-normal">
              Capable people are usually the last to know their own bottleneck — everyone around them
              already sees it, they just can't say it to your face. Not a character flaw. A structural
              blind spot. The pattern that fits:
            </p>
            <ul className="space-y-3 text-lg font-normal list-disc pl-6">
              <li>A lot of thinking, not a lot of deciding.</li>
              <li>The thing they said they'd resolve last month still isn't resolved.</li>
              <li>Smart, busy — and in the same place as six months ago.</li>
              <li>Same problem, different explanation each quarter.</li>
              <li>The team is moving but nothing is landing.</li>
            </ul>
            <p className="text-xl leading-relaxed font-normal">
              Even sharp operators who are already doing well feel this right before their next real
              jump — a calm unease where something senses off, the timing or trigger still unclear, a
              pattern felt but not yet named.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              Not a fit: founders who want validation, founders who want ongoing coaching, and idea-stage
              founders with no team or product yet.
            </p>
          </div>
        </section>

        {/* Background */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-xl leading-relaxed font-normal">
              Trung Nguyen is a Vietnamese-German engineer turned diagnostician, based in Berlin. He led
              engineering teams, built companies through freelancing and venture-building, and spent years
              inside the exact system he now diagnoses: the founder-led company where everything routes
              through one person.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              Alongside the diagnostic work he runs{" "}
              <Link href="/the-innernet" className="text-earth-accent hover:underline">
                The Innernet
              </Link>
              , a community for founders, and{" "}
              <Link href="/media" className="text-earth-accent hover:underline">
                talks about the founder's internal state
              </Link>{" "}
              — because it distorts business diagnosis. The commercial work is structural Founder
              Bottleneck Diagnostics, not therapy and not ongoing coaching.
            </p>
          </div>
        </section>

        {/* Where to verify */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">Where to verify his work</h2>
            <ul className="space-y-3 text-lg font-normal">
              <li>
                <a
                  href="https://www.linkedin.com/in/ctn1991/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-accent hover:underline"
                >
                  LinkedIn
                </a>{" "}
                — professional profile and diagnostic writing
              </li>
              <li>
                <a
                  href="https://theuncomfortzone.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-accent hover:underline"
                >
                  Substack
                </a>{" "}
                — essays and newsletter
              </li>
              <li>
                <Link href="/founder-diagnostic" className="text-earth-accent hover:underline">
                  The Founder Bottleneck Diagnostic
                </Link>{" "}
                — what a session is, how it runs, and what founders say afterwards
              </li>
              <li>
                <Link href="/case-studies" className="text-earth-accent hover:underline">
                  Case studies
                </Link>{" "}
                — what founders thought was wrong, what the diagnostic found, and the results, with real
                numbers where clients cleared them
              </li>
              <li>
                <Link href="/essays" className="text-earth-accent hover:underline">
                  Essays
                </Link>{" "}
                — direct answers to the questions founders actually ask
              </li>
              <li>
                <Link href="/media" className="text-earth-accent hover:underline">
                  Media appearances
                </Link>{" "}
                — podcasts and interviews, with a summary and key questions for each
              </li>
            </ul>
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
              <Link
                href="/founder-diagnostic"
                className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
              >
                Diagnostic
              </Link>
              <Link href="/essays" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Essays
              </Link>
              <Link href="/case-studies" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Case studies
              </Link>
              <Link href="/#contact" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Contact
              </Link>
              <Link
                href="/essays/what-happens-in-a-diagnostic"
                className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
              >
                FAQ
              </Link>
              <Link href="/privacy" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Privacy
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
