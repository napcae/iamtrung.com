import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/analytics'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'block',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Trung Nguyen – The Innernet & Founder Coach",
  description: "Founder coach, community builder, and creator of the Innernet. Helping founders find clarity, connection, and momentum.",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
