'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cookie, Settings2, X } from 'lucide-react'
import { useTranslate } from '@/lib/language'

const preferenceKey = 'rima-privacy-preferences-v1'
const openPreferencesEvent = 'rima:open-cookie-preferences'

type Preferences = {
  essential: true
  analytics: boolean
}

function readPreferences(): Preferences | null {
  const stored = window.localStorage.getItem(preferenceKey)
  if (!stored) return null

  const parsed: unknown = JSON.parse(stored)
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    !('essential' in parsed) ||
    parsed.essential !== true ||
    !('analytics' in parsed) ||
    typeof parsed.analytics !== 'boolean'
  ) {
    throw new Error('Saved privacy preferences are not in the expected format.')
  }

  return parsed as Preferences
}

export function CookiePreferencesButton() {
  const t = useTranslate()
  return (
    <button
      className="cookie-preferences-link"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openPreferencesEvent))}
    >
      {t('Cookie preferences')}
    </button>
  )
}

export function CookieConsent() {
  const t = useTranslate()
  const [visible, setVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [storageError, setStorageError] = useState('')

  useEffect(() => {
    try {
      const saved = readPreferences()
      if (saved) {
        setAnalytics(saved.analytics)
        setVisible(false)
      } else {
        setVisible(true)
      }
    } catch (error) {
      console.error('Unable to read saved Rima privacy preferences.', error)
      setStorageError('We could not read your saved choice. You can still continue with essential storage only.')
      setVisible(true)
    }

    const onOpenPreferences = () => {
      setVisible(true)
      setSettingsOpen(true)
      setStorageError('')
      try {
        setAnalytics(readPreferences()?.analytics ?? false)
      } catch (error) {
        console.error('Unable to load Rima privacy preferences.', error)
      }
    }
    window.addEventListener(openPreferencesEvent, onOpenPreferences)
    return () => window.removeEventListener(openPreferencesEvent, onOpenPreferences)
  }, [])

  const save = (allowAnalytics: boolean) => {
    const preferences: Preferences = { essential: true, analytics: allowAnalytics }
    try {
      window.localStorage.setItem(preferenceKey, JSON.stringify(preferences))
      setAnalytics(allowAnalytics)
      setStorageError('')
      setVisible(false)
      setSettingsOpen(false)
    } catch (error) {
      console.error('Unable to save Rima privacy preferences.', error)
      setStorageError('Your browser could not save this choice. Check its storage settings and try again.')
    }
  }

  if (!visible) return null

  return (
    <div className="cookie-consent-layer">
      <section
        className="cookie-consent-panel"
        aria-labelledby="cookie-consent-title"
        role="region"
      >
        <div className="cookie-consent-icon"><Cookie aria-hidden="true" /></div>
        <div className="cookie-consent-copy">
          <div className="cookie-consent-heading">
            <div>
                      <p className="rima-eyebrow">{t(settingsOpen ? 'PRIVACY / YOUR CHOICE' : 'RIMA / YOUR PRIVACY')}</p>
                      <h2 id="cookie-consent-title">{t(settingsOpen ? 'Cookie preferences' : 'We value your privacy.')}</h2>
            </div>
            {settingsOpen && (
              <button className="cookie-consent-close" type="button" aria-label={t('Close preferences')} onClick={() => setSettingsOpen(false)}>
                <X aria-hidden="true" />
              </button>
            )}
          </div>
          {settingsOpen ? (
            <>
              <p>{t('Necessary browser storage keeps basic site preferences working and is always on. Optional analytics are not currently active on this website; this preference does not enable any tracking.')}</p>
              <label className="cookie-preference-row">
                <span><strong>{t('Optional analytics preference')}</strong><small>{t('Saved for your choice. Analytics are currently not active.')}</small></span>
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
              </label>
              <div className="cookie-consent-actions">
                <button className="cookie-action cookie-action-secondary" type="button" onClick={() => save(false)}>{t('Essential only')}</button>
                <button className="cookie-action" type="button" onClick={() => save(analytics)}>{t('Save preferences')}</button>
              </div>
            </>
          ) : (
            <>
              <p>{t('We use essential browser storage for basic site behaviour and to remember your choice. Optional analytics are not currently active. You can review or change your choice at any time.')}</p>
              {storageError && <p className="cookie-storage-error" role="alert">{storageError}</p>}
              <div className="cookie-consent-actions">
                <button className="cookie-action cookie-action-secondary" type="button" onClick={() => setSettingsOpen(true)}>
                  <Settings2 aria-hidden="true" /> {t('Preferences')}
                </button>
                <button className="cookie-action cookie-action-secondary" type="button" onClick={() => save(false)}>{t('Essential only')}</button>
                <button className="cookie-action" type="button" onClick={() => save(true)}>{t('Allow optional analytics')}</button>
              </div>
              <Link className="cookie-policy-link" href="/cookies" onClick={() => setVisible(false)}>{t('Read the Cookie Policy')}</Link>
            </>
          )}
          {storageError && settingsOpen && <p className="cookie-storage-error" role="alert">{storageError}</p>}
        </div>
      </section>
    </div>
  )
}
