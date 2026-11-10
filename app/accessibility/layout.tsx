import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Accessibility information for the RIMA Microfinance Bank website.',
}

export default function AccessibilityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
