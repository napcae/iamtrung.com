import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { entityDescription, personSchema } from "@/components/structured-data"

// Entity page — the canonical answer to "Who is Trung Nguyen?" for people
// and for crawlers. Copy source of truth: TrungOPS context/website/entity-pages.md
// (grounded in strategy/positioning.md, strategy/icp.md, offers/diagnostic.md).
// No price appears on this page — pricing is set in the conversation.


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
              Most of the work starts from one situation: the founder hired senior leaders, and the important
              decisions still come back to them. The founder usually suspects the person. The diagnostic finds
              out whether it is the person, the role, the team's habits or an approval path nobody redesigned
              when the hire arrived.
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
              Founder-led companies with customers, a team and at least one senior hire, a COO, Head of Ops, GM
              or functional head, who was meant to take decisions off the founder. The signs:
            </p>
            <ul className="space-y-3 text-lg font-normal list-disc pl-6">
              <li>The team still waits for the founder's yes on calls already handed off.</li>
              <li>A week off and things slow down.</li>
              <li>The founder has started to wonder whether they hired the wrong person.</li>
              <li>Or the hire hasn't happened yet, and the founder wants to know what it has to take off their plate.</li>
            </ul>
            <p className="text-xl leading-relaxed font-normal">
              He also works with capable founders before they have that team, when their own explanation for
              what's stuck keeps not solving it. It's a structural blind spot, not a character flaw.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              Not a fit: founders who want the hire judged without looking at the setup around them, founders
              who want an interim COO or ongoing coaching, and idea-stage founders with no team or product yet.
            </p>
          </div>
        </section>

        {/* Background — claims limited to the Public facts table in TrungOPS
            decisions/business-positioning/2026-10-20-career-arc-as-public-proof.md */}
        <section id="background" className="py-24 px-6 md:px-12 lg:px-24 bg-earth-light">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">Background</h2>
            <p className="text-xl leading-relaxed font-normal">
              Trung Nguyen is a Vietnamese-German engineer turned diagnostician, based in Ho Chi Minh City. He
              has seen decisions route back to one person from the inside, and he has taken himself out of
              that path.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              At Contentful, from 2018 to 2020, he was one of two people on the security team while the company
              was selling fast. Every customer security review landed on those two people until a rule changed
              what reached them. He worked on the company-wide single sign-on rollout across about 200 apps for
              about 300 people, where access roles were designed from each department's business processes
              rather than a permission matrix.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              At Workpath, from 2021 to 2023, he led infrastructure as Lead SRE and later worked as a Staff
              Software Engineer. The goal was to take himself and his team off the critical path. A small
              platform team supported about six product teams that shipped without waiting on it.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              Today he runs Founder Bottleneck Diagnostics and the Founder Dependency Reset. The work is
              structural, not therapy and not ongoing coaching.
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

      <SiteFooter />
    </div>
  )
}
