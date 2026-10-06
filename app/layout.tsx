import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { RimaLayout } from '@/components/rima-shell'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })
export const metadata: Metadata = { metadataBase: new URL('https://rimabank.ng'), title: 'Rima Microfinance Bank | Banking rooted in community.', description: 'Rima Microfinance Bank helps individuals, families and small businesses save, manage money and build stronger livelihoods.', alternates: { canonical: '/' }, icons: { icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png' } }
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#04190E', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${jakarta.variable}`}><body><RimaLayout>{children}</RimaLayout></body></html> }
