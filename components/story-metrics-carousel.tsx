'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslate } from '@/lib/language'

const metrics = [
  { count: 1992, suffix: '', label: 'Year Founded', hausa: 'Shekarar Kafawa' },
  { count: 25, suffix: 'K+', label: 'Current Customers', hausa: 'Masu Asusun Yanzu' },
  { count: 500, suffix: 'K', label: 'Year 1 Target', hausa: 'Burin Shekara 1' },
  { count: 2000, suffix: '', label: 'POS Terminals', hausa: "Na'urar POS" },
  { count: 30, suffix: '+', label: 'Years of Service', hausa: 'Shekaru na Hidima' },
  { count: 3, suffix: '', label: 'Revenue Streams', hausa: 'Hanyoyin Kuɗi' },
]

export function StoryMetricsCarousel() {
  const t = useTranslate()
  const [visibleCount, setVisibleCount] = useState(3)
  const [countProgress, setCountProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 780px)')
    const update = () => {
      const nextVisibleCount = mobile.matches ? 1 : 3
      setVisibleCount(nextVisibleCount)
    }

    update()
    mobile.addEventListener('change', update)
    return () => mobile.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let animationFrame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1500
      const start = performance.now()

      const animateCount = (now: number) => {
        const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1)
        setCountProgress(1 - (1 - progress) ** 3)
        if (progress < 1) animationFrame = window.requestAnimationFrame(animateCount)
      }

      animationFrame = window.requestAnimationFrame(animateCount)
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  const carouselStyle = {
    '--metric-count': metrics.length,
    '--visible-count': visibleCount,
  } as CSSProperties

  return (
    <section
      ref={sectionRef}
      className="story-metrics story-reveal"
      aria-labelledby="story-metrics-title"
    >
      <div className="story-metrics-heading">
        <div>
          <p className="rima-eyebrow">{t('RIMA / COMMUNITY BANKING')}</p>
          <h2 id="story-metrics-title">{t('A history of local roots.')} <span>{t('A wider ambition.')}</span></h2>
        </div>
      </div>
      <div className="story-metrics-window" aria-roledescription="carousel" aria-label={t('Rima MFB at a glance')}>
        <div className="story-metrics-track" style={carouselStyle}>
          {[0, 1, 2].map((copy) => metrics.map((metric) => (
            <article className="story-metric-card" key={`${copy}-${metric.label}`} aria-hidden={copy > 0}>
              <strong aria-label={`${metric.count.toLocaleString('en-NG')}${metric.suffix}`}>
                {`${Math.round(metric.count * countProgress).toLocaleString('en-NG')}${metric.suffix}`}
              </strong>
              <span>{t(metric.label)}</span>
              <em>{t(metric.hausa)}</em>
            </article>
          )))}
        </div>
      </div>
    </section>
  )
}
