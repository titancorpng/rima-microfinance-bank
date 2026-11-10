'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { DownloadState, PageShell, PhoneMockup, RegulatoryCarousel } from '@/components/rima-shell'
import { PhotoFeature } from '@/components/photo-feature'
import { HomeMotion } from '@/components/home-motion'
import { HomeHeroCarousel } from '@/components/home-hero-carousel'
import { HomeHeroHeadline } from '@/components/home-hero-headline'
import { QuickActions } from '@/components/quick-actions'

export default function HomePage() {
	return <PageShell>
		<HomeMotion>
			<>
				<section className="home-hero">
					<HomeHeroCarousel />
					<div className="home-hero-copy">
						<p className="rima-eyebrow" data-home-eyebrow><span className="rima-dot" /> RIMA MICROFINANCE BANK / COMMUNITY BANKING</p>
						<HomeHeroHeadline />
						<p className="lead">From our roots in Sokoto, we help individuals, families and small businesses save, manage money and build stronger livelihoods.</p>
						<div className="hero-actions">
							<Link className="rima-button" href="/app">Explore the app <ArrowUpRight /></Link>
							<Link className="rima-button rima-button-secondary" href="/support">Contact Rima <ArrowUpRight /></Link>
							<a className="rima-button home-open-account-button" href="https://rimapay.vercel.app" target="_blank" rel="noopener noreferrer">
								<span>Open an account <ArrowUpRight aria-hidden="true" /></span>
							</a>
						</div>
						<div className="home-hero-note" data-home-note>
							<span>MADE FOR US, BY US</span>
						</div>
					</div>
				</section>
				<section className="home-app-showcase" aria-labelledby="home-app-showcase-title">
					<div className="home-app-showcase-copy">
						<p className="rima-eyebrow">RIMA APP / A FIRST LOOK</p>
						<h2 id="home-app-showcase-title">A closer look at <span>what’s next.</span></h2>
						<p>
							Explore a visual preview of the Rima app concept. The app is being prepared and is
							not yet available for public download; official release information will be shared here.
						</p>
						<Image
							className="home-app-store-badge"
							src="/appstorebuttons.png"
							alt="Google Play and Apple App Store"
							width={2170}
							height={725}
							sizes="(max-width: 780px) 100vw, 420px"
						/>
						<Link className="home-app-showcase-link" href="/mobile-banking">
							Explore the app page <ArrowUpRight aria-hidden="true" />
						</Link>
					</div>
					<div className="home-app-showcase-visual">
						<div className="app-phone-stage home-app-showcase-phones" aria-label="Illustrative Rima app screen previews">
							<div className="app-phone-orbit" aria-hidden="true" />
							<PhoneMockup
								imageSrc="/heroapp.jpg"
								alt="Illustrative Rima app home screen concept"
								caption="APP CONCEPT / HOME"
								variant="hero"
							/>
							<PhoneMockup
								imageSrc="/1_topup_data_iphone.png"
								alt="Illustrative Rima app data screen concept"
								caption="APP CONCEPT / SERVICES"
								variant="thumbnail"
							/>
						</div>
					</div>
				</section>
				<QuickActions />
				<RegulatoryCarousel logos />
				<section className="content-section home-services">
					<div className="home-services-heading" data-home-reveal>
						<p className="rima-eyebrow">OUR SERVICES / YOUR NEXT STEP</p>
						<h2>Practical banking for <span>real life.</span></h2>
						<p>Explore the support that fits where you are today, with our team ready to help you understand the options.</p>
					</div>
					<ol className="home-service-list">
						<li data-home-reveal>
							<span className="home-service-number">01</span>
							<div className="home-service-copy">
								<p className="rima-eyebrow">PERSONAL BANKING</p>
								<h3>Save for what matters.</h3>
								<p>Ask our team about available savings accounts and the terms that apply to you.</p>
							</div>
							<Link className="home-service-link" href="/personal-banking">Explore personal banking <ArrowUpRight /></Link>
						</li>
						<li data-home-reveal>
							<span className="home-service-number">02</span>
							<div className="home-service-copy">
								<p className="rima-eyebrow">BUSINESS BANKING</p>
								<h3>Support the work you do.</h3>
								<p>Speak with us about an account that fits your business and documentation needs.</p>
							</div>
							<Link className="home-service-link" href="/business-banking">Explore business banking <ArrowUpRight /></Link>
						</li>
						<li data-home-reveal>
							<span className="home-service-number">03</span>
							<div className="home-service-copy">
								<p className="rima-eyebrow">EVERYDAY ACCESS</p>
								<h3>Stay close to your account.</h3>
								<p>Use available digital services to manage your account and review transactions.</p>
							</div>
							<Link className="home-service-link" href="/mobile-banking">Explore digital access <ArrowUpRight /></Link>
						</li>
					</ol>
				</section>
				<div className="home-photo-feature" data-home-reveal>
					<PhotoFeature
						image="/rimahero1.jpg"
						alt="Rima Microfinance Bank branch exterior with customers arriving"
						eyebrow="ROOTED IN SOKOTO / OPEN TO WHAT'S NEXT"
						title="Banking that belongs to the community."
						description="We bring local understanding and practical financial services together to support households, traders and the small businesses that keep communities moving."
						href="/our-story"
						linkLabel="Learn about Rima"
						imageSide="left"
					/>
				</div>
				<div className="home-photo-feature" data-home-reveal>
					<PhotoFeature
						image="/image3.jpg"
						alt="Rima staff welcoming customers in a branch built around the bank's community identity"
						eyebrow="MADE BY US, FOR US"
						title="Personal service. Local understanding."
						description="From the first question to the next step, our aim is to make banking feel clear, considerate and connected to the people it serves."
						href="/support"
						linkLabel="Meet our support options"
					/>
				</div>
				<section className="app-promo home-app-promo" data-home-reveal>
					<div className="home-app-panel">
						<div className="home-app-copy">
							<p className="rima-eyebrow">RIMA MFB APP / COMING SOON</p>
							<h2>A more connected way to bank.</h2>
							<p className="lead">We’re preparing a new digital chapter for everyday banking. Official download links will be published here when the app is released.</p>
							<DownloadState />
						</div>
						<div className="home-app-mark" aria-hidden="true">
							<span>RIMA MFB</span>
							<strong>Everyday<br />starts here.</strong>
							<i>01 / DIGITAL BANKING</i>
						</div>
					</div>
				</section>
			</>
		</HomeMotion>
	</PageShell>
}
