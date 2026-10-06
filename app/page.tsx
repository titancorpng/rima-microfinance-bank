'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rima_mfb_logo_transparent-4JS9Lcsc9dM5bH6RbTG8ioLwPHkEKK.png'

const faqs = [
  ['Is Rima a bank?', 'Rima Microfinance Bank is a Nigerian microfinance bank licensed by the Central Bank of Nigeria. Our verified legal identity and licence details will be shown on the About page.'],
  ['What do I need to open an account?', 'Requirements depend on the account type and current regulatory rules. We may require BVN, NIN, accepted identification and supporting information. Our team will explain what applies to you.'],
  ['Can I use my existing Rima account in the app?', 'Where activation is available, use the existing-customer option and your registered details. If verification fails, contact support. Do not create duplicate profiles to bypass verification.'],
  ['What does “pending” mean?', 'The final outcome has not yet been confirmed. A transaction may still complete or be reversed after investigation. Contact us if the status does not update or you need assistance.'],
  ['How do I make a complaint?', 'Use the Complaints page, contact our official support team or visit the branch. Keep your complaint reference and supporting transaction information.'],
  ['How do I delete my app account?', 'Visit Account & Data Deletion or use the deletion option in the app settings. Uninstalling the app does not delete your account.'],
]

function Button({ children, href = '#services', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <a href={href} className={`rima-button ${secondary ? 'rima-button-secondary' : ''}`}>{children}<ArrowUpRight data-icon="inline-end" /></a>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="rima-site">
      <nav className="rima-nav island-glass" aria-label="Main navigation">
        <a className="rima-brand" href="#top" onClick={closeMenu}>
          <img src={logo} alt="Rima Microfinance Bank logo" />
          <span>RIMA <b>MICROFINANCE BANK</b></span>
        </a>
        <div className="rima-nav-links">
          <a href="#top">Home</a><a href="#about">About Rima</a><a href="#services">Services</a><a href="#app">Rima App</a><a href="#help">Help Centre</a>
        </div>
        <Button href="#contact">Contact Rima</Button>
        <button className="rima-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="rima-mobile-nav"><a href="#top" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About Rima</a><a href="#services" onClick={closeMenu}>Services</a><a href="#app" onClick={closeMenu}>Rima App</a><a href="#help" onClick={closeMenu}>Help Centre</a><Button href="#contact">Contact Rima</Button></div>}
      </nav>

      <section id="top" className="rima-hero rima-shell">
        <div className="hero-orbit" />
        <div className="hero-copy">
          <p className="rima-eyebrow"><span className="rima-dot" /> RIMA MICROFINANCE BANK / COMMUNITY BANKING</p>
          <h1>Banking rooted in <span>community.</span><br />Built for your everyday life.</h1>
          <p className="hero-lede">Rima Microfinance Bank helps individuals, families and small businesses save, manage money and build stronger livelihoods. With roots in Sokoto, we are bringing our community banking experience into a new digital chapter.</p>
          <div className="hero-actions"><Button href="#services">Explore Our Services</Button><Button href="#contact" secondary>Contact Rima</Button></div>
          <p className="hero-note">Our mobile banking service is being prepared for launch. Visit this website for official updates.</p>
        </div>
        <div className="hero-mark-wrap"><div className="hero-mark-glow" /><img className="hero-mark" src={logo} alt="Rima MFB gold emblem" /></div>
      </section>

      <section className="trust-strip"><div className="rima-shell trust-inner"><div><strong>ESTABLISHED IN 1993</strong><span>Community banking roots</span></div><div><ShieldCheck /><strong>LICENSED BY THE CENTRAL BANK OF NIGERIA</strong><span>Subject to verified current licence details</span></div><div><ShieldCheck /><strong>ELIGIBLE DEPOSITS INSURED BY NDIC</strong><span>Subject to applicable limits and conditions</span></div></div></section>

      <section id="services" className="rima-section rima-shell"><div className="section-heading"><div><p className="rima-eyebrow">BANKING FOR WHAT MATTERS</p><h2>Clear support for your <span>next step.</span></h2></div><p>Ask questions before opening an account or authorising a transaction. We explain the requirements, charges and conditions that apply to you.</p></div><div className="service-grid"><article className="service-card featured"><Sparkles /><p className="card-number">01 / PERSONAL BANKING</p><h3>Save for what matters.</h3><p>Keep funds for day-to-day needs and personal goals. Ask our team about available savings accounts and the terms that apply.</p><a href="#contact">Ask about a savings account <ArrowUpRight /></a></article><article className="service-card"><p className="card-number">02 / BUSINESS BANKING</p><h3>Support the work you do.</h3><p>Whether you trade, provide services or run a small enterprise, speak with us about an account that fits your business and documentation needs.</p><a href="#contact">Speak to our team <ArrowUpRight /></a></article><article className="service-card"><p className="card-number">03 / EVERYDAY ACCESS</p><h3>Stay connected to your account.</h3><p>Use available digital services to manage your account and review transactions. Features depend on eligibility and enabled services.</p><a href="#app">Explore Rima App <ArrowUpRight /></a></article></div></section>

      <section id="about" className="rima-section about-section"><div className="rima-shell about-grid"><div><p className="rima-eyebrow">OUR ROOTS / YOUR NEXT STEP</p><h2>Community banking with a <span>forward view.</span></h2></div><div className="about-copy"><p>Rima Microfinance Bank is a Nigerian microfinance bank with roots in Sokoto State. Established in 1993, we serve customers whose ambitions begin with everyday needs: saving for a family goal, managing business income, and building a more stable livelihood.</p><p>Our digital transformation builds on that history. We are developing convenient channels while retaining the accountability and local understanding that customers expect from a community bank.</p><Button href="#contact" secondary>About Rima</Button></div></div></section>

      <section id="app" className="rima-section app-section rima-shell"><div className="app-card island-glass"><div><p className="rima-eyebrow">RIMA MFB APP / COMING SOON</p><h2>Your Rima account, <span>on your phone.</span></h2><p>The Rima MFB app will give eligible customers a convenient way to access enabled banking services from a supported smartphone. Official download links will be published here when it is released.</p><div className="app-points"><span>Balance and transaction history</span><span>Enabled transfer services</span><span>Supported airtime purchases</span><span>Profile and support access</span></div></div><div className="app-badge"><div className="badge-icon">R</div><strong>Official app links<br />coming soon</strong><small>Check that the publisher matches the legal entity shown on this website.</small></div></div></section>

      <section id="help" className="rima-section rima-shell"><div className="section-heading"><div><p className="rima-eyebrow">HELP CENTRE</p><h2>Answers before you <span>commit.</span></h2></div><p>Never share your PIN, password or OTP with anyone, including someone claiming to work for Rima.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section id="contact" className="rima-section contact-section"><div className="rima-shell contact-card"><div><p className="rima-eyebrow">NEED HELP WITH A TRANSACTION?</p><h2>Let&apos;s help you take the <span>next step.</span></h2><p>If a payment is pending, you notice an unfamiliar debit, or you need assistance with your account, contact us through an official Rima channel. Keep your transaction reference available.</p></div><div className="contact-actions"><Button href="mailto:contact@rimabank.ng">Send an enquiry</Button><a className="text-link" href="/complaints">Report a complaint <ArrowUpRight /></a><small>Official support details will be published here when confirmed.</small></div></div></section>

      <footer className="rima-footer rima-shell"><div className="footer-island island-glass"><div className="footer-top"><div><a className="rima-brand" href="#top"><img src={logo} alt="Rima Microfinance Bank logo" /><span>RIMA <b>MICROFINANCE BANK</b></span></a><p>Banking rooted in community. Built for your everyday life.</p></div><div className="footer-links"><strong>Explore</strong><a href="#about">About Rima</a><a href="#services">Personal Banking</a><a href="#services">Business Banking</a><a href="#app">Rima App</a></div><div className="footer-links"><strong>Support</strong><a href="#help">Help Centre</a><a href="#contact">Contact</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/account-deletion">Account & Data Deletion</a></div></div><div className="footer-bottom"><span>© 2026 Rima Microfinance Bank</span><span>Licensed by the Central Bank of Nigeria · Eligible deposits insured by NDIC</span></div></div></footer>
    </main>
  )
}

