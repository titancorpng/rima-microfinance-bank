'use client'

import { Landmark, ShieldCheck, Sparkles } from 'lucide-react'

const regulatoryItems = [
  { label: 'LICENSED BY THE CENTRAL BANK OF NIGERIA', detail: 'Licensed financial institution', icon: Landmark },
  { label: 'ELIGIBLE DEPOSITS INSURED BY NDIC', detail: 'Your eligible deposits are protected', icon: ShieldCheck },
  { label: 'ESTABLISHED IN 1993', detail: 'Decades of community banking', icon: Sparkles },
]

const logoItems = [
  { name: 'CBN', label: 'Licensed by CBN', type: 'cbn' },
  { name: 'NDIC', label: 'Insured by NDIC', type: 'ndic' },
]

export function RegulatoryCarousels() {
  return <section className="regulatory-carousels" aria-label="Rima regulatory credentials">
    <div className="regulatory-marquee" aria-label="Regulatory credentials carousel">
      <div className="regulatory-track">
        {[...regulatoryItems, ...regulatoryItems].map((item, index) => { const Icon = item.icon; return <div className="regulatory-card" key={`${item.label}-${index}`} aria-hidden={index >= regulatoryItems.length}>
          <span className="regulatory-icon"><Icon aria-hidden="true" /></span><span><strong>{item.label}</strong><small>{item.detail}</small></span>
        </div> })}
      </div>
    </div>
    <div className="logo-marquee" aria-label="CBN and NDIC protection carousel">
      <div className="logo-track">
        {[...logoItems, ...logoItems].map((item, index) => <div className="logo-trust-card" key={`${item.name}-${index}`} aria-hidden={index >= logoItems.length}>
          <span className={`official-mark ${item.type}`} aria-hidden="true">{item.name}</span><strong>{item.label}</strong>
        </div>)}
      </div>
    </div>
  </section>
}

export function TrustStripFallback() { return <RegulatoryCarousels /> }

export default RegulatoryCarousels
