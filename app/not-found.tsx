import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"

// Static export writes this to out/404.html. GitHub Pages serves that file
// with a real HTTP 404 status for any unmatched path (custom-domain default
// behavior), so the only thing this file controls is the body agents and
// humans land on. Keep the recovery links plain and crawlable — no
// client-only state gates them.
export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />

      <main className="flex-1">
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <Link
              href="/"
              className="inline-flex items-center text-earth-muted hover:text-earth-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              404 — this page doesn&apos;t exist
            </h1>

            <p className="text-xl leading-relaxed font-normal">
              Nothing lives at this address. It was never published, it moved, or the URL has a typo.
              Here&apos;s where to look next:
            </p>

            <ul className="space-y-3 text-lg font-normal list-disc pl-6">
              <li>
                <Link href="/" className="text-earth-accent hover:underline">
                  Home
                </Link>{" "}
                — overview and entry point
              </li>
              <li>
                <Link href="/about" className="text-earth-accent hover:underline">
                  About
                </Link>{" "}
                — who Trung Nguyen is and where to verify his work
              </li>
              <li>
                <Link href="/founder-diagnostic" className="text-earth-accent hover:underline">
                  Founder Bottleneck Diagnostic
                </Link>{" "}
                — the 90-minute session this site exists to explain
              </li>
              <li>
                <Link href="/essays" className="text-earth-accent hover:underline">
                  Essays
                </Link>{" "}
                and{" "}
                <Link href="/case-studies" className="text-earth-accent hover:underline">
                  case studies
                </Link>{" "}
                — direct answers and proof
              </li>
              <li>
                <a href="/sitemap.xml" className="text-earth-accent hover:underline">
                  sitemap.xml
                </a>{" "}
                — every indexed URL on this site
              </li>
              <li>
                <a href="/llms.txt" className="text-earth-accent hover:underline">
                  llms.txt
                </a>{" "}
                — a machine-readable index for AI agents, with a page-by-page summary
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
