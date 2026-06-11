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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=block"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
