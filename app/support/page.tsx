'use client'

import Link from 'next/link'
import { AlertTriangle, ArrowUpRight, FileText, Fingerprint, Headset, ShieldCheck } from 'lucide-react'
import { PageShell } from '@/components/rima-shell'
import { SiteAssistantSupportEntry } from '@/components/site-assistant'
import { BranchDirectory } from '@/components/branch-directory'
import { publishedContactDetails } from '@/lib/rima-branch-directory'

export default function SupportPage() {
	return <PageShell><article className="editorial-page support-page">
		<header className="support-hero">
			<div className="support-hero-copy">
				<p className="rima-eyebrow">RIMA / CUSTOMER CARE</p>
				<h1>Support for your <span>everyday banking.</span></h1>
				<p className="lead">RIMA is here to help with everyday banking questions, including account access, payments, the app, fees and online safety. For personal account changes or urgent help, contact the bank through a support channel you have independently verified.</p>
			</div>
			<aside className="support-status" aria-label="RIMA customer-care assistant">
				<span className="support-status-mark"><Headset aria-hidden="true" /></span>
				<p className="rima-eyebrow">RIMA / CUSTOMER CARE</p>
				<strong>Everyday banking, made easier.</strong>
				<p>Ask RIMA about accounts, payments, app access, fees and security. Keep passwords, PINs and other private details to yourself.</p>
			</aside>
		</header>
		<SiteAssistantSupportEntry />
		<nav className="support-jump-links" aria-label="Support topics">
			<a href="#help-options">Help topics <ArrowUpRight aria-hidden="true" /></a>
			<a href="#complaints">Complaints <ArrowUpRight aria-hidden="true" /></a>
			<a href="#fraud">Fraud concerns <ArrowUpRight aria-hidden="true" /></a>
			<a href="#branches">Branches <ArrowUpRight aria-hidden="true" /></a>
		</nav>
		<section id="help-options" className="support-section">
			<div className="support-section-heading"><p className="rima-eyebrow">01 / HOW CAN WE HELP?</p><h2>Choose a <span>next step.</span></h2></div>
			<div className="support-grid">
				<article className="support-option"><span className="support-option-icon"><Headset aria-hidden="true" /></span><p className="rima-eyebrow">GENERAL ENQUIRIES</p><h3>Talk to the bank</h3><p>Call {publishedContactDetails.phoneLabel} or email {publishedContactDetails.email} for general enquiries.</p><a href="#branches">Find contact details and branches <ArrowUpRight aria-hidden="true" /></a></article>
				<article className="support-option"><span className="support-option-icon"><FileText aria-hidden="true" /></span><p className="rima-eyebrow">SERVICE COMPLAINTS</p><h3>Raise a concern</h3><p>RIMA can help you understand the next steps. Keep your transaction reference and a brief record of what happened, then contact the bank through a channel you have independently verified.</p><a href="#complaints">Complaint guidance <ArrowUpRight aria-hidden="true" /></a></article>
				<article className="support-option"><span className="support-option-icon"><ShieldCheck aria-hidden="true" /></span><p className="rima-eyebrow">ACCOUNT SECURITY</p><h3>Protect your access</h3><p>Never share your PIN, password, one-time passcode, or full account credentials, including with someone claiming to work for Rima.</p><Link href="/security">Security guidance <ArrowUpRight aria-hidden="true" /></Link></article>
				<article className="support-option"><span className="support-option-icon"><Fingerprint aria-hidden="true" /></span><p className="rima-eyebrow">PERSONAL DATA</p><h3>Manage your data</h3><p>The public deletion page explains what is not yet available and what must be in place before app release.</p><Link href="/account-deletion">Account &amp; data deletion <ArrowUpRight aria-hidden="true" /></Link></article>
			</div>
		</section>
		<section id="complaints" className="support-detail-section">
			<div><p className="rima-eyebrow">02 / COMPLAINTS</p><h2>A clear record helps.</h2></div>
			<div><p>Note the date, amount, transaction reference, and what happened. Share only the minimum information needed through a bank channel you have independently verified. Keep your complaint reference and any response.</p><p>RIMA can explain the published guidance and help you prepare the details to discuss with the bank. Formal complaints and account-specific action should go through a verified bank channel.</p></div>
		</section>
		<section id="fraud" className="support-fraud-section">
			<AlertTriangle aria-hidden="true" />
			<div><p className="rima-eyebrow">URGENT FRAUD CONCERNS</p><h2>Act through a verified channel.</h2><p>The urgent fraud-reporting phone number and channel have not been confirmed for this site. If you suspect account takeover or an unauthorised transaction, use a bank contact already independently verified from an official document. This website is not an emergency reporting service.</p></div>
		</section>
		<BranchDirectory />
		<p className="support-related-links">Related: <Link href="/privacy">Privacy Policy</Link> <Link href="/terms">Website Terms</Link> <Link href="/cookies">Cookie Policy</Link></p>
	</article></PageShell>
}
