# iamtrung.com — Claude instructions

## Source of truth

The `napcae/TrungOPS` repo (formerly `napcae/li` — renamed) is the **single source of truth**
for all content decisions. Never use values from the live page, `gh-pages` branch, or memory —
always fetch from `TrungOPS` first.

| What | Where in `TrungOPS` |
|------|---------------------|
| Offer name | `offers/diagnostic.md` — heading line |
| Price | `offers/diagnostic.md` — Price field |
| ICP definitions (A + B) | `strategy/icp.md` |
| Positioning / voice | `strategy/positioning.md` |
| Testimonial permission | `testimonials/wall-of-love.md` / `case-studies.md` — `Permission:` line |

## Offer name

The official offer is **"Founder Bottleneck Diagnostic"** (short) /
**"90-Minute Execution Bottleneck Diagnostic"** (full).

"The Founder Verdict" is a **testimonials section label** on the page — it is NOT the offer name.
Do not use it as a page title, metadata title, or offer name.

## Pricing

**No price is published on the site.** Pricing is value-based, set in the conversation (Enns) —
the diagnostic page intentionally shows no number.

Internal anchor/floor is **$299** (per `TrungOPS/offers/diagnostic.md`) — never publish it on the
page, in metadata, or in copy. If a price ever needs to appear, check `TrungOPS/offers/diagnostic.md`
first and confirm before publishing.

## Git branches

- Active source: `main`
- Deployed output: `gh-pages` (auto-generated — never edit directly)
- `master` is stale and abandoned — never branch from it

All changes go on a feature branch from `main`, then PR to `main`.

## Testimonial publishing rule

Before naming anyone in a testimonial, check the `Permission:` line for that person in
`TrungOPS/testimonials/wall-of-love.md` or `testimonials/case-studies.md`.

- Permission says name cleared → safe to name (honor any caveats, e.g. "hold job-search references")
- Permission limited / anonymized → publish with role/stage only (e.g. "Founder, B2B SaaS")
- No `Permission:` line → treat as NO until confirmed

Also check the quote text itself for names or identifiable details (company name, metrics).

## Tech stack

- **Next.js 15** (static export — `output: 'export'`, output dir `./out`)
- **React 19**, TypeScript 5, Tailwind CSS 3, Radix UI
- **Package manager**: pnpm · **Node**: 18+
- Custom image loader at `/lib/image-loader.js` (required for static export)

## Commands

```
pnpm dev      # dev server → localhost:3000
pnpm build    # static export → ./out
pnpm lint
```

## Pages

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/founder-diagnostic` | `app/founder-diagnostic/page.tsx` |
| `/the-innernet` | `app/the-innernet/page.tsx` |
| `/procrastination-workshop` | `app/procrastination-workshop/page.tsx` |
| `/reconnect-vietnam` | `app/reconnect-vietnam/page.tsx` |

Root layout: `app/layout.tsx` — imports `<Analytics />` (Swetrix + MS Clarity).

## Analytics

Both in `components/analytics.tsx`:
- **Swetrix** — project ID `q7UGSyIUlJGO`, API `https://api.t.nettelbeckplatz.de/log`
- **MS Clarity** — project ID `x11527g676`

## Deployment

Push to `main` → GitHub Actions builds → publishes `./out` to `gh-pages`. Never edit `gh-pages` directly.
