'use client'

import { Fingerprint } from 'lucide-react'
import { PageShell } from '@/components/rima-shell'

export default function AccountDeletionPage() {
	return <PageShell><article className="editorial-page support-page deletion-page">
		<header className="support-hero">
			<div className="support-hero-copy"><p className="rima-eyebrow">RIMA / YOUR DATA</p><h1>Account &amp; data <span>deletion.</span></h1><p className="lead">To request deletion of your RIMA app profile and associated personal data, open the app, go to Profile or Settings, and choose Delete Account. Follow the on-screen steps and wait for confirmation. A deletion request does not automatically close your bank account.</p></div>
			<aside className="support-status" aria-label="How to request account deletion"><span className="support-status-mark"><Fingerprint aria-hidden="true" /></span><p className="rima-eyebrow">SUBMIT IN THE APP</p><strong>Profile or Settings</strong><p>Choose Delete Account and follow the prompts. This website does not receive or process deletion requests.</p></aside>
		</header>
		<section className="support-section"><div className="support-section-heading"><p className="rima-eyebrow">01 / REQUEST DELETION</p><h2>What happens <span>next.</span></h2></div>
			<div className="deletion-steps"><article><span>01</span><h3>Submit in the app</h3><p>Open Profile or Settings, select Delete Account, and follow the prompts to send your request.</p></article><article><span>02</span><h3>Verification and review</h3><p>The bank may verify the request before processing it. Completion may take time; follow any instructions shown in the app.</p></article><article><span>03</span><h3>Receive confirmation</h3><p>Wait for confirmation that the request has been completed. Some records may need to be retained where required by law.</p></article></div>
		</section>
		<section className="support-detail-section"><div><p className="rima-eyebrow">ACCOUNT CLOSURE</p><h2>Deleting the app profile does not close your bank account.</h2></div><div><p>Use Rima's verified account-closure process if you want to close a bank account. A request to delete your app profile or personal data is separate. Some records may need to be retained for legal, regulatory, fraud-prevention, or dispute-resolution purposes.</p><p>This page provides guidance only. Submit your deletion request through the app and keep the confirmation for your records.</p></div></section>
	</article></PageShell>
}
