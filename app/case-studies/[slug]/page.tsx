import type { Metadata } from "next"
import { ArticlePage } from "@/components/article-page"
import { getArticle, getArticleSlugs } from "@/lib/articles"

export const dynamicParams = false

export function generateStaticParams() {
  return getArticleSlugs("case-studies").map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle("case-studies", slug)
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/case-studies/${slug}` },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticlePage kind="case-studies" slug={slug} />
}
