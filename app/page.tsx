import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { StructuredData, entityDescription } from "@/components/structured-data"

// Homepage — the page a referred founder checks before replying, and the page a
// partner forwards. Copy source of truth: TrungOPS context/website/entity-pages.md
// (#homepage), decided in decisions/business-positioning/2026-10-20-career-arc-as-public-proof.md.
// Each section answers one buyer question, in the order they ask it.

export const metadata = {
  description: entityDescription,
  alternates: { canonical: "/" },
}

const fitFor = [
  "You have customers, a team and at least one senior hire (a COO, Head of Ops, GM or functional head) who was meant to take decisions off you.",
  "Your team still waits for your yes on calls you already handed off.",
  "You take a week off and things slow down.",
  "You've started to wonder whether you hired the wrong person.",
  "Or you're about to make that hire and want to know what it has to take off your plate before it starts.",
]

const fitNotFor = [
  "You want someone to confirm the hire is underperforming without looking at the setup around them.",
  "You want an interim COO, or someone to manage your team for you.",
]

const beforeYouDecide = [
  { href: "/essays/what-happens-in-a-diagnostic", title: "What happens during a Founder Bottleneck Diagnostic?" },
  { href: "/essays/hired-the-task-not-the-problem", title: "I hired someone. Why is the problem still on my desk?" },
  { href: "/essays/not-always-the-founder", title: "How do I know you won't just tell me I'm the bottleneck?" },
  {
    href: "/essays/coach-consultant-diagnostician",
    title: "Founder coach vs. consultant vs. diagnostician: which one do you actually need?",
  },
]

const sectionClass = "py-24 md:py-32 px-6 md:px-12 lg:px-24"
const headingClass = "text-2xl font-semibold text-earth-dark"
const bodyClass = "text-xl leading-relaxed font-normal"
const textLinkClass = "inline-flex items-center text-earth-accent hover:underline"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <StructuredData />
      <Navigation />

      <main className="flex-1">
        {/* 1. Hero: is this about me? */}
        <AnimatedSection className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24 pt-24 lg:pt-0">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-sm uppercase tracking-widest text-earth-muted">Founder Bottleneck Diagnostician</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  You hired senior leaders to own the decisions.{" "}
                  <span className="text-earth-accent">They still come back to you.</span>
                </h1>
                <p className="text-lg md:text-xl text-earth-dark max-w-xl font-normal">
                  I'm Trung Nguyen. I work with founder-led companies at exactly this point. I find out why the
                  decisions route back to you, whether it's the person, the role or a setup nobody changed when
                  they arrived. Then we move them to the people you hired to own them.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
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
                  <Link href="/about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                    Who is Trung Nguyen? →
                  </Link>
                </div>
                <p className="text-sm text-earth-muted max-w-xl">
                  Before this: one of two people on Contentful's security team, then infrastructure lead at Workpath.
                </p>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative w-full max-w-[390px] mx-auto rounded-lg overflow-hidden border border-earth-light/30">
                  <div className="relative w-full aspect-square">
                    <Image src="./me_portrait.jpeg" alt="Portrait of Trung Nguyen" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2. Fit: this is for you if / not for you if */}
        <AnimatedSection id="fit" className={`${sectionClass} bg-earth-light`}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className={headingClass}>This is for you if</h2>
              <ul className="space-y-4 text-lg font-normal list-disc pl-6">
                {fitFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className={headingClass}>Not for you if</h2>
              <ul className="space-y-4 text-lg font-normal list-disc pl-6">
                {fitNotFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>
                  You don't have a team yet.{" "}
                  <Link href="/founder-diagnostic" className="text-earth-accent hover:underline">
                    Start with the diagnostic on its own.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Mechanism: a stage, not a character flaw */}
        <AnimatedSection id="why-it-happens" className={sectionClass}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className={headingClass}>It's a stage, not a character flaw</h2>
            <div className="space-y-8">
              <p className={bodyClass}>
                Larry Greiner described it in Harvard Business Review in 1972. Hiring managers solves the first
                growth crisis, the one where everything depends on the founder. It starts the next one when
                authority doesn't actually move.
              </p>
              <p className={bodyClass}>
                The approval paths, the habits and the Slack threads still lead to you. So you suspect the hire, and
                the hire learns to wait.
              </p>
              <p className={bodyClass}>
                Sometimes it is the person. Often it's the role, the team's habits or an approval path nobody
                redesigned. Until someone finds out which, you keep deciding things you already pay someone else to
                decide.
              </p>
              <p className={bodyClass}>
                Replacing the hire costs a search and months with the seat empty. If the setup was the problem, the
                next hire walks into the same one.
              </p>
              <Link href="/essays/hired-the-task-not-the-problem" className={textLinkClass}>
                I hired someone. Why is the problem still on my desk?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Why me: the three chairs. Claims limited to the Public facts table in TrungOPS
            decisions/business-positioning/2026-10-20-career-arc-as-public-proof.md. Older roles stay unnamed. */}
        <AnimatedSection id="why-me" className={`${sectionClass} bg-earth-light`}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className={`${headingClass} mb-6`}>I've sat in all three chairs</h2>
              <p className="text-lg text-earth-muted mb-12 max-w-md">
                The founder who holds everything, the person everything routes through, and the hired leader who's
                meant to take it over.
              </p>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-earth-light/30">
                <Image src="./workshop.jpg" alt="Trung Nguyen with a group of founders" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-earth-accent">The founder's chair</h3>
                <p className={bodyClass}>
                  Years ago I ran a small IT consultancy. I said yes to everything, did all of it myself, burned out
                  and lost the clients.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-earth-accent">The chair everything routes through</h3>
                <p className={bodyClass}>
                  At a media group's digital unit, every resource request went through corporate IT and took six
                  months. We moved development off that path, and the same requests took a week.
                </p>
                <p className={bodyClass}>
                  At Contentful I was one of two people on the security team while sales took off. Every customer's
                  security questionnaire landed on us. More effort didn't fix it. A rule about what reaches the team
                  did: pre-sales answered the standard questions first.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-earth-accent">The hired leader's chair</h3>
                <p className={bodyClass}>
                  At Workpath I led infrastructure. In 2022 a peer review named me as the person the application
                  depended on. A year later the team ran without me, and a small platform team carried about six
                  product teams shipping at the same time. I was given context and goals and left to run it, which
                  is what you hired your leader for.
                </p>
              </div>
              <p className={bodyClass}>
                Since 2025 I've run these diagnostics with founders in SaaS, legal tech, IT services, sports tech and
                e-commerce. The complaints differ. The way decisions route back to the founder repeats.
              </p>
              <Link href="/about#background" className={textLinkClass}>
                More about my background
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Proof: one founder, one hired leader. Alex: cleared first name (TrungOPS
            testimonials/wall-of-love.md); German original is the citable source. The hired-leader quote is
            from a public post by the engineer himself; it stays unattributed until he confirms naming. */}
        <AnimatedSection id="proof" className={sectionClass}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className={headingClass}>From both sides of the table</h2>
            <div className="space-y-12">
              <article itemScope itemType="https://schema.org/Review" className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-earth-muted">A founder, before</p>
                <blockquote itemProp="reviewBody" className={`${bodyClass} space-y-4`}>
                  <p>
                    "Endless chaos from too many projects with the wrong people, paired with my inability to let go.
                    Often whole workdays lost to paralysis."
                  </p>
                  <p>"The investment in clarity is a key to focus, focus is the key to success."</p>
                </blockquote>
                <footer className="text-earth-muted">
                  <cite itemProp="author" className="not-italic font-normal text-earth-dark">
                    Alex
                  </cite>
                  , founder of an IT services company, client across two engagements (translated from German)
                </footer>
              </article>
              <article className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-earth-muted">A leader I hired</p>
                <blockquote className={bodyClass}>
                  "I am deeply thankful for Trung Nguyen's trust in my potential and the chance to prove myself."
                </blockquote>
                <footer className="text-earth-muted">An engineer I hired at Workpath, writing about it years later</footer>
              </article>
              <Link href="/case-studies" className={textLinkClass}>
                Read the case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* 6. The path: diagnostic, then The Handoff (buyer-facing name of the Founder Dependency Reset;
            price, guarantee and partner kickoff are never published here) */}
        <AnimatedSection id="how-it-works" className={`${sectionClass} bg-earth-light`}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className={headingClass}>How it works</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-earth-accent">1. Founder Bottleneck Diagnostic</h3>
                <p className={bodyClass}>
                  90 minutes, €750, book and pay directly. We find why the decisions route back to you. You leave
                  with a written diagnosis and the first change to make. It works on its own.
                </p>
                <Link href="/founder-diagnostic" className={textLinkClass}>
                  See the diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-earth-accent">2. The Handoff</h3>
                <p className="text-xl leading-relaxed font-medium">30 days to get decisions off your desk and onto your COO's.</p>
                <p className={bodyClass}>
                  When the answer is to move decisions, we move them and check that they stay moved. Before we
                  start, you or your hired leader log every decision that reaches you for a week. Then: the
                  diagnostic, a redesign session with your hired leader in the room, 30 days of running under the
                  change, and a verify session that compares the count to where you started.
                </p>
                <p className="text-lg text-earth-muted">Scoped and priced per company after the diagnostic.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 7. Before you decide: bottom-of-funnel reading */}
        <AnimatedSection id="before-you-decide" className={sectionClass}>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className={headingClass}>Before you decide</h2>
            <ul className="space-y-6">
              {beforeYouDecide.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xl font-normal text-earth-dark hover:text-earth-accent transition-colors">
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* 8. CTA — keeps id="contact" so existing /#contact links still land here */}
        <AnimatedSection id="contact" className={`${sectionClass} bg-earth-light`}>
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              If this is your company, start with the diagnostic.
            </h2>
            <p className={bodyClass}>
              90 minutes, €750, book and pay directly. Or message me on{" "}
              <a
                href="https://www.linkedin.com/in/ctn1991/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-accent hover:underline"
              >
                LinkedIn
              </a>{" "}
              with the word "diagnostic" and one line on what keeps coming back to you.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link href="/founder-diagnostic">
                <Button className="bg-earth-accent hover:bg-earth-green text-white rounded-none px-8 py-6">
                  Book the diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/d/partner-one-pager" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                Referring a founder? Here's the one-pager →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <SiteFooter />
    </div>
  )
}
