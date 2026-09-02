import type { Metadata } from "next"
import { ArticlePage } from "@/components/article-page"
import { getArticleMetadata, getArticleSlugs } from "@/lib/articles"

export const dynamicParams = false

export function generateStaticParams() {
  return getArticleSlugs("media").map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return getArticleMetadata("media", slug)
}

export default async function MediaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ArticlePage kind="media" slug={slug} />
}
