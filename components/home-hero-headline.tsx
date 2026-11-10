'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language'

const audiences = [
  { en: 'Farmers', ha: 'Manoma' },
  { en: 'Families', ha: 'Iyalai' },
  { en: 'Students', ha: 'Dalibai' },
  { en: 'Entrepreneurs', ha: 'Masu sana’o’i' },
  { en: 'Everyone', ha: 'Kowa' },
  { en: 'Traders', ha: '’Yan kasuwa' },
]

export function HomeHeroHeadline() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const prefix = language === 'ha' ? 'An gina banki' : 'Banking Built'
  const forWord = language === 'ha' ? 'domin' : 'for'
  const activeAudience = audiences[activeIndex][language]

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % audiences.length)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [reducedMotion])

  return (
    <h1 className="home-hero-heading" aria-label={`${prefix} ${forWord} ${activeAudience}`}>
      {prefix}<br />
      <span className="home-hero-heading-line">
        {forWord}{' '}
        <span className="home-hero-heading-slot">
          {audiences.map((audience) => (
            <span className="home-hero-heading-measure" aria-hidden="true" key={audience.en}>
              {audience[language]}
            </span>
          ))}
          <span key={audiences[activeIndex].en} className="home-hero-heading-audience" aria-hidden="true">
            {activeAudience}
          </span>
        </span>
      </span>
    </h1>
  )
}
