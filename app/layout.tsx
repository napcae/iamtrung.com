import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/analytics'
import { entityDescription } from '@/components/structured-data'
import { defaultOgImage, homeOgDescription } from '@/lib/og'

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


export const metadata: Metadata = {
  metadataBase: new URL("https://iamtrung.com"),
  title: {
    default: "Trung Nguyen — Founder Bottleneck Diagnostician",
    template: "%s | Trung Nguyen",
  },
  description: entityDescription,
  // No og:url here: pages without their own openGraph must not preview as the homepage.
  openGraph: {
    type: "website",
    siteName: "Trung Nguyen",
    title: "Trung Nguyen — Founder Bottleneck Diagnostician",
    description: homeOgDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Nguyen — Founder Bottleneck Diagnostician",
    description: homeOgDescription,
    images: [defaultOgImage.url],
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
