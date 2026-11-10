'use client'

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { Bot, ChevronDown, LoaderCircle, MessageCircle, Send, ShieldAlert, Trash2, X } from 'lucide-react'
import { useTranslate } from '@/lib/language'

export const SITE_ASSISTANT_OPEN_EVENT = 'rima-assistant:open'

const CHAT_SESSION_KEY = 'rima-assistant-chat-v1'
const MAX_STORED_MESSAGES = 60
const MAX_API_HISTORY = 6

type ChatMessage = {
  id: number
  role: 'user' | 'assistant'
  content: string
  sources?: { title: string; href: string }[]
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (
    !value
    || typeof value !== 'object'
    || !('id' in value)
    || typeof value.id !== 'number'
    || !('role' in value)
    || (value.role !== 'user' && value.role !== 'assistant')
    || !('content' in value)
    || typeof value.content !== 'string'
  ) {
    return false
  }

  return !('sources' in value)
    || value.sources === undefined
    || (Array.isArray(value.sources) && value.sources.every((source) =>
      source
      && typeof source === 'object'
      && 'title' in source
      && typeof source.title === 'string'
      && 'href' in source
      && typeof source.href === 'string'
      && source.href.startsWith('/')
      && !source.href.startsWith('//'),
    ))
}

function likelyCredential(text: string): boolean {
  return /\b(?:pin|password|passcode|otp|one[- ]time (?:password|passcode)|bvn|nin)\s*(?:is|:|=)\s*[\p{L}\p{N}-]{3,}/iu.test(text)
    || /\b(?:pin|otp|one[- ]time (?:password|passcode))\s*(?:(?:is|:|=)\s*)?\d{4,8}\b/iu.test(text)
    || /\b(?:password|passcode)\s+(?:is\s+)?[\p{L}\p{N}-]{8,}\b/iu.test(text)
    || /\b(?:bvn|nin)\s*(?:(?:is|:|=)\s*)?\d{8,11}\b/iu.test(text)
    || /\baccount number\s*(?:is|:|=)\s*[\p{L}\p{N}-]{5,}/iu.test(text)
    || /\baccount number\s+\d{5,}\b/iu.test(text)
    || /\b\d{10,}\b/u.test(text)
    || /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/iu.test(text)
}

export function SiteAssistantWidget() {
  const t = useTranslate()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sessionRestored, setSessionRestored] = useState(false)
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const wasOpen = useRef(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(CHAT_SESSION_KEY)
      if (stored) {
        const parsed: unknown = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.every(isChatMessage)) {
          setMessages(parsed.slice(-MAX_STORED_MESSAGES))
        } else {
          sessionStorage.removeItem(CHAT_SESSION_KEY)
        }
      }
    } catch (error) {
      console.warn('RIMA chat session could not be restored.', error)
    } finally {
      setSessionRestored(true)
    }
  }, [])

  useEffect(() => {
    if (!sessionRestored) return

    try {
      if (messages.length) {
        sessionStorage.setItem(
          CHAT_SESSION_KEY,
          JSON.stringify(messages.slice(-MAX_STORED_MESSAGES)),
        )
      } else {
        sessionStorage.removeItem(CHAT_SESSION_KEY)
      }
    } catch (error) {
      console.warn('RIMA chat session could not be saved.', error)
    }
  }, [messages, sessionRestored])

  useEffect(() => {
    const openAssistant = () => setOpen(true)
    window.addEventListener(SITE_ASSISTANT_OPEN_EVENT, openAssistant)
    return () => window.removeEventListener(SITE_ASSISTANT_OPEN_EVENT, openAssistant)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus({ preventScroll: true })
    else if (wasOpen.current) triggerRef.current?.focus()
    wasOpen.current = open
  }, [open])

  useEffect(() => {
    if (!open || sending) return
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }))
    return () => window.cancelAnimationFrame(frame)
  }, [open, sending])

  useEffect(() => {
    if (open && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, open, sending])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const question = draft.trim()
    if (!question || sending) return

    const displayQuestion = likelyCredential(question)
      ? t('Sensitive details omitted')
      : question
    const nextMessages: ChatMessage[] = [
      ...messages,
      { id: Date.now(), role: 'user', content: displayQuestion },
    ]
    setMessages(nextMessages)
    setDraft('')
    setSending(true)

    try {
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages.slice(-MAX_API_HISTORY).map(({ role, content }) => ({ role, content })),
            { role: 'user', content: question },
          ],
        }),
      })
      const result = await response.json() as {
        reply?: unknown
        error?: unknown
        sources?: unknown
      }

      if (!response.ok) {
        const errorText = typeof result.error === 'string' ? result.error : t('The assistant is temporarily unavailable.')
        setMessages((current) => [...current, {
          id: Date.now() + 1,
          role: 'assistant',
          content: errorText,
        }])
        return
      }

      const reply = result.reply
      if (typeof reply !== 'string') throw new Error('Invalid assistant response')
      const sources: { title: string; href: string }[] = Array.isArray(result.sources)
        ? result.sources.flatMap((item) => {
          if (
            item
            && typeof item === 'object'
            && 'title' in item
            && typeof item.title === 'string'
            && 'href' in item
            && typeof item.href === 'string'
            && item.href.startsWith('/')
            && !item.href.startsWith('//')
          ) {
            return [{ title: item.title, href: item.href }]
          }
          return []
        })
        : []
      setMessages((current) => [...current, {
        id: Date.now() + 1,
        role: 'assistant',
        content: reply,
        sources,
      }])
    } catch {
      setMessages((current) => [...current, {
        id: Date.now() + 1,
        role: 'assistant',
        content: t('The assistant is temporarily unavailable.'),
      }])
    } finally {
      setSending(false)
    }
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === 'Enter'
      && !event.shiftKey
      && !event.nativeEvent.isComposing
      && !window.matchMedia('(pointer: coarse)').matches
    ) {
      event.preventDefault()
      event.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <div className="site-assistant">
      {open && (
        <section
          className="site-assistant-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="site-assistant-title"
        >
          <header className="site-assistant-header">
            <span className="site-assistant-avatar"><Bot aria-hidden="true" /></span>
            <div className="site-assistant-heading">
              <h2 id="site-assistant-title">RIMA</h2>
              <span className="site-assistant-role">{t('Customer care assistant')}</span>
              <p className="site-assistant-status is-ready">
                <span aria-hidden="true" />{t('Here to help with everyday banking')}
              </p>
            </div>
            {messages.length > 0 && (
              <button
                className="site-assistant-icon-button"
                type="button"
                aria-label={t('Clear conversation')}
                title={t('Clear conversation')}
                onClick={() => setMessages([])}
              >
                <Trash2 aria-hidden="true" />
              </button>
            )}
            <button
              className="site-assistant-icon-button"
              type="button"
              aria-label={t('Close assistant')}
              title={t('Close assistant')}
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </header>

          <div className="site-assistant-notice">
            <ShieldAlert aria-hidden="true" />
            <p>{t('General website information only. Never share your PIN, password, OTP, BVN, NIN or account details here.')}</p>
          </div>

          <div className="site-assistant-messages" ref={listRef} aria-live="polite" aria-relevant="additions text">
            {messages.length === 0 && (
              <div className="site-assistant-welcome">
                <span className="site-assistant-welcome-icon"><MessageCircle aria-hidden="true" /></span>
                <h3>{t('How can I help?')}</h3>
                <p>{t('Tell me what you need help with. I can guide you through common account-access and payment questions using Rima’s published information, and reply in Hausa when you write in Hausa.')}</p>
              </div>
            )}
            {messages.map((message) => (
              <article className={`site-assistant-message is-${message.role}`} key={message.id}>
                <p>{message.content}</p>
                {message.sources && message.sources.length > 0 && (
                  <div className="site-assistant-sources">
                    <span>{t('Sources')}</span>
                    {message.sources.map((source) => (
                      <a href={source.href} key={`${message.id}-${source.href}`}>{source.title}</a>
                    ))}
                  </div>
                )}
              </article>
            ))}
            {sending && (
              <p className="site-assistant-thinking" role="status">
                <span className="site-assistant-thinking-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                {t('Preparing an answer')}
              </p>
            )}
          </div>

          <form className="site-assistant-form" onSubmit={submitMessage}>
            <label className="sr-only" htmlFor="site-assistant-question">{t('Ask a question')}</label>
            <textarea
              id="site-assistant-question"
              ref={inputRef}
              value={draft}
              maxLength={MAX_MESSAGE_LENGTH}
              rows={2}
              placeholder={t('Ask a question')}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={onInputKeyDown}
            />
            <button
              type="submit"
              aria-label={t('Send question')}
              disabled={sending || !draft.trim()}
              title={t('Send question')}
            >
              {sending ? <LoaderCircle aria-hidden="true" /> : <Send aria-hidden="true" />}
            </button>
            <span className="site-assistant-input-hint">{t('Enter sends on desktop · Enter adds a line on touch devices')}</span>
          </form>
          <footer className="site-assistant-footer">
            <a href="/privacy">{t('Privacy')}</a>
            <span>{t('AI answers can be mistaken. Verify important details.')}</span>
          </footer>
        </section>
      )}

      <button
        ref={triggerRef}
        className={`site-assistant-trigger${open ? ' is-open' : ''}`}
        type="button"
        aria-label={open ? t('Close assistant') : t('Open RIMA customer care')}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <ChevronDown aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
        <span>{t(open ? 'Close assistant' : 'Ask RIMA')}</span>
      </button>
    </div>
  )
}

const MAX_MESSAGE_LENGTH = 1_200

export function SiteAssistantSupportEntry() {
  const t = useTranslate()

  return (
    <section className="assistant-support-entry" aria-labelledby="assistant-support-title">
      <div className="assistant-support-copy">
        <p className="rima-eyebrow">{t('RIMA / CUSTOMER CARE')}</p>
        <h2 id="assistant-support-title">{t('Help with Rima and common account questions.')}</h2>
        <p>{t('RIMA can help with common account-access, pending-payment, app, fee and security questions using information published by Rima. For personal account changes, transaction actions or formal complaints, contact the bank through a verified support channel.')}</p>
        <p className="assistant-support-status" aria-live="polite">
          <span className="is-ready" aria-hidden="true" />
          {t('Ask RIMA about everyday banking')}
        </p>
      </div>
      <button
        className="rima-button"
        type="button"
        onClick={() => window.dispatchEvent(new Event(SITE_ASSISTANT_OPEN_EVENT))}
      >
        {t('Chat with RIMA')}<MessageCircle aria-hidden="true" />
      </button>
    </section>
  )
}
