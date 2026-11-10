import Link from 'next/link'
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CircleHelp,
  FileText,
  Headset,
  ShieldCheck,
  Smartphone,
  Wallet,
} from 'lucide-react'
import { useTranslate } from '@/lib/language'

const actions = [
  { title: 'Personal banking', detail: 'Explore account guidance', href: '/personal-banking', Icon: Wallet },
  { title: 'Business banking', detail: 'Find business account info', href: '/business-banking', Icon: Building2 },
  { title: 'Fees & limits', detail: 'Understand account terms', href: '/fees-and-limits', Icon: FileText },
  { title: 'The Rima app', detail: 'See release information', href: '/mobile-banking', Icon: Smartphone },
  { title: 'Frequently asked questions', detail: 'Find answers quickly', href: '/faq', Icon: CircleHelp },
  { title: 'Customer support', detail: 'Get help and guidance', href: '/support', Icon: Headset },
  { title: 'Make a complaint', detail: 'Review the reporting steps', href: '/complaints', Icon: BookOpen },
  { title: 'Stay safe', detail: 'Protect your account access', href: '/security', Icon: ShieldCheck },
]

export function QuickActions() {
  const t = useTranslate()
  return (
    <section className="quick-actions-section" aria-labelledby="quick-actions-title">
      <div className="quick-actions-heading">
        <div>
          <p className="rima-eyebrow">{t('RIMA / QUICK ACCESS')}</p>
          <h2 id="quick-actions-title">{t('Your next step,')} <span>{t('made simpler.')}</span></h2>
        </div>
        <p>{t('Choose a guide or service page. These links provide information and do not submit transactions or account applications.')}</p>
      </div>
      <div className="quick-actions-grid">
        {actions.map(({ title, detail, href, Icon }, index) => (
          <Link className="quick-action-card" href={href} key={title} style={{ '--action-index': index } as React.CSSProperties}>
            <span className="quick-action-icon"><Icon aria-hidden="true" /></span>
            <span className="quick-action-copy"><strong>{t(title)}</strong><small>{t(detail)}</small></span>
            <ArrowUpRight className="quick-action-arrow" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
