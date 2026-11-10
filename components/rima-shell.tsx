'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUp, ChevronDown, Menu, X } from 'lucide-react'
import { PagePhotoFeature } from '@/components/photo-feature'
import { CookieConsent, CookiePreferencesButton } from '@/components/cookie-consent'
import { SiteSearch } from '@/components/site-search'
import { LanguageToggle } from '@/components/language-toggle'
import { LanguageProvider, LocalizedTree, useLanguage, useTranslate } from '@/lib/language'
import { SiteAssistantWidget } from '@/components/site-assistant'
import { publishedContactDetails } from '@/lib/rima-branch-directory'

const logo = '/rimalogo.png'
const socialLinks = [
  { label: 'TikTok', href: 'https://tiktok.com/@officialrimamfb' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1CCWjY4cDU/' },
  { label: 'Instagram', href: 'https://www.instagram.com/official_rimamfb' },
  { label: 'X', href: 'https://x.com/officialRimamfb' },
] as const
const matchesPath = (pathname: string, href: string) => {
  const targetPath = href.split('?')[0]
  return pathname === targetPath || pathname.startsWith(`${targetPath}/`)
}

const navGroups = [
  {
    label: 'About',
    items: [
      { label: 'Our Story', href: '/our-story', description: 'Learn about Rima and its community focus.' },
      { label: 'Board of Directors', href: '/leadership?tab=board-of-directors', description: 'Meet Rima’s board and read approved biographies.' },
      { label: 'Management Team', href: '/leadership?tab=management-team', description: 'Meet Rima’s management and read approved biographies.' },
      { label: 'Gallery', href: '/gallery', description: 'Browse supplied Rima-branded concept imagery.' },
    ],
  },
  {
    label: 'Banking',
    items: [
      { label: 'Personal Banking', href: '/personal-banking', description: 'Personal accounts and savings guidance.' },
      { label: 'Business Banking', href: '/business-banking', description: 'Information for businesses and groups.' },
      { label: 'Fees & Limits', href: '/fees-and-limits', description: 'Review charges and account terms.' },
    ],
  },
  {
    label: 'Digital',
    items: [
      { label: 'The Rima App', href: '/mobile-banking', description: 'Mobile banking information and release updates.' },
      { label: 'Products', href: '/products', description: 'Explore Rima product and service categories.' },
      { label: 'Learning Hub', href: '/learn', description: 'Explore practical bilingual guides to everyday banking.' },
      { label: 'Security', href: '/security', description: 'Protect your account and recognise scams.' },
    ],
  },
  {
    label: 'Support',
    items: [
      { label: 'Help Centre', href: '/support', description: 'Find guidance for common customer concerns.' },
      { label: 'FAQs', href: '/faq', description: 'Read answers to frequently asked questions.' },
      { label: 'Complaints', href: '/complaints', description: 'Review complaint guidance and next steps.' },
      { label: 'Contact', href: '/contact', description: 'View current customer support information.' },
    ],
  },
]

export function RimaHeader() {
  const pathname = usePathname()
  const t = useTranslate()
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [pinnedGroup, setPinnedGroup] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const desktopNavRef = useRef<HTMLElement>(null)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !desktopNavRef.current?.contains(event.target)) {
        setOpenGroup(null)
        setPinnedGroup(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setOpenGroup(null)
        setPinnedGroup(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <Link className="site-brand" href="/" aria-label="Rima Microfinance Bank home">
          <Image src={logo} alt="Rima Microfinance Bank logo" width={48} height={48} priority />
          <span>RIMA <b>MICROFINANCE BANK</b></span>
        </Link>
        <nav className="desktop-nav" aria-label={t('Primary navigation')} ref={desktopNavRef}>
          {navGroups.map((group) => {
            const menuId = `nav-menu-${group.label.toLowerCase()}`
            const isOpen = openGroup === group.label
            const isActive = group.items.some((item) => matchesPath(pathname, item.href))
            return (
              <div
                className="nav-menu"
                key={group.label}
                onMouseEnter={() => {
                  if (!pinnedGroup) setOpenGroup(group.label)
                }}
                onMouseLeave={() => {
                  if (!pinnedGroup) setOpenGroup(null)
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null) && !pinnedGroup) setOpenGroup(null)
                }}
              >
                <button
                  className={`nav-menu-trigger${isActive ? ' active' : ''}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => {
                    const nextGroup = isOpen && pinnedGroup === group.label ? null : group.label
                    setOpenGroup(nextGroup)
                    setPinnedGroup(nextGroup)
                  }}
                >
                  {t(group.label)}<ChevronDown aria-hidden="true" />
                </button>
                {isOpen && (
                  <div className="nav-menu-panel" id={menuId}>
                    {group.items.map((item) => (
                      <Link
                        href={item.href}
                        key={item.href}
                        aria-current={matchesPath(pathname, item.href) ? 'page' : undefined}
                        onClick={() => setOpenGroup(null)}
                      >
                        <strong>{t(item.label)}</strong>
                        <small>{t(item.description)}</small>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <SiteSearch />
        <LanguageToggle />
        <Link className="rima-button header-cta" href="/mobile-banking#download">{t('Get the app')}</Link>
        <button
          className="menu-trigger"
          type="button"
          aria-label={t(open ? 'Close menu' : 'Open menu')}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <>
          <button className="mobile-menu-backdrop" style={{ zIndex: 40 }} type="button" aria-label={t('Close navigation menu')} onClick={() => setOpen(false)} />
          <div
            className="mobile-menu-panel"
            style={{
              position: 'fixed', inset: '92px auto auto 50%', transform: 'translateX(-50%)',
              width: 'min(380px, calc(100vw - 32px))', maxHeight: 'calc(100dvh - 128px)',
              overflowY: 'auto', padding: 12, border: '1px solid rgba(255,255,255,.22)',
              borderRadius: 18, background: 'linear-gradient(145deg, rgba(35,67,49,.9), rgba(4,25,14,.86))',
              backdropFilter: 'blur(24px) saturate(1.4)', boxShadow: '0 22px 64px rgba(0,0,0,.42), inset 0 1px rgba(255,255,255,.2)',
              zIndex: 60, animation: 'mobile-menu-fade-in .18s ease-out both',
            }}
          >
            <nav className="mobile-nav-groups" aria-label={t('Mobile navigation')}>
              {navGroups.map((group) => (
                <details className="mobile-nav-group" key={group.label}>
                  <summary>{t(group.label)}</summary>
                  {group.items.map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      aria-current={matchesPath(pathname, item.href) ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                </details>
              ))}
              <Link className="rima-button" style={{ width: '100%', marginTop: 6 }} href="/mobile-banking#download">{t('Get the app')}</Link>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export function RimaFooter() {
  const t = useTranslate()
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="site-brand" href="/">
            <Image src={logo} alt="Rima Microfinance Bank logo" width={48} height={48} />
            <span>RIMA <b>MICROFINANCE BANK</b></span>
          </Link>
          <p>RIMA MFB - Made For Us, By Us</p>
          <div className="footer-contact-details">
            <strong>{t('Contact Rima')}</strong>
            <a href={publishedContactDetails.phoneHref}>{publishedContactDetails.phoneLabel}</a>
            <a href={publishedContactDetails.emailHref}>{publishedContactDetails.email}</a>
            <a href={publishedContactDetails.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {publishedContactDetails.whatsappLabel}</a>
            <span>{publishedContactDetails.headOffice}</span>
          </div>
          <SocialLinks variant="footer" />
        </div>
        <div className="footer-links">
          <strong>{t('Support')}</strong>
          <Link href="/support">{t('Help Centre')}</Link>
          <Link href="/faq">{t('FAQs')}</Link>
          <Link href="/contact">{t('Contact')}</Link>
          <Link href="/complaints">{t('Complaints')}</Link>
          <Link href="/accessibility">{t('Accessibility')}</Link>
        </div>
        <div className="footer-links">
          <strong>{t('Policies')}</strong>
          <Link href="/privacy">{t('Privacy Policy')}</Link>
          <Link href="/terms">{t('Terms & Conditions')}</Link>
          <Link href="/account-deletion">{t('Account & Data Deletion')}</Link>
          <Link href="/cookies">{t('Cookie Policy')}</Link>
          <CookiePreferencesButton />
        </div>
      </div>
      <div className="regulatory-strip">{t('Regulatory information')}</div>
      <div className="footer-bottom">
        <div className="footer-bottom-meta">
          <span>© 2026 RIMA Microfinance Bank</span>
          <Link href="/complaints">{t('Complaints')}</Link>
        </div>
        <div className="footer-legal-identity">
          <strong>RIMA MICROFINANCE BANK</strong>
          <span>RC 235458</span>
        </div>
        <span className="footer-credit">
          Created by <a href="https://titantechng.vercel.app" target="_blank" rel="noreferrer">TITAN-TECH LTD</a>{' '}
          <a href="tel:07018583600">07018583600</a>
        </span>
      </div>
    </footer>
  )
}

export function SocialLinks({ variant }: { variant: 'footer' | 'about' }) {
  const t = useTranslate()
  return (
    <section className={`rima-social-links rima-social-links-${variant}`} aria-labelledby={`rima-social-heading-${variant}`}>
      <h2 id={`rima-social-heading-${variant}`}>{t('Follow Rima')}</h2>
      <div className="rima-social-links-list">
        {socialLinks.map(({ label, href }) => (
          <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={`${label} - ${t('Follow Rima')}`}>
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export function PageShell({ children, afterFeature }: { children: React.ReactNode; afterFeature?: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <>
      <RimaHeader />
      <main>
        <LocalizedTree>{children}</LocalizedTree>
        <PagePhotoFeature pathname={pathname} />
        {afterFeature && <LocalizedTree>{afterFeature}</LocalizedTree>}
      </main>
      <RimaFooter />
    </>
  )
}

export const assetUrls = { home: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_home_iphone-WzznfNQrnEgOwmkdHwdkhYo1mAdcFX.png', airtime: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_topup_airtime_iphone%20%281%29-yeU9L0hFYAoYWospe5SaWsQDAafan9.png', data: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_topup_data_iphone-ijZXNWXQZoTunKrW1R0T7hdtDpQYWw.png' }

export function PhoneMockup({ imageSrc, alt, caption, variant = 'gallery' }: { imageSrc: string; alt: string; caption?: string; variant?: 'hero'|'gallery'|'thumbnail' }) { const t = useTranslate(); return <figure className={`phone-mockup phone-${variant}`}><div className="phone-buttons" /><div className="phone-bezel"><div className="dynamic-island" /><div className="phone-screen" role="img" aria-label={t(alt)} style={{ backgroundImage: `url("${imageSrc}")` }} /></div>{caption && <figcaption>{t(caption)}</figcaption>}</figure> }

const regulatoryItems = [{ label: 'CENTRAL BANK OF NIGERIA', short: 'CBN', image: '/cbnlogo.png' }, { label: 'NIGERIA DEPOSIT INSURANCE CORPORATION', short: 'NDIC', image: '/ndiclogo.png' }, { label: 'RIMA MICROFINANCE BANK', short: 'RIMA', image: '/rimalogo.png' }] as const

export function RegulatoryCarousel({ logos = false }: { logos?: boolean }) { return <section className={`regulatory-carousel ${logos ? 'regulatory-carousel-logos' : ''}`} aria-label={logos ? 'Rima and regulatory institutions' : 'Rima and regulatory information'}><div className="regulatory-track">{[...regulatoryItems, ...regulatoryItems, ...regulatoryItems].map((item, index) => <div className="regulatory-item" key={`${item.short}-${index}`} aria-hidden={index >= regulatoryItems.length}><span className={`regulatory-logo regulatory-logo-${item.short.toLowerCase()}`}><Image src={item.image} alt={index < regulatoryItems.length ? item.label : ''} width={88} height={56} style={{ width: logos ? 72 : 52, height: logos ? 48 : 40, objectFit: 'contain' }} /></span><span>{logos ? item.short : item.label}</span>{logos && <small>{item.label}</small>}</div>)}</div></section> }

export function DownloadState() { const t = useTranslate(); return <div id="download" className="download-state"><strong>{t('App download links coming soon')}</strong><p>{t('The Rima MFB app is not yet available for public download. Official download links will be published here when it is released.')}</p></div> }

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const t = useTranslate()

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 320)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return <button className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`} type="button" aria-label={t('Back to top')} title={t('Back to top')} onClick={scrollToTop} tabIndex={visible ? 0 : -1}><ArrowUp aria-hidden="true" /></button>
}

export function Splash() { const [show, setShow] = useState(false); const t = useTranslate(); useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('rima-splash')) return; setShow(true); const timer = window.setTimeout(() => { sessionStorage.setItem('rima-splash','1'); setShow(false) }, 1500); return () => window.clearTimeout(timer) }, []); if (!show) return null; return <div className="splash" role="status" aria-label={t('Loading')}><Image src={logo} alt="" width={180} height={180} priority /><span className="sr-only">{t('Loading')}</span><div className="splash-progress" /></div> }

export function RimaLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider><div className="rima-app"><Splash />{children}<BackToTop /><CookieConsent /><SiteAssistantWidget /></div></LanguageProvider>
}
