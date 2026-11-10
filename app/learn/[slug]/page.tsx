import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LearningArticlePage } from '@/components/learning-pages'
import { PageShell } from '@/components/rima-shell'
import { getLearningArticle, learningArticles } from '@/lib/learning-articles'

type LearningArticleRouteProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return learningArticles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: LearningArticleRouteProps): Promise<Metadata> {
  const { slug } = await params
  const article = getLearningArticle(slug)
  if (!article) return { title: 'Learning guide' }

  return {
    title: article.title.en,
    description: article.summary.en,
  }
}

export default async function LearningArticleRoute({ params }: LearningArticleRouteProps) {
  const { slug } = await params
  const article = getLearningArticle(slug)
  if (!article) notFound()

  return <PageShell><LearningArticlePage article={article} /></PageShell>
}
