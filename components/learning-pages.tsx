'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3, Search } from 'lucide-react'
import { learningArticles, type LearningArticle, type LocalizedCopy } from '@/lib/learning-articles'
import { useLanguage } from '@/lib/language'

function copy(value: LocalizedCopy, language: 'en' | 'ha') {
  return value[language]
}

const categories = [
  { en: 'All topics', ha: 'Dukkan batutuwa' },
  ...learningArticles
    .map((article) => article.category)
    .filter((category, index, values) => values.findIndex((value) => value.en === category.en) === index),
]

export function LearningHubPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('All topics')
  const [query, setQuery] = useState('')
  const featured = learningArticles[0]
  const visibleArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    return learningArticles.filter((article) => {
      const matchesCategory = activeCategory === 'All topics' || article.category.en === activeCategory
      const showFeaturedAgain = activeCategory !== 'All topics' || Boolean(normalizedQuery)
      const matchesQuery = !normalizedQuery || [
        article.title.en,
        article.title.ha,
        article.summary.en,
        article.summary.ha,
        article.category.en,
        article.category.ha,
      ].some((value) => value.toLocaleLowerCase().includes(normalizedQuery))
      return matchesCategory && matchesQuery && (article.slug !== featured.slug || showFeaturedAgain)
    })
  }, [activeCategory, featured.slug, query])

  return (
    <div className="learning-page">
      <header className="learning-hero">
        <div className="learning-hero-copy">
          <p className="rima-eyebrow">RIMA / LEARNING &amp; MONEY</p>
          <h1>
            {language === 'ha' ? 'Ilimi don' : 'Knowledge for'}<br />
            <span>{language === 'ha' ? 'zaɓin yau da kullum.' : 'everyday decisions.'}</span>
          </h1>
          <p>
            {language === 'ha'
              ? 'Jagorori masu sauƙi game da asusu, ajiya, kuɗin Musulunci da kare bayanan banki — a Turanci da Hausa.'
              : 'Clear, practical guides to accounts, saving, Islamic finance and safer banking — written in English and Hausa.'}
          </p>
        </div>
        <div className="learning-hero-index" aria-hidden="true">
          <span>FIELD NOTES</span>
          <strong>01<span>—</span>08</strong>
          <small>KNOWLEDGE / CONFIDENCE / PROGRESS</small>
        </div>
      </header>

      <section className="learning-featured" aria-labelledby="learning-featured-title">
        <div className="learning-featured-art" aria-hidden="true">
          <span>RIMA</span>
          <strong>Money<br />matters.</strong>
          <i>LEARN / 01</i>
        </div>
        <div className="learning-featured-copy">
          <p className="rima-eyebrow">{language === 'ha' ? 'JAGORA / FITATTU' : 'EDITOR’S STARTING POINT'}</p>
          <p className="learning-category">{copy(featured.category, language)}</p>
          <h2 id="learning-featured-title">{copy(featured.title, language)}</h2>
          <p>{copy(featured.summary, language)}</p>
          <Link className="learning-read-link" href={`/learn/${featured.slug}`}>
            {language === 'ha' ? 'Karanta jagorar' : 'Read the guide'} <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="learning-library" aria-labelledby="learning-library-title">
        <div className="learning-library-heading">
          <div>
            <p className="rima-eyebrow">THE KNOWLEDGE LIBRARY</p>
            <h2 id="learning-library-title">
              {language === 'ha' ? 'Karanta. Fahimta.' : 'Read. Understand.'}<br />
              <span>{language === 'ha' ? 'Yanke shawara.' : 'Choose with confidence.'}</span>
            </h2>
          </div>
          <label className="learning-search">
            <Search aria-hidden="true" />
            <span className="sr-only">{language === 'ha' ? 'Nemo jagorori' : 'Search learning guides'}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={language === 'ha' ? 'Nemo jagorori…' : 'Search guides…'}
            />
          </label>
        </div>
        <div className="learning-filters" role="group" aria-label={language === 'ha' ? 'Tace batutuwa' : 'Filter topics'}>
          {categories.map((category) => (
            <button
              type="button"
              key={category.en}
              aria-pressed={activeCategory === category.en}
              onClick={() => setActiveCategory(category.en)}
            >
              {copy(category, language)}
            </button>
          ))}
        </div>
        <div className="learning-article-grid">
          {visibleArticles.map((article, index) => (
            <LearningArticleCard article={article} index={index} key={article.slug} language={language} />
          ))}
          {visibleArticles.length === 0 && (
            <p className="learning-empty">
              {language === 'ha' ? 'Ba a sami jagora da ya dace ba. Gwada wata kalma ko wani fanni.' : 'No guides match that search. Try another term or topic.'}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

function LearningArticleCard({
  article,
  index,
  language,
}: {
  article: LearningArticle
  index: number
  language: 'en' | 'ha'
}) {
  return (
    <Link className="learning-article-card" href={`/learn/${article.slug}`}>
      <div className="learning-article-card-topline">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{copy(article.category, language)}</span>
      </div>
      <BookOpen aria-hidden="true" className="learning-card-icon" />
      <h3>{copy(article.title, language)}</h3>
      <p>{copy(article.summary, language)}</p>
      <span className="learning-card-footer">
        <span><Clock3 aria-hidden="true" /> {article.readingTime} {language === 'ha' ? 'minti' : 'min read'}</span>
        <ArrowUpRight aria-hidden="true" />
      </span>
    </Link>
  )
}

export function LearningArticlePage({ article }: { article: LearningArticle }) {
  const { language } = useLanguage()
  const articleIndex = learningArticles.findIndex((item) => item.slug === article.slug)
  const nextArticle = learningArticles[(articleIndex + 1) % learningArticles.length]

  return (
    <article className="learning-detail">
      <Link className="learning-back-link" href="/learn">
        <ArrowLeft aria-hidden="true" /> {language === 'ha' ? 'Koma ga cibiyar ilimi' : 'Back to the learning hub'}
      </Link>
      <header className="learning-detail-hero">
        <p className="rima-eyebrow">RIMA / LEARNING &amp; MONEY</p>
        <div className="learning-detail-meta">
          <span>{copy(article.category, language)}</span>
          <span><Clock3 aria-hidden="true" /> {article.readingTime} {language === 'ha' ? 'minti' : 'min read'}</span>
        </div>
        <h1>{copy(article.title, language)}</h1>
        <p className="learning-detail-summary">{copy(article.summary, language)}</p>
      </header>
      <div className="learning-detail-layout">
        <aside className="learning-detail-aside">
          <span>{language === 'ha' ? 'A CIKIN WANNAN JAGORA' : 'IN THIS GUIDE'}</span>
          {article.sections.map((section, index) => (
            <a key={section.heading.en} href={`#learning-section-${index + 1}`}>
              <small>0{index + 1}</small>{copy(section.heading, language)}
            </a>
          ))}
        </aside>
        <div className="learning-detail-content">
          {article.sections.map((section, index) => (
            <section id={`learning-section-${index + 1}`} key={section.heading.en}>
              <p className="rima-eyebrow">0{index + 1} / {copy(article.category, language)}</p>
              <h2>{copy(section.heading, language)}</h2>
              <p>{copy(section.body, language)}</p>
            </section>
          ))}
        </div>
      </div>
      <footer className="learning-detail-next">
        <div>
          <p className="rima-eyebrow">{language === 'ha' ? 'JAGORA NA GABA' : 'NEXT GUIDE'}</p>
          <h2>{copy(nextArticle.title, language)}</h2>
        </div>
        <Link className="rima-button" href={`/learn/${nextArticle.slug}`}>
          {language === 'ha' ? 'Ci gaba da karatu' : 'Continue learning'} <ArrowUpRight aria-hidden="true" />
        </Link>
      </footer>
    </article>
  )
}
