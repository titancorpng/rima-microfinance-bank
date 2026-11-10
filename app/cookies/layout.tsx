import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie and browser-storage information for the RIMA Microfinance Bank website.',
}

export default function CookiePolicyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
