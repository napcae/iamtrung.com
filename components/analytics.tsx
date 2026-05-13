'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        src="https://swetrix.org/swetrix.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.swetrix) {
            window.swetrix.init('q7UGSyIUlJGO', {
              apiURL: 'https://api.t.nettelbeckplatz.de/log',
            })
            window.swetrix.trackViews()
          }
        }}
      />
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
