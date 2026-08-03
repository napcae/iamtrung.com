import type { Metadata } from "next"
import { ArticlePage } from "@/components/article-page"
import { getArticle, getArticleSlugs } from "@/lib/articles"

export const dynamicParams = false

export function generateStaticParams() {
  return getArticleSlugs("essays").map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle("essays", slug)
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/essays/${slug}` },
  }
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticlePage kind="essays" slug={slug} />
}
