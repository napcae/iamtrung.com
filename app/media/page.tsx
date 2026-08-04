import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SocialIcons } from "@/components/social-icons"
import { getArticles, formatDate } from "@/lib/articles"

export const metadata = {
  title: "Media appearances",
  description:
    "Podcast and video appearances by Trung Nguyen, Founder Bottleneck Diagnostician, with summaries and key questions answered.",
  alternates: { canonical: "/media" },
}

export default function MediaIndex() {
  const items = getArticles("media")
  return (
    <div className="flex min-h-screen flex-col bg-earth-background text-earth-dark">
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-36 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Media appearances
          </h1>
          <p className="text-lg text-earth-muted mb-16">
            Podcasts and interviews, with a written summary and key questions answered for each.
          </p>
          <ul className="space-y-12">
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/media/${item.slug}`} className="group block">
                  <h2 className="text-2xl font-semibold group-hover:text-earth-accent transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-earth-dark">{item.description}</p>
                  <p className="mt-2 text-sm text-earth-muted">
                    {item.hostName && item.podcastName
                      ? `With ${item.hostName} on ${item.podcastName} · `
                      : ""}
                    {formatDate(item.published)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="py-12 px-6 border-t border-earth-light/50">
        <div className="mx-auto max-w-2xl flex justify-between items-center">
          <p className="text-sm text-earth-muted">© {new Date().getFullYear()} Trung Nguyen</p>
          <SocialIcons />
        </div>
      </footer>
    </div>
  )
}
