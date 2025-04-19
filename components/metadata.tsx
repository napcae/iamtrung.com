import Head from "next/head"

interface MetadataProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
}

export function Metadata({
  title = "Trung Nguyen | Building the Operating System of Change",
  description = "Empowering founders to build resilient systems and teams that transform industries while staying true to their purpose.",
  keywords = "founder coaching, technical advisory, leadership development, scaling startups, resilient systems",
  ogImage = "https://trungnguyen.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://trungnguyen.com",
}: MetadataProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
