'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'

// An external link that also sends a Swetrix custom event on click, so CTA
// clicks are countable per placement (Swetrix dashboard -> Custom events).
// Event names: letters, numbers and underscores only.
//
// carryParam: the query parameter on href that records where the click came
// from (client_reference_id on Stripe links, source on the quiz). If the
// visitor arrived with utm_source / utm_campaign (a quiz result, a partner
// link), those are appended to it at click time, e.g. lp_hero__quiz_fallback,
// so a paid checkout can be traced back past this page.
type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  carryParam?: string
}

function arrivalTag() {
  const q = new URLSearchParams(window.location.search)
  return [q.get('utm_source'), q.get('utm_campaign')]
    .filter(Boolean)
    .join('_')
    .replace(/[^A-Za-z0-9_-]/g, '')
    .slice(0, 60)
}

export function TrackedLink({ event, carryParam, onClick, ...props }: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const tag = arrivalTag()
    if (carryParam && tag && props.href) {
      const url = new URL(props.href)
      const base = url.searchParams.get(carryParam)
      url.searchParams.set(carryParam, base ? `${base}__${tag}` : tag)
      e.currentTarget.href = url.toString()
    }
    window.swetrix?.track?.({ ev: event, meta: tag ? { from: tag } : undefined })
    onClick?.(e)
  }
  return <a {...props} onClick={handleClick} />
}
