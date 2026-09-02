import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"

const description =
  "What data this site collects, why, and how to reach Trung Nguyen about it. Covers analytics (Swetrix, Microsoft Clarity), third-party booking via Cal.com, and direct email contact."

export const metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <Link
              href="/"
              className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Privacy Policy</h1>
            <p className="text-earth-muted">Effective August 26, 2026</p>

            <div className="space-y-6 text-lg leading-relaxed font-normal">
              <p>
                This site is run by Trung Nguyen, based in Berlin, Germany. This policy explains what
                data iamtrung.com collects when you visit, why, and what your options are. It applies
                to iamtrung.com and its subpages only — not to third-party sites this site links to,
                such as Cal.com, LinkedIn, or Substack.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Analytics</h2>
              <p>
                This site uses two analytics tools to understand which pages get read and where visitors
                come from:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li>
                  <strong>Swetrix</strong> — aggregated, privacy-oriented traffic analytics (page views,
                  referrer, country, device type). Swetrix does not use tracking cookies and does not
                  build cross-site profiles.
                </li>
                <li>
                  <strong>Microsoft Clarity</strong> — session recordings and heatmaps used to see how
                  the site is actually used (scrolling, clicks, rage-clicks). Clarity may set cookies and
                  collect masked session data; it does not collect the contents of form fields you type.
                </li>
              </ul>
              <p>
                Neither tool is used to sell data, run ad retargeting, or build a marketing profile of
                you. Analytics data is used only to improve this site.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Booking a call</h2>
              <p>
                Booking links on this site go to <strong>Cal.com</strong>, a third-party scheduling
                service. When you book a call, the name, email, and any notes you provide are handled
                under Cal.com&apos;s own privacy policy, not this one. Trung Nguyen receives your
                booking details to prepare for and hold the call, and keeps them only as long as needed
                for that engagement.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Contacting me directly</h2>
              <p>
                If you email{" "}
                <a href="mailto:mail@ctnguyen.net" className="text-earth-accent hover:underline">
                  mail@ctnguyen.net
                </a>
                , that message and your address are kept only for as long as needed to answer you and,
                if relevant, to maintain a record of the working relationship that follows. It is never
                sold, rented, or shared with third parties for their own marketing.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Cookies</h2>
              <p>
                This site does not use advertising or cross-site tracking cookies. Microsoft Clarity may
                set a small number of first-party cookies to distinguish sessions; you can block these in
                your browser without losing access to any page on this site.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Your rights</h2>
              <p>
                Under GDPR, you can ask for a copy of the data held about you, ask for it to be
                corrected or deleted, or object to how it&apos;s used. To do any of that, email{" "}
                <a href="mailto:mail@ctnguyen.net" className="text-earth-accent hover:underline">
                  mail@ctnguyen.net
                </a>
                . Requests are handled personally, usually within a few days.
              </p>

              <h2 className="text-2xl font-semibold pt-4">Changes</h2>
              <p>
                If this policy changes in a way that matters, the effective date above will change too.
                Material changes will be reflected here before they take effect.
              </p>
            </div>
          </div>
        </section>

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
                <Link href="/about" className="text-sm text-earth-muted hover:text-earth-dark transition-colors">
                  About
                </Link>
                <Link
                  href="/founder-diagnostic"
                  className="text-sm text-earth-muted hover:text-earth-dark transition-colors"
                >
                  Diagnostic
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
              </div>
            </div>

            <div className="mt-8 flex justify-center md:justify-end">
              <SocialIcons />
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
