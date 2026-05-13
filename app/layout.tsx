import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@/components/analytics'

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
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
