'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslate } from '@/lib/language'
import { siteKnowledge } from '@/lib/site-assistant-knowledge'
import { productGroups } from '@/components/products-page'
import { learningArticles } from '@/lib/learning-articles'

type SearchEntry = {
  title: string
  description: string
  href: string
  keywords: string
}

const searchEntries: SearchEntry[] = [
  { title: 'Home', description: 'RIMA Microfinance Bank and everyday community banking.', href: '/', keywords: 'home start rima sokoto community' },
  { title: 'Our Story', description: 'Learn about Rima’s roots, mission, vision and values.', href: '/our-story', keywords: 'about history mission vision values community' },
  { title: 'Learning Hub', description: 'Practical bilingual guides to everyday banking, saving and safer money decisions.', href: '/learn', keywords: 'learn learning education articles BVN Murabaha NDIC USSD savings Qard Hasan business finance Hausa' },
  { title: 'Personal Banking', description: 'Personal accounts, savings and account-opening guidance.', href: '/personal-banking', keywords: 'individual savings account opening BVN NIN documents household' },
  { title: 'Business Banking', description: 'Banking enquiries for traders, businesses, cooperatives and groups.', href: '/business-banking', keywords: 'business trader SME small enterprise cooperative group account' },
  { title: 'The App', description: 'Mobile banking information and official release updates.', href: '/mobile-banking', keywords: 'app mobile digital phone download release online' },
  { title: 'Products', description: 'Explore accounts, Islamic finance, digital banking and payment services.', href: '/products', keywords: 'products services savings current account fixed deposit qard hasan murabaha micro SME USSD app POS agent bill payments collections' },
  { title: 'Fees & Limits', description: 'Information about charges, account limits and product terms.', href: '/fees-and-limits', keywords: 'fees charges price cost limits transaction balance' },
  { title: 'Security', description: 'Protect your account and recognize suspicious activity.', href: '/security', keywords: 'fraud scam safety password PIN OTP security suspicious' },
  { title: 'Support', description: 'Guidance for support, account access and customer concerns.', href: '/support', keywords: 'help support contact customer service enquiry' },
  { title: 'FAQs', description: 'Answers about accounts, payments, the app and security.', href: '/faq', keywords: 'frequently asked questions answers' },
  { title: 'Complaints', description: 'How to prepare and report a service complaint.', href: '/complaints', keywords: 'complaint report transaction pending debit dispute issue' },
  { title: 'Gallery', description: 'Browse supplied Rima-branded concept imagery.', href: '/gallery', keywords: 'photos images gallery branch community merchant visual' },
  { title: 'Board of Directors', description: 'Read professional profiles of Rima directors.', href: '/leadership?tab=board-of-directors', keywords: 'leadership board directors profiles governance people' },
  { title: 'Management Team', description: 'Find Rima management team profiles.', href: '/leadership?tab=management-team', keywords: 'leadership management executive team profiles' },
  { title: 'Privacy Policy', description: 'How website and app information is handled.', href: '/privacy', keywords: 'privacy data personal information policy' },
  { title: 'Cookie Policy', description: 'Browser storage and privacy preferences.', href: '/cookies', keywords: 'cookies storage consent privacy settings analytics' },
  { title: 'Account & Data Deletion', description: 'Information about account and personal-data deletion requests.', href: '/account-deletion', keywords: 'delete account data remove personal information' },
  { title: 'Terms & Conditions', description: 'Website terms and information about banking product terms.', href: '/terms', keywords: 'terms conditions agreement legal' },
  { title: 'Accessibility', description: 'Accessibility information and assistance.', href: '/accessibility', keywords: 'accessibility assistance disability' },
  { title: 'How do I open an account?', description: 'Review account requirements and verification steps.', href: '/faq#account-opening', keywords: 'open opening account savings BVN NIN identification documents' },
  { title: 'What should I do if a payment is pending?', description: 'Check the transaction status and keep your reference.', href: '/faq#pending-payment', keywords: 'pending transfer payment debit transaction reference delayed' },
  { title: 'Are loans or cards available through the app?', description: 'See current public information about app features.', href: '/faq#loans-and-cards', keywords: 'loan loans credit advance card POS USSD app availability' },
  { title: 'How can I protect my account?', description: 'Keep passwords, PINs and one-time codes private.', href: '/faq#account-security', keywords: 'protect safety fraud password PIN OTP scam' },
  ...siteKnowledge.map((document) => ({
    title: document.title,
    description: document.content.slice(0, 190),
    href: document.href,
    keywords: `${document.content} ${(document.aliases ?? []).join(' ')}`,
  })),
  ...learningArticles.map((article) => ({
    title: article.title.en,
    description: article.summary.en,
    href: `/learn/${article.slug}`,
    keywords: [
      article.title.ha,
      article.summary.ha,
      ...article.aliases,
      ...article.sections.flatMap((section) => [section.heading.en, section.body.en, section.heading.ha, section.body.ha]),
    ].join(' '),
  })),
  ...productGroups.map((product) => ({
    title: product.title,
    description: product.summary,
    href: `/products#product-${product.number}`,
    keywords: [
      product.hausa,
      product.group,
      product.summaryHausa,
      ...product.details,
      ...product.detailsHausa,
    ].join(' '),
  })),
]

function normalize(value: string) {
  return value.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').trim()
}

export function SiteSearch() {
  const pathname = usePathname()
  const t = useTranslate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const openSearch = () => {
    if (!open) {
      returnFocusRef.current = triggerRef.current
        ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null)
    }
    setOpen(true)
  }

  useEffect(() => {
    const onGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        openSearch()
      }
    }

    window.addEventListener('keydown', onGlobalKeyDown)
    return () => window.removeEventListener('keydown', onGlobalKeyDown)
  }, [])

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    if (!terms.length) return searchEntries.slice(0, 6)

    const seenHrefs = new Set<string>()

    return searchEntries
      .map((entry) => {
        const haystack = normalize(`${t(entry.title)} ${t(entry.description)} ${entry.keywords}`)
        const matched = terms.filter((term) => haystack.includes(term)).length
        return { entry, matched }
      })
      .filter(({ matched }) => matched === terms.length)
      .sort((a, b) => b.matched - a.matched)
      .filter(({ entry }) => {
        if (seenHrefs.has(entry.href)) return false
        seenHrefs.add(entry.href)
        return true
      })
      .slice(0, 16)
      .map(({ entry }) => entry)
  }, [query, t])

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
      } else if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), a[href]',
        ))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      const returnFocus = returnFocusRef.current ?? previouslyFocused
      returnFocus?.focus()
      returnFocusRef.current = null
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setQuery('')
  }, [pathname])

  return (
    <>
      <button
        className="site-search-trigger"
        aria-label={t('Search this site')}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        ref={triggerRef}
        onClick={openSearch}
      >
        <Search aria-hidden="true" />
        <span>{t('Search')}</span>
        <kbd>Ctrl K</kbd>
      </button>

      {open && typeof document !== 'undefined' && createPortal(
        <div
          className="site-search-backdrop"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <section
            className="site-search-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
            ref={dialogRef}
          >
            <div className="site-search-heading">
              <div>
                <p className="rima-eyebrow">{t('RIMA / SITE SEARCH')}</p>
                <h2 id="site-search-title">{t('What can we help you find?')}</h2>
              </div>
              <button className="site-search-close" type="button" aria-label={t('Close search')} onClick={() => setOpen(false)}>
                <X aria-hidden="true" />
              </button>
            </div>
            <label className="site-search-input-wrap">
              <Search aria-hidden="true" />
              <span className="sr-only">{t('Search Rima website')}</span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t('Try “open an account” or “fees”')}
                autoComplete="off"
              />
              <kbd>ESC</kbd>
            </label>
            <div className="site-search-results" aria-live="polite">
              <p className="site-search-result-label">{query.trim() ? `${results.length} ${t('results')}` : t('Popular pages')}</p>
              {results.length ? (
                results.map((result) => (
                  <Link className="site-search-result" href={result.href} key={result.href} onClick={() => setOpen(false)}>
                    <span><strong>{t(result.title)}</strong><small>{t(result.description)}</small></span>
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                ))
              ) : (
                <p className="site-search-empty">{t('No matching pages found. Try a shorter search or browse the navigation links.')}</p>
              )}
            </div>
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}
