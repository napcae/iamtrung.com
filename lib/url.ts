// Appends query parameters to a URL, keeping any it already has.
// Used for attribution: Stripe payment links read client_reference_id, the
// Tally quiz stores ?source= in its hidden "source" field.
export function withParams(url: string, params: Record<string, string>) {
  const u = new URL(url)
  for (const [key, value] of Object.entries(params)) u.searchParams.set(key, value)
  return u.toString()
}
