import Link from "next/link"
import { SocialIcons } from "@/components/social-icons"

// One footer for every page. This used to be copy-pasted JSX in ten files,
// which drifted exactly as you'd expect: /media and /privacy lost their links
// to the essay cluster, and five pages lost the link to the diagnostic. Adding
// a page or a section now means nothing here changes, and nothing gets missed.
//
// `variant` is layout only, not content — the link set is identical either way,
// so a reader lands in the same place from any page.
//   wide   — full-bleed marketing pages (home, about, diagnostic, /d/ pages)
//   narrow — the max-w-2xl reading column (essays, case studies, media)

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder-diagnostic", label: "Diagnostic" },
  { href: "/essays", label: "Essays" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/essays/what-happens-in-a-diagnostic", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
]

const linkClass = "text-sm text-earth-muted hover:text-earth-dark transition-colors"

export function SiteFooter({ variant = "wide" }: { variant?: "wide" | "narrow" }) {
  const links = LINKS.map((link) => (
    <Link key={link.href} href={link.href} className={linkClass}>
      {link.label}
    </Link>
  ))

  if (variant === "narrow") {
    return (
      <footer className="py-12 px-6 border-t border-earth-light/50">
        <div className="mx-auto max-w-2xl flex flex-col gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-3">{links}</nav>
          <div className="flex justify-between items-center gap-6">
            <p className="text-sm text-earth-muted">© {new Date().getFullYear()} Trung Nguyen</p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-earth-light/50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-earth-muted">
            © {new Date().getFullYear()} Trung Nguyen. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">{links}</nav>
        </div>
        <div className="mt-8 flex justify-end">
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
