'use client'

import Link from 'next/link'
import { Activity, ArrowUpRight, BellRing, CheckCircle2, Clock3, Radio, Wrench } from 'lucide-react'
import { PageShell } from '@/components/rima-shell'

export default function ServiceUpdatesPage() {
  return <PageShell>
    <article className="editorial-page service-updates-page">
      <header className="service-updates-hero">
        <div>
          <p className="rima-eyebrow">RIMA / SERVICE INFORMATION</p>
          <h1>Service status, <span>clearly reported.</span></h1>
          <p className="lead">When Rima confirms maintenance or a service disruption, this page should explain what is affected, what customers may notice and when to expect another update. A live status feed is not connected yet, so current availability cannot be confirmed here.</p>
        </div>
        <aside className="service-feed-status" aria-label="Service status feed">
          <Radio aria-hidden="true" />
          <p className="rima-eyebrow">PUBLIC STATUS FEED</p>
          <strong>Live updates are not connected</strong>
          <span>This page does not currently receive verified service data. No outage or all-clear is being reported.</span>
        </aside>
      </header>
      <section className="service-updates-section">
        <div className="service-updates-section-heading">
          <p className="rima-eyebrow">01 / WHAT TO EXPECT</p>
          <h2>Useful details, <span>not vague alerts.</span></h2>
          <p>Each notice should identify the affected service and the customer impact, then be updated as the situation changes.</p>
        </div>
        <div className="service-updates-cards">
          <article className="service-update-card">
            <Activity aria-hidden="true" />
            <h3>Affected service</h3>
            <p>Which service is affected, the kind of issue, and what customers may be unable to do.</p>
          </article>
          <article className="service-update-card">
            <Clock3 aria-hidden="true" />
            <h3>Timing and progress</h3>
            <p>When the issue began or maintenance is planned, the latest confirmed progress, and when another update is due.</p>
          </article>
          <article className="service-update-card">
            <CheckCircle2 aria-hidden="true" />
            <h3>Resolution and next steps</h3>
            <p>When service is confirmed restored and any action customers should take afterwards.</p>
          </article>
        </div>
      </section>
      <section className="service-updates-sources">
        <div className="service-updates-section-heading">
          <p className="rima-eyebrow">02 / WHERE UPDATES COME FROM</p>
          <h2>Verified by the people <span>responsible for service.</span></h2>
          <p>“Live” means notices are published as an event is confirmed and its status changes. It does not mean this website can see a customer’s account or transactions.</p>
        </div>
        <div className="service-updates-source-list">
          <article>
            <Wrench aria-hidden="true" />
            <div><h3>Bank operations and technology teams</h3><p>Authorized staff confirm incidents, customer impact, planned maintenance and restoration before a notice is published.</p></div>
          </article>
          <article>
            <Activity aria-hidden="true" />
            <div><h3>Service monitoring, when connected</h3><p>Production health checks can flag issues with bank-operated website, app or API services. A monitor can raise an alert, but the bank must confirm its customer impact.</p></div>
          </article>
          <article>
            <BellRing aria-hidden="true" />
            <div><h3>Payment partners, when verified</h3><p>Third-party service notices should only be included when a provider reports an issue or Rima confirms that it affects a customer service.</p></div>
          </article>
        </div>
        <p className="service-updates-feed-note"><Radio aria-hidden="true" /> No monitoring integration or authorized publishing feed is connected to this page at present.</p>
      </section>
      <section className="service-updates-guidance">
        <span className="rima-eyebrow">NEED TO CHECK A SERVICE?</span>
        <p>If you are having trouble with a transaction or account, use a bank contact channel you have independently verified from official bank documents. Do not share your PIN, password or one-time passcode.</p>
        <div>
          <Link className="rima-button" href="/support">Support guidance <ArrowUpRight aria-hidden="true" /></Link>
          <Link className="service-updates-secondary" href="/faq">Read common questions <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </article>
  </PageShell>
}
