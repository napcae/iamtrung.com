'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        src="https://swetrix.org/swetrix.js"
        defer
        strategy="afterInteractive"
      />
      <Script
        id="swetrix-init"
        strategy="afterInteractive"
      >
        {`
          document.addEventListener('DOMContentLoaded', function() {
            swetrix.init('q7UGSyIUlJGO', {
              apiURL: 'https://api.t.nettelbeckplatz.de/log',
            })
            swetrix.trackViews()
          })
        `}
      </Script>
      <noscript>
        <img
          src="https://api.t.nettelbeckplatz.de/log/noscript?pid=q7UGSyIUlJGO"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  )
}
