import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/analytics'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
})

// Canonical entity descriptor — keep identical everywhere it appears
// (homepage, /about, structured data, external bios). Source of truth:
// TrungOPS strategy/positioning.md (#core-title) + strategy/seo.md.
const entityDescription =
  "Trung Nguyen is a Founder Bottleneck Diagnostician who runs 90-minute diagnostics for capable founders who are compensating for their blind spot instead of resolving it, finding and naming the structural constraint behind stalled decisions, execution and growth."

export const metadata: Metadata = {
  metadataBase: new URL("https://iamtrung.com"),
  title: {
    default: "Trung Nguyen — Founder Bottleneck Diagnostician",
    template: "%s | Trung Nguyen",
  },
  description: entityDescription,
  openGraph: {
    type: "website",
    url: "https://iamtrung.com",
    siteName: "Trung Nguyen",
    title: "Trung Nguyen — Founder Bottleneck Diagnostician",
    description: entityDescription,
    images: ["/me_portrait.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Nguyen — Founder Bottleneck Diagnostician",
    description: entityDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
