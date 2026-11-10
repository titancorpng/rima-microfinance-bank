'use client'

import Link from 'next/link'
import { ArrowUpRight, BadgeHelp } from 'lucide-react'
import { PageShell } from '@/components/rima-shell'
import { FAQAccordion } from '@/components/faq-accordion'
import { siteFaqs } from '@/lib/site-assistant-knowledge'

export default function FAQPage() {
  return (
    <PageShell>
      <article className="editorial-page faq-page">
        <header className="support-hero">
          <div className="support-hero-copy">
            <p className="rima-eyebrow">RIMA / FREQUENTLY ASKED QUESTIONS</p>
            <h1>Helpful answers for <span>everyday banking.</span></h1>
            <p className="lead">
              This page brings together the most common questions customers ask about opening an account,
              using the app, security and support. Where a service is not yet live, the answer reflects
              the bank’s current public guidance and official process.
            </p>
          </div>
          <aside className="support-status" aria-label="FAQ status">
            <span className="support-status-mark"><BadgeHelp aria-hidden="true" /></span>
            <p className="rima-eyebrow">PUBLIC INFO</p>
            <strong>Verified channels only</strong>
            <p>Use only official Rima channels and links published on this site. Keep your PIN, password and OTP private.</p>
          </aside>
        </header>

        <div className="support-jump-links" aria-label="FAQ links">
          <Link href="/support">Support centre <ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/security">Security guidance <ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/complaints">Complaints <ArrowUpRight aria-hidden="true" /></Link>
        </div>

        <section className="support-section">
          <div className="support-section-heading">
            <p className="rima-eyebrow">01 / COMMON QUESTIONS</p>
            <h2>Frequently asked <span>questions.</span></h2>
          </div>

          <FAQAccordion items={siteFaqs} />
        </section>

        <section className="support-detail-section">
          <div>
            <p className="rima-eyebrow">02 / STILL NEED HELP?</p>
            <h2>Use a verified channel.</h2>
          </div>
          <div>
            <p>
              If your issue involves a suspected unauthorised transaction, a payment in doubt or a
              complaint about your account, contact Rima through the verified support and complaints
              channels already published by the bank.
            </p>
            <p>
              This site is informational and should be used alongside the official support information
              the bank has approved for release.
            </p>
            <Link className="rima-button" href="/support">
              Contact support <ArrowUpRight />
            </Link>
          </div>
        </section>

        <p className="support-related-links">
          Related: <Link href="/fees-and-limits">Fees &amp; Limits</Link>{' '}
          <Link href="/privacy">Privacy Policy</Link>{' '}
          <Link href="/terms">Website Terms</Link>
        </p>
      </article>
    </PageShell>
  )
}
