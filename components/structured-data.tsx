import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Trung Nguyen",
    url: "https://trungnguyen.com",
    image: "https://trungnguyen.com/trung-nguyen.jpg",
    sameAs: [
      "https://twitter.com/trungnguyen",
      "https://www.linkedin.com/in/ctn1991/",
      "https://github.com/trungnguyen",
    ],
    jobTitle: "Founder Coach & Technical Advisor",
    worksFor: {
      "@type": "Organization",
      name: "The Uncomfort Zone",
    },
    description:
      "Empowering founders to build resilient systems and teams that transform industries while staying true to their purpose.",
    knowsAbout: [
      "Technical Leadership",
      "Scaling Startups",
      "Engineering Management",
      "Resilient Systems",
      "Founder Coaching",
    ],
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
