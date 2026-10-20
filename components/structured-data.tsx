// Entity data — keep in sync with app/layout.tsx metadata and /about.
// Source of truth: TrungOPS strategy/positioning.md + strategy/seo.md.
// sameAs: only verified, live profiles (footer social links are the reference).

// Canonical entity descriptor — one copy, imported by app/layout.tsx, the homepage
// and /about. Source of truth: TrungOPS context/website/entity-pages.md.
export const entityDescription =
  "Trung Nguyen is a Founder Bottleneck Diagnostician. He works with founder-led companies that hired senior leaders and still see the important decisions route back to the founder, finding and naming why in a 90-minute diagnostic and then changing who owns those decisions."

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://iamtrung.com/#trung-nguyen",
  name: "Trung Nguyen",
  url: "https://iamtrung.com",
  image: "https://iamtrung.com/me_portrait.jpeg",
  jobTitle: "Founder Bottleneck Diagnostician",
  description: entityDescription,
  disambiguatingDescription:
    "This Trung Nguyen is a Vietnamese-German engineer turned Founder Bottleneck Diagnostician based in Ho Chi Minh City, Vietnam — not the Trung Nguyên Vietnamese coffee entrepreneur, and not any of the other people who share this name.",
  sameAs: [
    "https://www.linkedin.com/in/ctn1991/",
    "https://theuncomfortzone.substack.com",
    "https://www.instagram.com/trungmoves/",
    "https://github.com/napcae",
  ],
  knowsAbout: [
    "founder bottleneck diagnostics",
    "startup execution bottlenecks",
    "founder decision load",
    "organizational constraint diagnosis",
    "founder dependency",
    "founder community building",
    "angel investing",
  ],
  mainEntityOfPage: "https://iamtrung.com/about",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://iamtrung.com/#website",
  name: "Trung Nguyen",
  url: "https://iamtrung.com",
  publisher: { "@id": "https://iamtrung.com/#trung-nguyen" },
}

// Plain <script> tags (not next/script) so the JSON-LD is present in the
// static HTML for crawlers that don't execute JavaScript.
export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
