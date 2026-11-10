'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DownloadState, PageShell, PhoneMockup, assetUrls } from '@/components/rima-shell'
import { LocalizedTree, useTranslate } from '@/lib/language'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function ExperienceFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  const pageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const page = pageRef.current
    if (!page) return

    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-page-kicker]', { autoAlpha: 0, y: 12, duration: 0.45 })
        .from('[data-page-title]', { autoAlpha: 0, y: 26, duration: 0.7 }, '-=0.18')
        .from('[data-page-summary], [data-page-actions]', {
          autoAlpha: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.1,
        }, '-=0.3')

      if (page.matches('.personal-experience, .business-experience')) {
        gsap.to('.banking-story-hero .story-hero-image', {
          scale: 1.075,
          ease: 'none',
          scrollTrigger: {
            trigger: '.banking-story-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
      }

      gsap.utils.toArray<HTMLElement>('[data-experience-reveal]', page).forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 22,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            once: true,
          },
        })
      })
    })

    return () => media.revert()
  }, { scope: pageRef })

  return (
    <PageShell>
      <article ref={pageRef} className={`editorial-page financial-experience ${className}`}>
        <LocalizedTree>{children}</LocalizedTree>
      </article>
    </PageShell>
  )
}

const personalSteps = [
  {
    number: '01',
    title: 'Choose what fits',
    copy: 'Ask about savings accounts currently available for household needs, education, business plans or an emergency reserve.',
  },
  {
    number: '02',
    title: 'Review the terms',
    copy: 'Confirm eligibility, opening requirements, minimum balance, withdrawal conditions, applicable charges and account limits.',
  },
  {
    number: '03',
    title: 'Complete verification',
    copy: 'Provide the required personal details and identification, complete verification, and confirm the channels available for your account.',
  },
]

const businessSteps = [
  {
    number: '01',
    title: 'Tell us about your work',
    copy: 'Ask about accounts suitable for your trading, service business, registered company, cooperative or group.',
  },
  {
    number: '02',
    title: 'Confirm the documents',
    copy: 'Requirements depend on legal structure and may include registration, ownership, signatory identification, tax details and an operating resolution.',
  },
  {
    number: '03',
    title: 'Agree how it operates',
    copy: 'Review the operating mandate, authorised access, transaction limits, applicable charges and current product terms before proceeding.',
  },
]

function BankingSteps({ steps }: { steps: typeof personalSteps }) {
  const t = useTranslate()

  return (
    <ol className="experience-step-list">
      {steps.map((step) => (
        <li key={step.number} data-experience-reveal>
          <span className="experience-step-number">{step.number}</span>
          <div>
            <h3>{t(step.title)}</h3>
            <p>{t(step.copy)}</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </li>
      ))}
    </ol>
  )
}

export function ServicesPage({ business = false }: { business?: boolean }) {
  const t = useTranslate()
  const steps = business ? businessSteps : personalSteps

  return (
    <ExperienceFrame className={business ? 'business-experience' : 'personal-experience'}>
      <section className="story-hero banking-story-hero" aria-labelledby="banking-hero-title">
        <Image
          className="story-hero-image"
          src={business ? '/image4.jpg' : '/image5.jpg'}
          alt={t(business
            ? 'A Rima adviser speaking with a small business owner in her shop'
            : 'A customer discussing savings options with a Rima banking adviser')}
          fill
          priority
          sizes="100vw"
        />
        <div className="story-hero-shade" aria-hidden="true" />
        <div className="story-hero-grid" aria-hidden="true" />
        <div className="story-hero-copy">
          <p className="story-hero-kicker" data-page-kicker>
            {business ? <>BUSINESS BANKING <span>/</span> BUILT AROUND YOUR WORK</> : <>PERSONAL BANKING <span>/</span> FOR EVERYDAY LIFE</>}
          </p>
          <h1 id="banking-hero-title" className="story-hero-title" data-page-title>
            {business
              ? <>For the work<br />you do.<br /><span>Here to help.</span></>
              : <>For what matters.<br />For every day.<br /><span>A clear next step.</span></>}
          </h1>
          <p className="story-hero-summary" data-page-summary>
            {business
              ? 'Talk with Rima about the business accounts currently available and the requirements that apply to your work.'
              : 'Explore available savings options and understand the terms that apply before you get started.'}
          </p>
          <div className="banking-hero-actions" data-page-actions>
            <a
              className="rima-button"
              href="https://rimapay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open RIMA Pay Web App <ArrowUpRight aria-hidden="true" />
            </a>
            <Link className="banking-hero-secondary" href="/support">
              {business ? 'Ask about business banking' : 'Ask about personal banking'} <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="banking-hero-secondary" href="/fees-and-limits">
              Fees &amp; limits <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <p className="banking-pay-note">{t('This opens the RIMA Pay Web App in a new tab, where you can open an account and use internet banking.')}</p>
          <a className="story-hero-scroll" href="#who-its-for">
            Explore your options <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <p className="story-hero-caption">
          {business ? 'LOCAL ENTERPRISE' : 'PERSONAL BANKING'} <span>·</span> {business ? 'SUPPORT FOR YOUR WORK' : 'OPTIONS FOR EVERYDAY GOALS'}
        </p>
        <span className="story-hero-index" aria-hidden="true">01 <i /> 03</span>
      </section>

      <div className="experience-content-shell">
        <nav className="experience-local-nav" aria-label={t('On this page')}>
          <a href="#who-its-for">Who it is for</a>
          <a href="#how-to-start">How to get started</a>
          <a href="#before-you-begin">Before you begin</a>
        </nav>

        <section id="who-its-for" className="experience-audience" data-experience-reveal>
          <div className="experience-section-label">
            <p className="rima-eyebrow">01 / START WITH YOUR NEED</p>
            <span>{business ? 'A business account should fit the way you operate.' : 'A personal account should fit the way you live.'}</span>
          </div>
          <div>
            <h2>{business ? <>For the people who keep <span>business moving.</span></> : <>For everyday needs and <span>longer-term goals.</span></>}</h2>
            <p>
              {business
                ? 'Rima can discuss options with traders, microenterprises, registered businesses, cooperatives and groups. Availability and requirements depend on the product and the way your organisation is structured.'
                : 'Whether you are planning for household needs, education, business plans or a reserve, ask the bank which savings options are currently available and which terms apply.'}
            </p>
          </div>
        </section>

        <section id="how-to-start" className="experience-process">
          <div className="experience-section-heading" data-experience-reveal>
            <p className="rima-eyebrow">02 / A CLEARER WAY FORWARD</p>
            <h2>{business ? <>From first conversation to <span>account setup.</span></> : <>Understand the choice before <span>you open.</span></>}</h2>
            <p>Take the time to confirm the details that apply to you. Product conditions can vary and should be checked with the bank before you proceed.</p>
          </div>
          <BankingSteps steps={steps} />
        </section>

        <section id="before-you-begin" className="experience-safety-note" data-experience-reveal>
          <span className="experience-note-icon"><ShieldCheck aria-hidden="true" /></span>
          <div>
            <p className="rima-eyebrow">03 / BEFORE YOU BEGIN</p>
            <h2>Clear information before you commit.</h2>
            <p>
              Requirements may include BVN, NIN, accepted identification, a photograph or identity check and proof of address. Account tiers determine applicable balance and transaction limits. Confirm the exact requirements, fees and limits for your account with Rima.
            </p>
          </div>
          <div className="experience-safety-actions">
            <a
              className="rima-button experience-open-account"
              href="https://rimapay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Open RIMA Pay Web App')} <ArrowUpRight aria-hidden="true" />
            </a>
            <Link href="/security" aria-label={t('Read account security guidance')}>
              Security guidance <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </ExperienceFrame>
  )
}

const appServices = [
  {
    number: '01',
    title: 'See your account',
    copy: 'Eligible customers may view available balance and transaction history.',
  },
  {
    number: '02',
    title: 'Use enabled payments',
    copy: 'Selected transfers and airtime purchases may be available on supported services and networks.',
  },
  {
    number: '03',
    title: 'Check before you confirm',
    copy: 'Review beneficiary details, charges and limits before authorising a transaction.',
  },
]

export function AppPage() {
  return (
    <ExperienceFrame className="app-experience">
      <header className="experience-hero app-experience-hero">
        <div className="experience-hero-copy">
          <p className="rima-eyebrow" data-page-kicker>RIMA MFB / MOBILE BANKING</p>
          <h1 data-page-title>Your Rima account, <span>on your phone.</span></h1>
          <p className="lead" data-page-summary>
            The Rima MFB app is being prepared for public release. When available, eligible customers will be able to access enabled banking services from a supported smartphone.
          </p>
          <div className="experience-actions" data-page-actions>
            <a className="rima-button" href="#download">Check availability <ArrowUpRight aria-hidden="true" /></a>
            <Link className="experience-text-link" href="/security">Using the app safely <ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <p className="app-release-note"><span aria-hidden="true" /> Official download links will be published here when the app is released.</p>
        </div>
        <div className="app-phone-stage" aria-label="Preview of Rima mobile banking screens">
          <div className="app-phone-orbit" aria-hidden="true" />
          <PhoneMockup imageSrc={assetUrls.home} alt="Rima app home screen showing account balance and quick services" variant="hero" />
          <PhoneMockup imageSrc={assetUrls.data} alt="Rima app data top-up screen" variant="thumbnail" />
        </div>
      </header>

      <section className="app-screen-tour" aria-labelledby="app-screen-tour-title">
        <div className="app-screen-tour-heading" data-experience-reveal>
          <div>
            <p className="rima-eyebrow">01 / A LOOK INSIDE</p>
            <h2 id="app-screen-tour-title">Three screens. <span>Everyday tasks.</span></h2>
          </div>
          <p>Preview the planned experience. App availability and features remain subject to public release and account eligibility.</p>
        </div>
        <div className="mockup-gallery app-screen-gallery" aria-label="Rima app screen previews">
          <PhoneMockup
            imageSrc={assetUrls.home}
            alt="Rima app home screen showing account balance and quick services"
            caption="01 / YOUR ACCOUNT AT A GLANCE"
          />
          <PhoneMockup
            imageSrc={assetUrls.airtime}
            alt="Rima app airtime top-up screen"
            caption="02 / AIRTIME TOP-UP"
          />
          <PhoneMockup
            imageSrc={assetUrls.data}
            alt="Rima app data top-up screen"
            caption="03 / DATA TOP-UP"
          />
        </div>
      </section>

      <section className="app-service-section" data-experience-reveal>
        <div className="experience-section-heading">
          <p className="rima-eyebrow">02 / DESIGNED FOR EVERYDAY USE</p>
          <h2>Useful services. <span>Clear steps.</span></h2>
          <p>Features depend on eligibility, account status and the services enabled when the app becomes available.</p>
        </div>
        <ol className="experience-step-list app-service-list">
          {appServices.map((item) => (
            <li key={item.number} data-experience-reveal>
              <span className="experience-step-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <Check aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="experience-safety-note app-safety-note" data-experience-reveal>
        <span className="experience-note-icon"><ShieldCheck aria-hidden="true" /></span>
        <div>
          <p className="rima-eyebrow">BANKING SAFELY / EVERY TIME</p>
          <h2>Your PIN, password and OTP are yours alone.</h2>
          <p>Never share them with anyone. Use official app links, confirm payment details before sending, and contact Rima through a verified channel if something looks unfamiliar.</p>
        </div>
        <Link href="/security">Read security guidance <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <div className="app-download-block" data-experience-reveal>
        <div><p className="rima-eyebrow">03 / PUBLIC RELEASE</p><h2>Not available for download yet.</h2></div>
        <div className="app-release-preview">
          <DownloadState />
          <div className="app-store-badge-preview">
            <Image src="/appstorebuttons.png" alt="Google Play and Apple App Store" width={2170} height={725} sizes="(max-width: 780px) 100vw, 560px" />
          </div>
        </div>
      </div>
    </ExperienceFrame>
  )
}

const feeRows = [
  ['Account opening', 'Approved product terms apply'],
  ['Account maintenance', 'Approved product terms apply'],
  ['Transfer within Rima', 'Published at transaction confirmation'],
  ['Transfer to another bank', 'Published at transaction confirmation'],
  ['Airtime, data and bill payments', 'Published at transaction confirmation'],
  ['Statements', 'Ask the bank about the applicable terms'],
]

export function FeesPage() {
  return (
    <ExperienceFrame className="fees-experience">
      <header className="experience-hero fees-experience-hero">
        <div className="experience-hero-copy">
          <p className="rima-eyebrow" data-page-kicker>RIMA / FEES &amp; LIMITS</p>
          <h1 data-page-title>Know what applies <span>before you confirm.</span></h1>
          <p className="lead" data-page-summary>
            Charges and limits depend on your account, the service used and applicable regulatory requirements. Review current product terms and any charge shown before authorising a transaction.
          </p>
          <div className="experience-actions" data-page-actions>
            <Link className="rima-button" href="/support">Ask about your account <ArrowUpRight aria-hidden="true" /></Link>
            <Link className="experience-text-link" href="/faq">Common questions <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="fees-hero-index" data-experience-reveal>
          <span className="rima-eyebrow">A SIMPLE CHECK</span>
          <strong>Review.<br />Understand.<br /><em>Then confirm.</em></strong>
          <span>YOUR ACCOUNT / YOUR TERMS</span>
        </aside>
      </header>

      <section className="fees-schedule-section" data-experience-reveal>
        <div className="experience-section-heading">
          <p className="rima-eyebrow">01 / BEFORE YOU TRANSACT</p>
          <h2>Check the terms that <span>apply to you.</span></h2>
          <p>This guide does not replace your account terms or the final transaction disclosure. Ask Rima to confirm any charge or limit you cannot find.</p>
        </div>
        <div className="fees-schedule" role="table" aria-label="Fee information">
          <div className="fees-schedule-head" role="row">
            <span role="columnheader">SERVICE</span>
            <span role="columnheader">WHERE TO CHECK</span>
          </div>
          {feeRows.map(([service, terms], index) => (
            <div className="fees-schedule-row" role="row" key={service} data-experience-reveal>
              <span className="fees-schedule-number">{String(index + 1).padStart(2, '0')}</span>
              <strong role="cell">{service}</strong>
              <span role="cell">{terms}</span>
            </div>
          ))}
        </div>
        <p className="fees-schedule-caption">Exact charges and transaction limits are subject to the applicable product terms and current bank schedule.</p>
      </section>

      <section className="ndic-note" data-experience-reveal>
        <span className="experience-note-icon"><ShieldCheck aria-hidden="true" /></span>
        <div>
          <p className="rima-eyebrow">02 / DEPOSIT PROTECTION</p>
          <h2>How deposit insurance works.</h2>
          <p>Eligible deposits at microfinance banks are currently insured by NDIC up to ₦2,000,000 per depositor per bank, subject to applicable eligibility and coverage rules. Deposit insurance concerns an insured bank’s failure; it is not insurance against every scam, disputed payment or investment loss.</p>
        </div>
        <Link href="/security">Protect your account <ArrowUpRight aria-hidden="true" /></Link>
      </section>
    </ExperienceFrame>
  )
}

const securityPractices = [
  {
    number: '01',
    title: 'Keep credentials private',
    copy: 'Never share your PIN, password or one-time passcode with anyone, including someone claiming to work for Rima.',
  },
  {
    number: '02',
    title: 'Check before sending',
    copy: 'Confirm the recipient’s name, bank, account number and amount. Do not rely on a screenshot alone as proof of payment.',
  },
  {
    number: '03',
    title: 'Avoid impersonation',
    copy: 'Use official contacts and app links. Be cautious of urgent payment demands, prizes and requests to install remote-access software.',
  },
  {
    number: '04',
    title: 'Act if something feels wrong',
    copy: 'If your phone is lost or activity looks unfamiliar, contact Rima through a verified support channel as soon as possible.',
  },
]

export function SecurityPage() {
  return (
    <ExperienceFrame className="security-experience">
      <header className="experience-hero security-experience-hero">
        <div className="experience-hero-copy">
          <p className="rima-eyebrow" data-page-kicker>RIMA / SECURITY CENTRE</p>
          <h1 data-page-title>Protect your account. <span>Spot the warning signs.</span></h1>
          <p className="lead" data-page-summary>
            Security depends on technical controls, operating procedures and responsible use. No online service can promise that every risk is eliminated.
          </p>
          <div className="experience-actions" data-page-actions>
            <Link className="rima-button" href="/support#fraud">What to do about fraud <ArrowUpRight aria-hidden="true" /></Link>
            <Link className="experience-text-link" href="/faq">Security FAQs <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="security-hero-index" data-experience-reveal>
          <ShieldCheck aria-hidden="true" />
          <p className="rima-eyebrow">A SIMPLE RULE</p>
          <strong>Keep your<br />secret details<br /><span>secret.</span></strong>
          <span>PIN / PASSWORD / OTP</span>
        </aside>
      </header>

      <section className="security-practices-section" data-experience-reveal>
        <div className="experience-section-heading">
          <p className="rima-eyebrow">01 / EVERYDAY PROTECTION</p>
          <h2>Small checks. <span>Stronger habits.</span></h2>
          <p>Pause when a message or transaction feels unusual. Verify the details using a contact channel you already know is official.</p>
        </div>
        <ol className="security-practice-list">
          {securityPractices.map((practice) => (
            <li key={practice.number} data-experience-reveal>
              <span>{practice.number}</span>
              <div><h3>{practice.title}</h3><p>{practice.copy}</p></div>
              <Check aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="security-response" data-experience-reveal>
        <div><p className="rima-eyebrow">02 / IF YOU SUSPECT FRAUD</p><h2>Use a verified channel. <span>Act promptly.</span></h2></div>
        <div>
          <p>Contact the bank through an official support channel you have independently verified. Keep relevant transaction references available, but do not send credentials or one-time passcodes.</p>
          <p>An urgent fraud report is different from a request to delete your app profile or close an account.</p>
          <Link className="rima-button" href="/support#fraud">View fraud guidance <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </ExperienceFrame>
  )
}
