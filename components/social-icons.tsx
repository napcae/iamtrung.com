import Link from "next/link"
import { Instagram, Linkedin, Github, Mail } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://www.instagram.com/trung.berlin/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-accent transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ctn1991/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="https://github.com/napcae"
        target="_blank"
        rel="noopener noreferrer"
        className="text-earth-muted hover:text-earth-accent transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:mail@ctnguyen.net"
        className="text-earth-muted hover:text-earth-accent transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  )
}
