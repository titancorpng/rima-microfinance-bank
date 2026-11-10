import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Terms',
  description: 'Terms for using the RIMA Microfinance Bank website.',
}

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
