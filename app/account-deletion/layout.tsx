import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account & Data Deletion',
  description: 'How to request deletion of a RIMA app profile and personal data, and how this differs from closing a bank account.',
}

export default function AccountDeletionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
