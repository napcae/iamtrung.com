import Link from "next/link"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://twitter.com/trungnguyen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-clay transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      <Link
        href="https://linkedin.com/in/trungnguyen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-clay transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="https://github.com/trungnguyen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-clay transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:hello@trungnguyen.com"
        className="text-earth-muted hover:text-earth-clay transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  )
}
