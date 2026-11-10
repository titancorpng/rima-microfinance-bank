import type { Metadata } from 'next'
import { PageShell } from '@/components/rima-shell'
import { ProductsPage } from '@/components/products-page'

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Explore RIMA product and service categories, from savings and Islamic finance to digital banking and payments.',
}

export default function ProductsRoute() {
  return <PageShell><ProductsPage /></PageShell>
}
