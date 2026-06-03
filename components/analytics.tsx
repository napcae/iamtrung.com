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
      <Script
        id="ms-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","x11527g676");`,
        }}
      />
    </>
  )
}
