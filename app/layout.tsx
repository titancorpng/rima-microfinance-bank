import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import './experience.css'
import './site-enhancements.css'
import './site-assistant.css'
import { RimaLayout } from '@/components/rima-shell'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

const slogan = 'Made For Us, By Us'
const siteTitle = `RIMA MFB - ${slogan}`
const siteDescription = [
	`${siteTitle}. Community banking in Sokoto, Nigeria.`,
	'Explore personal and business banking, products, digital services and customer support.',
].join(' ')

export const metadata: Metadata = {
	metadataBase: new URL('https://rimamfb.vercel.app'),
	applicationName: siteTitle,
	title: {
		default: siteTitle,
		template: `%s | ${siteTitle}`,
	},
	description: siteDescription,
	keywords: [
		'RIMA MFB',
		'Made For Us, By Us',
		'microfinance bank',
		'community banking',
		'Sokoto',
		'Nigeria',
	],
	alternates: { canonical: '/' },
	icons: { icon: '/rimalogo.png' },
	authors: [{ name: 'RIMA MFB' }],
	creator: 'RIMA MFB',
	publisher: 'RIMA MFB',
	other: { 'brand-slogan': slogan },
	openGraph: {
		type: 'website',
		locale: 'en_NG',
		siteName: siteTitle,
		url: '/',
		title: siteTitle,
		description: siteDescription,
		images: [{
			url: '/RIMAMFB_mainlogo.jpg',
			width: 637,
			height: 629,
			alt: siteTitle,
		}],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		images: ['/RIMAMFB_mainlogo.jpg'],
	},
}

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: '#04190E',
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
			<body>
				<RimaLayout>{children}</RimaLayout>
			</body>
		</html>
	)
}
