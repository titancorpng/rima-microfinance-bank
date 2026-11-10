'use client'

import { PageShell } from '@/components/rima-shell'

export default function CookiePolicyPage() {
  return <PageShell><article className="editorial-page legal-page">
    <p className="rima-eyebrow">COOKIE POLICY</p>
    <h1>Simple, clear <span>browser storage.</span></h1>
    <p className="legal-date">Effective date: 6 October 2026 · Last updated: 6 October 2026</p>
    <p className="lead">We use limited browser storage for the site experience and to remember your privacy choice. Optional analytics and advertising tools are not currently active.</p>
    <section className="legal-section"><h2>Browser storage</h2>
      <p>The site uses session storage to avoid repeatedly showing its brief loading animation during the same browser session. It also stores your privacy preference in local storage so the notice can remember your choice. These browser-storage values are not cookies.</p>
      <p>Optional analytics and advertising tools are not currently active. If non-essential tracking is introduced, it must be reviewed and kept disabled until any required consent is obtained. Website hosting or security services may use strictly necessary cookies or similar storage depending on their production configuration; provider settings must be checked before launch. Some app-preview images are requested from Vercel’s public blob-storage domain and send standard connection metadata to that service.</p>
    </section>
    <section className="legal-section"><h2>Your choices</h2>
      <p>You can change your saved choice using the Cookie preferences control in the footer or clear browser storage using your browser settings. Blocking all storage may affect site behaviour. The analytics preference records your choice but does not activate analytics; no analytics provider is currently enabled on this website.</p>
    </section>
  </article></PageShell>
}
