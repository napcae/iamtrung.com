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

Current price: **$299** (flat, locked May 18 2026 — per `TrungOPS/offers/diagnostic.md`).
Check `TrungOPS/offers/diagnostic.md` before setting any price.
Do not use prices from the rendered page or `gh-pages`.

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
