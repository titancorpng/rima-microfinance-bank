import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://titanfitnessapplaunch.vercel.app'),
  title: 'Titan Fitness | Train with intent.',
  description: 'Titan Fitness helps you train with structure, track meaningful progress, and build habits that last.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://titanfitnessapplaunch.vercel.app',
    siteName: 'Titan Fitness',
    title: 'Titan Fitness | Train with intent.',
    description: 'A focused training system for smarter workouts, consistent progress, and a stronger everyday life.',
    images: [
      {
        url: '/titanfitnesslogo.jpg',
        alt: 'Titan Fitness logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Fitness | Train with intent.',
    description: 'A focused training system for smarter workouts, consistent progress, and a stronger everyday life.',
    images: ['/titanfitnesslogo.jpg'],
  },
  icons: {
    icon: '/titanfitnesslogo.jpg',
    apple: '/titanfitnesslogo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090a08',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
