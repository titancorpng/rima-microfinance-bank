import type { Metadata } from 'next'
import { PageShell } from '@/components/rima-shell'
import { LearningHubPage } from '@/components/learning-pages'

export const metadata: Metadata = {
  title: 'Learn',
  description: 'Practical bilingual guides to everyday banking, saving, Islamic finance, identity protection and small-business planning.',
}

export default function LearnPage() {
  return <PageShell><LearningHubPage /></PageShell>
}
