import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
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
        <script src="https://swetrix.org/swetrix.js" defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                swetrix.init('q7UGSyIUlJGO', {
                  apiURL: 'https://api.t.nettelbeckplatz.de/log',
                })
                swetrix.trackViews()
              })
            `,
          }}
        ></script>
        <noscript>
          <img
            src="https://api.t.nettelbeckplatz.de/log/noscript?pid=q7UGSyIUlJGO"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  )
}
