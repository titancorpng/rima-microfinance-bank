import type { Metadata } from 'next'
import { PageShell } from '@/components/rima-shell'
import { LeadershipDirectory } from '@/components/leadership-directory'

export const metadata: Metadata = {
  title: 'Board of Directors & Management',
  description: 'Meet the RIMA Microfinance Bank board and management team.',
}

type LeadershipPageProps = {
  searchParams: Promise<{ tab?: string }>
}

export default async function LeadershipPage({ searchParams }: LeadershipPageProps) {
  const { tab } = await searchParams
  const activeTab = tab === 'management-team' ? 'management-team' : 'board-of-directors'

  return (
    <PageShell>
      <LeadershipDirectory activeTab={activeTab} />
    </PageShell>
  )
}
