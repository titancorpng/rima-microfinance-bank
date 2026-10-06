import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rimabank.ng'),
  title: 'Rima Microfinance Bank | Banking rooted in community.',
  description: 'Rima Microfinance Bank helps you train with structure, track meaningful progress, and build habits that last.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://rimabank.ng',
    siteName: 'Rima Microfinance Bank',
    title: 'Rima Microfinance Bank | Banking rooted in community.',
    description: 'A focused training system for smarter workouts, consistent progress, and a stronger everyday life.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png',
        alt: 'Rima Microfinance Bank logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rima Microfinance Bank | Banking rooted in community.',
    description: 'A focused training system for smarter workouts, consistent progress, and a stronger everyday life.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png'],
  },
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#062B1A',
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
