import type { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import { getDocument, getDocumentSlugs, formatUpdated } from "@/lib/documents"

// Unlisted branded documents (handouts, one-pagers). Not in the nav or
// sitemap, noindex — these are forwarded person to person, not marketing.
export const dynamicParams = false

export function generateStaticParams() {
  return getDocumentSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const doc = getDocument((await params).slug)
  return {
    title: `${doc.title} · Trung Nguyen`,
    description: doc.description,
    robots: { index: false, follow: false },
  }
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const doc = getDocument((await params).slug)
  const updated = formatUpdated(doc.updated)

  return (
    <main className="min-h-screen bg-earth-background print:bg-white">
      <article className="mx-auto max-w-2xl px-6 py-16 md:py-24 print:max-w-none print:px-[14mm] print:py-0">
        <header className="mb-12 print:mb-3">
          {doc.label && (
            <p className="mb-6 text-sm uppercase tracking-wide text-earth-muted print:mb-1 print:text-[8.5pt]">
              {doc.label}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl text-earth-dark print:text-[23pt]">{doc.title}</h1>
          <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-earth-sand pb-6 print:mt-2 print:pb-2">
            {updated && (
              <p className="text-sm text-earth-muted print:text-[8.5pt]">Last updated {updated}</p>
            )}
            <a
              href={`/d/${doc.slug}.pdf`}
              className="border border-earth-accent px-4 py-2 text-sm text-earth-accent transition-colors hover:bg-earth-accent/10 print:hidden"
            >
              Download PDF
            </a>
          </div>
        </header>

        <div className="branded-doc">
          <ReactMarkdown>{doc.content}</ReactMarkdown>
          {/* Print footer flows inside the columns so it can't orphan onto a new page */}
          <p className="mt-3 hidden border-t border-earth-sand pt-1.5 text-[8pt] text-earth-muted print:block">
            Live version: iamtrung.com/d/{doc.slug}
          </p>
        </div>

        <footer className="mt-16 border-t border-earth-sand pt-6 text-sm text-earth-muted print:hidden">
          <p>Trung Nguyen · iamtrung.com</p>
        </footer>
      </article>
    </main>
  )
}
