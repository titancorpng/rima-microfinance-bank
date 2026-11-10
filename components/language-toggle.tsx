'use client'

import { Globe2 } from 'lucide-react'
import { useLanguage, useTranslate } from '@/lib/language'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const t = useTranslate()
  const nextLanguage = language === 'en' ? 'ha' : 'en'

  return (
    <button
      className={`language-toggle${language === 'ha' ? ' language-toggle-hausa' : ''}`}
      type="button"
      role="switch"
      aria-label={t('Language')}
      aria-checked={language === 'ha'}
      aria-describedby="language-toggle-state"
      title={t(nextLanguage === 'ha' ? 'Switch language to Hausa' : 'Switch language to English')}
      onClick={() => setLanguage(nextLanguage)}
    >
      <Globe2 aria-hidden="true" className="language-toggle-globe" />
      <span className="language-toggle-track" aria-hidden="true">
        <span className="language-toggle-option">EN</span>
        <span className="language-toggle-option">HA</span>
        <span className="language-toggle-thumb" />
      </span>
      <span id="language-toggle-state" className="sr-only">{language === 'ha' ? 'Hausa' : 'English'}</span>
    </button>
  )
}
