import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore Rima-branded imagery centred on community, local enterprise and modern banking.',
}

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
