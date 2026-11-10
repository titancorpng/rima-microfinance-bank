'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslate } from '@/lib/language'

type FAQItem = {
  question: string
  answer: string
  id?: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslate()

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const answerId = `faq-answer-${index}`

        return (
          <article id={item.id} className={`faq-item${isOpen ? ' faq-item-open' : ''}`} key={item.question}>
            <h3>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{t(item.question)}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-answer"
              id={answerId}
              aria-hidden={!isOpen}
            >
              <div className="faq-answer-inner">
                <p>{t(item.answer)}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
