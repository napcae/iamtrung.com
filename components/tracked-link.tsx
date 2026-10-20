'use client'

import type { AnchorHTMLAttributes } from 'react'

// An external link that also sends a Swetrix custom event on click, so CTA
// clicks are countable per placement (Swetrix dashboard -> Custom events).
// Event names: letters, numbers and underscores only.
type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
}

export function TrackedLink({ event, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        window.swetrix?.track?.({ ev: event })
        onClick?.(e)
      }}
    />
  )
}
