'use client'

import { PageShell } from '@/components/rima-shell'
import Link from 'next/link'

export default function PrivacyPage() {
	return <PageShell><article className="editorial-page legal-page">
		<p className="rima-eyebrow">PRIVACY POLICY</p>
		<h1>Your privacy, <span>respected.</span></h1>
		<p className="legal-date">Effective date: 6 October 2026 · Last updated: 7 October 2026</p>
		<p className="lead">This notice explains how Rima Microfinance Bank Limited (RC 235458) handles information when you visit this informational website. It does not describe information handled when you open or operate a bank account, visit a branch, or use a mobile banking app.</p>

		<section className="legal-section"><h2>What this website handles</h2>
			<p>This website does not provide a customer login, account-opening workflow, banking transaction service, or working contact or complaint form. Do not submit passwords, PINs, one-time passcodes, BVN or NIN details, identity documents, account numbers, or other sensitive information through this website.</p>
			<p>When your browser requests a page, the website infrastructure may process standard connection and security information such as your IP address, the requested page, time of request, browser and device details, and error or security events. The specific hosting log settings, retention period, and processing locations have not yet been confirmed by the bank.</p>
			<p>Some preview images are served from Vercel's public blob-storage domain. A request for an image sends ordinary connection metadata to that service. The bank must confirm the applicable provider terms, processing locations, and retention details before production launch.</p>
			<p>The website uses session storage to remember whether to show its short loading animation during the current browser session. It also stores your cookie and privacy preference in local storage. The site currently has no active advertising or analytics integration; an analytics preference does not itself activate tracking.</p>
		</section>

		<section className="legal-section"><h2>How information is used and shared</h2>
			<p>Technical information may be used to deliver pages, maintain the security and availability of the website, and diagnose errors. Website infrastructure providers may process it to provide those services. Information may also be disclosed where required by law or to protect legal rights and the security of users.</p>
			<p>This website does not collect BVN or NIN details, KYC documents, selfies, facial templates, biometric data, banking credentials, or transaction data. The website does not make decisions about bank accounts or provide financial advice.</p>
		</section>

		<section className="legal-section"><h2>RIMA customer-care assistant</h2>
			<p>When you send a question in the RIMA chat, this website processes it with the recent messages needed to answer and sends it over an encrypted connection to Hugging Face Inference Providers, which routes the request to DeepInfra to run the selected Gemma model. Relevant excerpts from public Rima website pages are included as reference information. Do not enter a password, PIN, OTP, BVN, NIN, account or card number, phone number, email address, identity document, transaction credential, or other personal or confidential banking information. RIMA provides general guidance from the published website; use a verified bank channel for personal account changes, transactions or formal complaints. RIMA does not authenticate customers or give financial advice. AI answers may be inaccurate and should be checked against current bank terms.</p>
			<p>Rima does not save assistant conversations in a chat-history database. Conversation history is kept in session storage for the current browser tab until you clear it or close the tab; it survives page refreshes and navigation within that tab. The server filters common credential, long-number and email patterns before forwarding a question to the model, but that filter is not comprehensive; do not rely on it as a substitute for withholding sensitive information.</p>
			<p>Hugging Face states that it does not store request or response bodies when routing Inference Provider requests and keeps debugging logs for up to 30 days. DeepInfra’s <a href="https://deepinfra.com/privacy" target="_blank" rel="noreferrer">published privacy policy</a> says submitted inference inputs and outputs are not stored, sold, or used for training without explicit consent. Each provider’s current terms and technical logging practices apply. The precise processing location, retention configuration, and contractual arrangements for this website deployment have not been independently verified. See the <a href="https://huggingface.co/docs/inference-providers/en/security" target="_blank" rel="noreferrer">Hugging Face Inference Providers security notice</a> and DeepInfra’s policy for provider details.</p>
		</section>

		<section className="legal-section"><h2>Retention and transfers</h2>
			<p>Technical logs are retained according to the settings of the hosting and image-service providers. Those settings, retention periods, and any processing outside Nigeria have not been verified for this site and must be confirmed before production launch. AI questions may be routed to processing outside Nigeria under the providers’ terms. No precise hosting retention period or storage country is represented here.</p>
		</section>

		<section className="legal-section"><h2>Your privacy rights</h2>
			<p>Rights under the Nigeria Data Protection Act 2023 may include access, correction, deletion, restriction, objection, and data portability, subject to applicable law. You may also complain to the Nigeria Data Protection Commission. This website currently has no privacy-request form or verified privacy contact address. Use only a bank contact channel independently verified from your existing bank documents or a confirmed branch; never send account credentials or one-time passcodes.</p>
			<p>For information about requesting deletion, see <Link href="/account-deletion">Account &amp; Data Deletion</Link>.</p>
			<p>For browser storage details, see the <Link href="/cookies">Cookie Policy</Link>.</p>
		</section>

		<section className="legal-section"><h2>Banking services and app</h2>
			<p>This notice applies only to this website. The Rima mobile app is not available for public download from this website. Before any app release or online banking onboarding, Rima must publish a separate, complete notice describing the actual data collected, KYC and biometric processing, service providers, storage locations, retention periods, and user choices.</p>
		</section>

		<section className="legal-section"><h2>Updates</h2>
			<p>We will update this page when website practices change. A substantive change will be reflected in the effective and last-updated dates at the top of this page.</p>
		</section>
	</article></PageShell>
}
