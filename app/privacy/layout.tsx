import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the RIMA Microfinance Bank website.',
}

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
