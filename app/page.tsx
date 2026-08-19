'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight, Brain, Check, Dumbbell, Flame, Menu, ScanLine, X, Zap } from 'lucide-react'

const surveyUrl = 'https://titantechng.vercel.app/survey'

const assets = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titanfitnesslogo-5ISv5cNMEDASxuQQVbjAmKz2GpBFaE.jpg',
  poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding1-RmiToZEkbXsTCmUXNKBQw2Qqy1vF9B.jpg',
  onboarding2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding2-TjdGnqHW3oLK2t5efoi4AoyuqQDrBy.jpg',
  login: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loginscreen-4AmGCfcxSeaMUGEHWYka88zWHK5nba.jpg',
  home: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homescreen-AUe9z18CJVgBXjPAlordT9fEgQmN0Z.jpg',
  scan: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-08-20_00-12-12-tTKsdBoowg4CbG3jwjs0bMRV8gbbns.jpg',
  tech: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titantechlogo-slOg8uVcZECDTAjIxafA8NOJIZhi7y.jpg',
  qr: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFsurveyQRcode-GRmjoRKfKmX4gvpoPLGglB7BCA5WY0.jpg',
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

function Phone({ image, label, index, className = '' }: { image: string; label: string; index: number; className?: string }) {
  return <motion.figure className={`phone phone-${index} ${className}`} whileHover={{ y: -14, rotate: index % 2 ? 2 : -2 }} transition={{ type: 'spring', stiffness: 180 }}>
    <span className="side-button side-button-top" /><span className="side-button side-button-bottom" /><span className="phone-camera" />
    <div className="phone-screen"><img src={image} alt={`${label} Titan Fitness app screen`} /><span className="screen-glare" /></div>
    <figcaption><span>0{index + 1}</span>{label}</figcaption>
  </motion.figure>
}

const faqs = [
  ['When does Titan Fitness launch?', 'Titan Fitness is currently in pre-launch. Join the waitlist to be first to hear when early access opens.'],
  ['What platforms will it support?', 'We are building for modern mobile experiences first. Platform availability will be announced with early access.'],
  ['Is there a free tier?', 'Pricing is still being shaped. Join the survey and tell us what a useful first version should include.'],
  ['How is my data handled?', 'Titan-Tech is designing Titan Fitness around privacy-first data practices and clear user control.'],
  ['Will it work outside Nigeria?', 'Yes. Titan Fitness is being designed for athletes everywhere, with its roots in the Nigerian training community.'],
]

export default function Page() {
  const hero = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    if (!hero.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title-line, .hero-copy, .hero-actions', { y: 42, opacity: 0, duration: 1, stagger: .11, ease: 'power4.out' })
      gsap.to('.hero-glow', { scale: 1.15, opacity: .65, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, hero)
    return () => ctx.revert()
  }, [])

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <nav className="nav glass"><a href="#top" className="brand"><img src={assets.logo} alt="Titan Fitness TF logo" /><span>TITAN <b>FITNESS</b></span></a><div className="nav-links"><a href="#method">Method</a><a href="#system">System</a><a href="#founders">Built by Titan-Tech</a><a href="#faq">FAQ</a></div><a className="button nav-cta" href={surveyUrl} target="_blank" rel="noreferrer">Fill the survey <ArrowUpRight data-icon="inline-end" /></a><button className="menu-button" aria-label="Open menu"><Menu /></button></nav>

    <section id="top" ref={hero} className="hero hero-video-shell"><video className="hero-video" autoPlay muted loop playsInline poster={assets.poster} aria-label="Titan Fitness training film"><source src="/titanfitnessvideo.mp4" type="video/mp4" /></video><div className="hero-video-overlay" /><div className="hero-glow" /><div className="hero-inner section-shell"><div className="hero-copy-wrap"><p className="hero-kicker"><span className="live-dot" /> TITAN FITNESS / 001 — THE TRAINING OS</p><h1 className="hero-title"><span className="hero-title-line">Train with</span><span className="hero-title-line accent-text">intent.</span><span className="hero-title-line">Become <em>unmistakable.</em></span></h1><p className="hero-copy">A science-backed training system for people who refuse to plateau. Titan turns your data, discipline, and daily effort into a stronger version of you.</p><div className="hero-actions"><a className="button button-lime" href={surveyUrl} target="_blank" rel="noreferrer">Fill the survey <ArrowUpRight data-icon="inline-end" /></a><a className="button button-ghost" href="#method">Explore the system <ArrowDown data-icon="inline-end" /></a></div></div><div className="hero-visual"><Phone image={assets.home} label="Home command center" index={0} /><Phone image={assets.onboarding2} label="Cycle-sync training" index={1} className="hero-phone-back" /></div></div><div className="scroll-note"><span>Scroll to train</span><div className="scroll-line" /></div></section>

    <section id="method" className="manifesto section-shell"><Reveal><p className="eyebrow">THE TITAN METHOD</p><h2>Discipline is not a mood.<br /><span>It is a system.</span></h2></Reveal><Reveal className="manifesto-grid" delay={.1}><p className="large-copy">Your body is the hardware. Your habits are the code. Titan Fitness is the operating system that makes both work harder, smarter, and together.</p><div className="manifesto-meta"><span>DATA → DECISION</span><span>EFFORT → ADAPTATION</span><span>CONSISTENCY → CHANGE</span></div></Reveal></section>

    <section id="system" className="feature-highlight section-shell"><Reveal><div className="section-heading"><div><p className="eyebrow">WHAT TITAN INCLUDES</p><h2>Everything you need<br /><span>to keep moving.</span></h2></div><p>One focused loop. Training, fueling, recovery, progress. Every signal moving you forward.</p></div></Reveal><div className="highlight-grid"><Reveal className="feature-phone-wrap"><Phone image={assets.home} label="Home / command center" index={0} /></Reveal><div className="stacked-features"><Reveal delay={.1}><article className="stack-card stack-card-active"><Dumbbell /><div><h3>Training plans that adapt</h3><p>Structured workouts built around your goals, capacity, and next best rep.</p></div></article></Reveal><Reveal delay={.18}><article className="stack-card"><Flame /><div><h3>Macro and nutrition tracking</h3><p>See what your body needs before, during, and after hard-earned sessions.</p></div></article></Reveal><Reveal delay={.26}><article className="stack-card"><Zap /><div><h3>Progress you can feel</h3><p>Turn effort into a clear view of strength, consistency, and momentum.</p></div></article></Reveal><Reveal delay={.34}><article className="stack-card"><Brain /><div><h3>Cycle-sync training</h3><p>Make space for the signals your body is already giving you.</p></div></article></Reveal></div></div></section>

    <section className="why section-shell"><Reveal><div className="center-heading"><p className="eyebrow">WHY TITAN FITNESS?</p><h2>Train smarter.<br /><span>Stay in it.</span></h2><p>Built for the work between motivation and mastery.</p></div></Reveal><div className="why-grid"><Reveal><article className="why-card"><span className="icon-box"><Flame /></span><h3>Built around your body</h3><p>Training should respond to real life, not ask you to ignore it.</p></article></Reveal><Reveal delay={.12}><article className="why-card"><span className="icon-box"><Brain /></span><h3>Train with intelligence</h3><p>Clear signals and useful feedback, without turning fitness into noise.</p></article></Reveal><Reveal delay={.24}><article className="why-card"><span className="icon-box"><Dumbbell /></span><h3>Make the next rep count</h3><p>Less guesswork. More consistency. A system that respects your effort.</p></article></Reveal></div></section>

    <section id="founders" className="tech section-shell"><Reveal className="tech-inner"><div className="tech-mark glass"><img src={assets.tech} alt="Titan-Tech logo" /></div><div className="tech-copy"><p className="eyebrow">ENGINEERED BY TITAN-TECH</p><h2>Human grit.<br /><span>Machine clarity.</span></h2><p>Titan Fitness is made by the team building the future of intelligent software. Technology should not replace discipline — it should make discipline impossible to waste.</p><div className="tech-points"><span><Check /> Privacy-first data</span><span><Check /> Designed for real life</span><span><Check /> No empty motivation</span></div></div></Reveal></section>

    <section className="showcase section-shell"><Reveal><div className="section-heading"><div><p className="eyebrow">A LOOK INSIDE</p><h2>The work,<br /><span>captured.</span></h2></div><p>Four screens. One training operating system. Designed to feel as focused as the work itself.</p></div></Reveal><div className="phone-stage"><Phone image={assets.onboarding2} label="Body signal / onboarding" index={0} /><Phone image={assets.login} label="Access / your system" index={1} /><Phone image={assets.home} label="Home / command center" index={2} /><Phone image={assets.scan} label="Scan / macro tracking" index={3} /></div></section>

    <section id="faq" className="faq section-shell"><Reveal><div className="center-heading"><p className="eyebrow">THE QUESTIONS WE HEAR</p><h2>Frequently asked<br /><span>questions.</span></h2><p>Everything we can share before launch.</p></div></Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <Reveal key={question} delay={index * .05}><article className={`faq-item ${openFaq === index ? 'faq-open' : ''}`}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><span className="faq-plus">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p>{answer}</p>}</article></Reveal>)}</div></section>

    <section id="waitlist" className="waitlist section-shell"><div className="waitlist-inner glass"><Reveal><p className="eyebrow">TITAN FITNESS / COMING SOON</p><h2>Ready to earn<br /><span>your edge?</span></h2><p>Be first through the doors. Share what you want from Titan Fitness and get launch updates when early access opens.</p><a className="button button-lime" href={surveyUrl} target="_blank" rel="noreferrer">Scan and fill survey <ArrowUpRight data-icon="inline-end" /></a></Reveal><Reveal className="qr-wrap" delay={.15}><div className="qr-label"><ScanLine /> Scan to join the survey</div><img src={assets.qr} alt="Titan Fitness app survey QR code" /></Reveal></div></section>

    <footer className="footer section-shell"><div className="footer-columns"><div><div className="footer-brand"><img src={assets.logo} alt="Titan Fitness" /><span>TITAN FITNESS</span></div><p>Train your body. Elevate your spirit.</p><p className="contact">+234 701 858 3600<br />titantechngltd@gmail.com</p></div><div><b>Legal</b><a href="/privacy-policy">Privacy policy</a><a href="/terms">Terms of use</a><a href="/account-deletion">Account deletion</a></div><div><b>Company</b><a href="#founders">Built by Titan-Tech</a><a href="#faq">FAQ</a><a href="#waitlist">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Titan-Tech Ltd.</span><span>Built for the next rep.</span><a href="#top">Back to top ↑</a></div></footer>
  </main>
}
