'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell, SocialLinks } from '@/components/rima-shell'
import { PhotoFeature } from '@/components/photo-feature'

export default function AboutPage() {
  return (
    <PageShell afterFeature={<div className="editorial-page about-social-outro"><SocialLinks variant="about" /></div>}>
      <article className="editorial-page">
        <p className="rima-eyebrow">ABOUT RIMA / COMMUNITY BANKING</p>
        <h1>Community banking with a <span>forward view.</span></h1>
        <p className="lead">
          Rima Microfinance Bank is a Nigerian microfinance bank with roots in Sokoto State.
          Established in 1993, we serve customers whose ambitions begin with everyday needs:
          saving for a family goal, managing business income and building a more stable livelihood.
        </p>

        <PhotoFeature
          image="/image1.jpg"
          alt="Rima MFB emblem on a deep green background"
          eyebrow="MADE BY US FOR US"
          title="A name with a community at its heart."
          description="The Rima identity reflects a belief in practical, community-rooted financial services."
          imageSide="left"
        />

        <section className="story-grid">
          <article className="info-card">
            <span className="card-index">01</span>
            <h3>Our mission</h3>
            <p>
              To make practical financial services more accessible to individuals and small businesses
              through responsible banking, clear communication and useful technology.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">02</span>
            <h3>Our vision</h3>
            <p>
              To be a trusted microfinance bank that connects community banking with the convenience of
              digital financial services.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">03</span>
            <h3>Who we serve</h3>
            <p>
              Individuals and households, traders and microenterprises, eligible salary earners, and
              properly documented businesses, cooperatives and groups, subject to approved products and
              account-opening requirements.
            </p>
          </article>
        </section>

        <section>
          <p className="rima-eyebrow">WHAT GUIDES US</p>
          <div className="story-grid">
            <article className="info-card">
              <span className="card-index">T</span>
              <h3>Trust</h3>
              <p>We explain our services clearly and handle customer concerns responsibly.</p>
            </article>
            <article className="info-card">
              <span className="card-index">I</span>
              <h3>Inclusion</h3>
              <p>We help customers understand their options and the requirements for using them.</p>
            </article>
            <article className="info-card">
              <span className="card-index">R</span>
              <h3>Responsibility</h3>
              <p>We apply identity verification, risk controls and applicable regulatory requirements.</p>
            </article>
            <article className="info-card">
              <span className="card-index">S</span>
              <h3>Service</h3>
              <p>We focus on useful products and accessible support.</p>
            </article>
          </div>
        </section>

        <section>
          <p className="rima-eyebrow">LEGAL & REGULATORY</p>
          <p>
            The exact legal entity name, registered address, current licence category and branch address
            must be verified against the bank’s official records before any public launch claim is made.
            Public information must match approved documentation and be kept current.
          </p>
          <p>
            Rima Microfinance Bank is expected to be subject to CBN regulation and NDIC membership where
            applicable, but the final wording and proof should be confirmed by the bank’s legal and
            compliance team before publication.
          </p>
        </section>

        <div className="editorial-cta">
          <strong>Rima Microfinance Bank. Rooted in community. Building with confidence.</strong>
          <Link className="rima-button" href="/personal-banking">
            Explore our services <ArrowUpRight />
          </Link>
        </div>
      </article>
    </PageShell>
  )
}
