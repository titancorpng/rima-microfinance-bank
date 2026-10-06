'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png'
const links = [['Home','/'],['Our Story','/our-story'],['Personal Banking','/personal-banking'],['Business Banking','/business-banking'],['The App','/mobile-banking'],['Fees & Limits','/fees-and-limits'],['Security','/security'],['Support','/support']]

export function RimaHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  return <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
    <Link className="site-brand" href="/" aria-label="Rima Microfinance Bank home"><Image src={logo} alt="Rima Microfinance Bank logo" width={48} height={48} priority /><span>RIMA <b>MICROFINANCE BANK</b></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link className={pathname === href ? 'active' : ''} href={href} key={href}>{label}</Link>)}</nav>
    <Link className="rima-button header-cta" href="/app#download">Get the app</Link>
    <button className="menu-trigger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <div className="mobile-menu"><nav aria-label="Mobile navigation">{links.map(([label, href], index) => <Link style={{ animationDelay: `${index * 60}ms` }} href={href} key={href}>{label}</Link>)}<Link className="rima-button" href="/app#download">Get the app</Link></nav></div>}
  </header>
}

export function RimaFooter() { return <footer className="site-footer"><div className="footer-grid"><div><Link className="site-brand" href="/"><Image src={logo} alt="Rima Microfinance Bank logo" width={48} height={48} /><span>RIMA <b>MICROFINANCE BANK</b></span></Link><p>Banking rooted in community. Built for your everyday life.</p></div><div className="footer-links"><strong>Explore</strong><Link href="/our-story">Our Story</Link><Link href="/personal-banking">Personal Banking</Link><Link href="/business-banking">Business Banking</Link><Link href="/mobile-banking">The App</Link><Link href="/fees-and-limits">Fees & Limits</Link><Link href="/security">Security</Link></div><div className="footer-links"><strong>Support</strong><Link href="/support">Support</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/account-deletion">Account & Data Deletion</Link></div></div><div className="regulatory-strip">Licensed by CBN · Insured by NDIC</div><div className="footer-bottom"><span>© 2026 Rima Microfinance Bank</span><span>Rima Microfinance Bank, RC 9357228</span><Link href="/support#complaints">Complaints</Link></div></footer> }

export function PageShell({ children }: { children: React.ReactNode }) { return <><RimaHeader /><main>{children}</main><RimaFooter /></> }

export const assetUrls = { home: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_home_iphone-WzznfNQrnEgOwmkdHwdkhYo1mAdcFX.png', airtime: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_topup_airtime_iphone%20%281%29-yeU9L0hFYAoYWospe5SaWsQDAafan9.png', data: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_topup_data_iphone-ijZXNWXQZoTunKrW1R0T7hdtDpQYWw.png' }

export function PhoneMockup({ imageSrc, alt, caption, variant = 'gallery' }: { imageSrc: string; alt: string; caption?: string; variant?: 'hero'|'gallery'|'thumbnail' }) { return <figure className={`phone-mockup phone-${variant}`}><div className="phone-buttons" /><div className="phone-bezel"><div className="dynamic-island" /><div className="phone-screen" role="img" aria-label={alt} style={{ backgroundImage: `url("${imageSrc}")` }} /></div>{caption && <figcaption>{caption}</figcaption>}</figure> }

export function DownloadState() { return <div id="download" className="download-state"><strong>App download links coming soon</strong><p>The Rima MFB app is not yet available for public download. Official download links will be published here when it is released.</p></div> }

export function Splash() { const [show, setShow] = useState(false); useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('rima-splash')) return; setShow(true); const timer = window.setTimeout(() => { sessionStorage.setItem('rima-splash','1'); setShow(false) }, 1500); return () => window.clearTimeout(timer) }, []); if (!show) return null; return <div className="splash" role="status" aria-label="Loading"><Image src={logo} alt="" width={180} height={180} priority /><span className="sr-only">Loading</span><div className="splash-progress" /></div> }

export function RimaLayout({ children }: { children: React.ReactNode }) { return <div className="rima-app"><Splash />{children}</div> }
