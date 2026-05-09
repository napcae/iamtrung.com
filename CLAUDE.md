# iamtrung.com — Claude instructions

## Source of truth

The `napcae/li` repo is the **single source of truth** for all content decisions.
Never use values from the live page, `gh-pages` branch, or memory — always fetch from `li` first.

| What | Where in `li` |
|------|---------------|
| Offer name | `offers/diagnostic.md` — heading line |
| Price | `offers/diagnostic.md` — Price field |
| ICP definitions (A + B) | `strategy/icp.md` |
| Positioning / voice | `strategy/positioning.md` |
| Testimonial permission | `testimonials/fragments.md` — `publish_name:` field |

## Offer name

The official offer is **"Founder Bottleneck Diagnostic"** (short) /
**"90-Minute Execution Bottleneck Diagnostic"** (full).

"The Founder Verdict" is a **testimonials section label** on the page — it is NOT the offer name.
Do not use it as a page title, metadata title, or offer name.

## Pricing

Current price: **€750**. Check `li/offers/diagnostic.md` before setting any price.
Do not use prices from the rendered page or `gh-pages`.

## Git branches

- Active source: `main`
- Deployed output: `gh-pages` (auto-generated — never edit directly)
- `master` is stale and abandoned — never branch from it

All changes go on a feature branch from `main`, then PR to `main`.

## Testimonial publishing rule

Before naming anyone in a testimonial, check `publish_name:` in `li/testimonials/fragments.md`.

- `publish_name: YES` → safe to name
- `publish_name: NO` → publish anonymously with role/stage only (e.g. "Founder, B2B SaaS")
- Field missing → treat as NO until confirmed

Also check the quote text itself for names or identifiable details (company name, metrics).
