'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslate } from '@/lib/language'

const slides = [
  {
    src: '/image1.jpg',
    alt: 'Illustrative Rima-branded community banking scene',
    title: 'Rooted in our community.',
    label: 'COMMUNITY / VISUAL CONCEPT',
  },
  {
    src: '/image5.jpg',
    alt: 'Illustrative conversation between a banker and a local merchant',
    title: 'Here for local enterprise.',
    label: 'BUSINESS / VISUAL CONCEPT',
  },
  {
    src: '/image4.jpg',
    alt: 'Illustrative meeting between a customer and a banking professional',
    title: 'Personal service, built around you.',
    label: 'CUSTOMER CARE / VISUAL CONCEPT',
  },
  {
    src: '/image8.jpg',
    alt: 'Illustrative exterior concept for a Rima-branded bank building',
    title: 'A community with room to grow.',
    label: 'OUR FUTURE / VISUAL CONCEPT',
  },
]

export function HomeHeroCarousel() {
  const t = useTranslate()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [paused])

  const showSlide = (direction: number) => {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length)
  }

  return (
    <>
      <section
        className="home-hero-carousel"
        aria-label={t('Rima Microfinance Bank highlights')}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
        }}
      >
        <div className="home-hero-carousel-frame">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              className={`home-hero-carousel-image${index === activeIndex ? ' is-active' : ''}`}
              src={slide.src}
              alt={index === activeIndex ? t(slide.alt) : ''}
              fill
              priority={index === 0}
              sizes="(max-width: 780px) 100vw, 50vw"
              aria-hidden={index !== activeIndex}
            />
          ))}
          <div className="home-hero-carousel-shade" />
          <div className="home-hero-carousel-caption" aria-live="polite">
            <span>{t(slides[activeIndex].label)}</span>
            <h2>{t(slides[activeIndex].title)}</h2>
          </div>
        </div>
      </section>
      <div
        className="home-hero-carousel-controls"
        role="group"
        aria-label={t('Carousel controls')}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
        }}
      >
        <button type="button" aria-label={t('Previous highlight')} onClick={() => showSlide(-1)}>
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="home-hero-carousel-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.src}
              aria-label={`${t('Show highlight')} ${index + 1}: ${t(slide.title)}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" aria-label={t('Next highlight')} onClick={() => showSlide(1)}>
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
