'use client'

import { PageShell } from '@/components/rima-shell'
import Link from 'next/link'

export default function TermsPage() {
	return <PageShell><article className="editorial-page legal-page">
		<p className="rima-eyebrow">WEBSITE TERMS &amp; CONDITIONS</p>
		<h1>Clear terms for <span>confidence.</span></h1>
		<p className="legal-date">Effective date: 6 October 2026 · Last updated: 7 October 2026</p>
		<p className="lead">These terms apply to your use of this informational website, operated in the name of Rima Microfinance Bank Limited (RC 235458). By using the website, you agree to these terms.</p>

		<section className="legal-section"><h2>1. Information, not an offer</h2>
			<p>Website content is general information. It is not an offer to open an account, a promise that a product or feature is available, financial advice, or a substitute for a product agreement. Account eligibility, required documents, rates, fees, limits, and service availability must be confirmed directly with the bank before you act.</p>
			<p>These website terms do not replace account-opening documents, account terms, product-specific disclosures, or any separate agreement between you and the bank.</p>
		</section>

		<section className="legal-section"><h2>2. Using the website safely</h2>
			<p>Use the website lawfully and do not attempt to disrupt, damage, probe, or gain unauthorised access to the site or its systems. Do not rely on this website for time-critical account instructions or transaction confirmation.</p>
			<p>Never disclose your password, PIN, one-time passcode, or full account credentials in response to a message or link. Verify banking instructions through a channel you already know to be official.</p>
			<p>RIMA is an automated customer-care assistant that provides general answers based on public website information. It cannot access or change your account, verify your identity, process a transaction or complaint, contact the bank, or provide financial advice. AI-generated answers may be inaccurate or incomplete; check current product terms and use a bank contact channel you have independently verified before acting.</p>
		</section>

		<section className="legal-section"><h2>3. Accuracy and availability</h2>
			<p>We take reasonable care with website content, but information may be incomplete, delayed, or changed without notice. We do not guarantee uninterrupted availability or that every page is error-free. Check final product terms and any transaction disclosure supplied by the bank before proceeding.</p>
			<p>Links to third-party services are provided for convenience. The third party's own terms and privacy notice apply to those services.</p>
		</section>

		<section className="legal-section"><h2>4. Intellectual property</h2>
			<p>Website text, design, and marks belong to Rima or their respective owners unless stated otherwise. You may view and share links to the site for personal, lawful use. Do not reproduce or commercially use protected material without permission.</p>
		</section>

		<section className="legal-section"><h2>5. Liability and applicable law</h2>
			<p>Nothing in these terms excludes a right or liability that cannot lawfully be excluded. To the extent permitted by Nigerian law, Rima is not responsible for indirect loss arising from use of this informational website or inability to access it. These terms are governed by the laws of the Federal Republic of Nigeria, subject to applicable consumer protections.</p>
		</section>

		<section className="legal-section"><h2>6. Contact and privacy</h2>
			<p>This website does not currently provide a working support form or verified support contact address. See <Link href="/support">Support &amp; Complaints</Link> for the current status. Information handled by this website is described in the <Link href="/privacy">Privacy Policy</Link>.</p>
		</section>
	</article></PageShell>
}
