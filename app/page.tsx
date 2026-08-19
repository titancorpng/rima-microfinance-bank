'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight, Brain, Check, Dumbbell, Flame, Menu, Play, ScanLine, Sparkles, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titanfitnesslogo-5ISv5cNMEDASxuQQVbjAmKz2GpBFaE.jpg'
const heroUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding1-RmiToZEkbXsTCmUXNKBQwQ2qy1vF9B.jpg'
const cycleUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding2-TjdGnqHW3oLK2t5efoi4AoyuqQDrBy.jpg'
const homeUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homescreen-AUe9z18CJVgBXjPAlordT9fEgQmN0Z.jpg'
const techUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titantechlogo-slOg8uVcZECDTAjIxafA8NOJIZhi7y.jpg'
const qrUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFsurveyQRcode-GRmjoRKfKmX4gvpoPLGglB7BCA5WY0.jpg'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function Phone({ image, label, index }: { image: string; label: string; index: number }) {
  return <motion.figure className={`phone phone-${index}`} whileHover={{ y: -14, rotate: index % 2 ? 2 : -2 }} transition={{ type: 'spring', stiffness: 180 }}>
    <div className="phone-camera" /><img src={image} alt={`${label} Titan Fitness app screen`} /><figcaption><span>0{index + 1}</span>{label}</figcaption>
  </motion.figure>
}

export default function Page() {
  const hero = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    if (!hero.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title-line, .hero-copy, .hero-actions', { y: 45, opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out' })
      gsap.to('.hero-orbit', { rotation: 360, duration: 28, repeat: -1, ease: 'none' })
      gsap.to('.hero-image', { scale: 1.08, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, hero)
    return () => ctx.revert()
  }, [])

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <nav className="nav"><a href="#top" className="brand"><img src={logoUrl} alt="Titan Fitness" /><span>TITAN<span>FITNESS</span></span></a><div className="nav-links"><a href="#method">Method</a><a href="#features">System</a><a href="#founders">Built by Titan-Tech</a></div><a className="nav-cta" href="#waitlist">Get early access <ArrowUpRight data-icon="inline-end" /></a><button className="menu-button" aria-label="Open menu"><Menu /></button></nav>

    <section id="top" ref={hero} className="hero section-shell"><div className="hero-copy-wrap"><p className="hero-kicker"><span className="live-dot" /> TITAN FITNESS / 001 — THE TRAINING OS</p><h1 className="hero-title"><span className="hero-title-line">Train with</span><span className="hero-title-line accent-text">intent.</span><span className="hero-title-line">Become <em>unmistakable.</em></span></h1><p className="hero-copy">A science-backed training system for people who refuse to plateau. Titan turns your data, discipline, and daily effort into a stronger version of you.</p><div className="hero-actions"><a className="button button-lime" href="#waitlist">Join the waitlist <ArrowUpRight data-icon="inline-end" /></a><a className="text-link" href="#method">Explore the system <ArrowDown data-icon="inline-end" /></a></div></div><div className="hero-visual"><div className="hero-orbit" /><div className="hero-frame"><img className="hero-image" src={heroUrl} alt="Athlete running through mountain terrain" /><div className="hero-overlay" /><div className="hero-stat"><span>01 / 04</span><strong>NO SHORTCUTS<br />JUST SIGNAL.</strong></div></div><div className="hero-side-note">EST. 2026<br /><span>BUILT FOR THE<br />NEXT REP.</span></div></div><div className="scroll-note"><span>Scroll to train</span><div className="scroll-line" /></div></section>

    <section id="method" className="manifesto section-shell"><Reveal><p className="eyebrow">THE TITAN METHOD</p><h2>Discipline is not a mood.<br /><span>It is a system.</span></h2></Reveal><Reveal className="manifesto-grid" delay={0.1}><p className="large-copy">Your body is the hardware. Your habits are the code. Titan Fitness is the operating system that makes both work harder, smarter, and together.</p><div className="manifesto-meta"><span>DATA → DECISION</span><span>EFFORT → ADAPTATION</span><span>CONSISTENCY → CHANGE</span></div></Reveal></section>

    <section id="features" className="system section-shell"><Reveal><div className="section-heading"><div><p className="eyebrow">THE SYSTEM / 02</p><h2>Built for the<br /><span>long game.</span></h2></div><p>One focused loop. Training, fueling, recovery, progress. Every signal moving you forward.</p></div></Reveal><div className="feature-grid"><Reveal delay={0.05}><article className="feature-card feature-card-dark"><div className="feature-icon"><Dumbbell /></div><span className="feature-index">01</span><h3>Train with<br /><strong>precision.</strong></h3><p>Adaptive sessions that meet you where you are and push you where you need to go.</p><a href="#waitlist">Explore training <ArrowUpRight /></a></article></Reveal><Reveal delay={0.15}><article className="feature-card feature-card-lime"><div className="feature-icon"><Flame /></div><span className="feature-index">02</span><h3>Fuel the<br /><strong>work.</strong></h3><p>See what your body needs before, during, and after every hard-earned session.</p><a href="#waitlist">Explore fuel <ArrowUpRight /></a></article></Reveal><Reveal delay={0.25}><article className="feature-card feature-card-pink"><div className="feature-icon"><Brain /></div><span className="feature-index">03</span><h3>Read the<br /><strong>signal.</strong></h3><p>Recovery intelligence that helps you know when to attack and when to rebuild.</p><a href="#waitlist">Explore progress <ArrowUpRight /></a></article></Reveal></div></section>

    <section className="showcase section-shell"><Reveal><div className="section-heading"><div><p className="eyebrow">A LOOK INSIDE / 03</p><h2>The work,<br /><span>captured.</span></h2></div><p>Everything you need to make the next set count, in one relentlessly simple interface.</p></div></Reveal><div className="phone-stage"><Phone image={homeUrl} label="Home / Command center" index={0} /><Phone image={cycleUrl} label="Fuel / Know your inputs" index={1} /><Phone image={heroUrl} label="Train / Start the session" index={2} /></div></section>

    <section id="founders" className="tech section-shell"><Reveal><div className="tech-mark"><img src={techUrl} alt="Titan-Tech logo" /></div><div className="tech-copy"><p className="eyebrow">ENGINEERED BY TITAN-TECH</p><h2>Human grit.<br /><span>Machine clarity.</span></h2><p>Titan Fitness is made by the team building the future of intelligent software. We believe technology should not replace discipline — it should make discipline impossible to waste.</p><div className="tech-points"><span><Check /> Privacy-first data</span><span><Check /> Designed for real life</span><span><Check /> No empty motivation</span></div></div></Reveal></section>

    <section id="waitlist" className="waitlist section-shell"><div className="waitlist-inner"><Reveal><p className="eyebrow">TITAN FITNESS / COMING SOON</p><h2>Ready to earn<br /><span>your edge?</span></h2><p>Be first through the doors. Get early access, launch updates, and the first chance to train with Titan.</p><a className="button button-lime" href="mailto:hello@titanfitness.app">Request early access <ArrowUpRight data-icon="inline-end" /></a></Reveal><Reveal className="qr-wrap" delay={0.15}><div className="qr-label"><ScanLine /> Scan to join the survey</div><img src={qrUrl} alt="Titan Fitness app survey QR code" /></Reveal></div></section>

    <footer className="footer section-shell"><div className="footer-brand"><img src={logoUrl} alt="Titan Fitness" /><span>TITAN FITNESS</span></div><p>Train your body. Elevate your spirit.</p><div className="footer-bottom"><span>© 2026 Titan-Tech Ltd.</span><span>Built for the next rep.</span><a href="#top">Back to top ↑</a></div></footer>
  </main>
}
