import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Updates',
  description: 'How RIMA service notices are verified, what a service update includes and where live status information comes from.',
}

export default function ServiceUpdatesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
