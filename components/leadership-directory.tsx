'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { directorProfiles, managementProfiles } from '@/components/leadership-data'
import { LocalizedTree, useTranslate } from '@/lib/language'

type LeadershipTab = 'board-of-directors' | 'management-team'

export function LeadershipDirectory({ activeTab }: { activeTab: LeadershipTab }) {
  const isBoard = activeTab === 'board-of-directors'
  const profiles = isBoard ? directorProfiles : managementProfiles
  const t = useTranslate()

  return (
    <LocalizedTree><article className="editorial-page leadership-page">
      <header className="leadership-heading">
        <p className="rima-eyebrow">RIMA / PEOPLE AND GOVERNANCE</p>
        <h1>Leadership with <span>purpose.</span></h1>
        <p className="lead">
          Meet the people whose professional experience and service help shape Rima Microfinance Bank.
        </p>
      </header>

      <nav className="leadership-tabs" aria-label="Leadership profiles">
        <Link
          href="/leadership?tab=board-of-directors"
          aria-current={isBoard ? 'page' : undefined}
          className={isBoard ? 'leadership-tab-active' : ''}
        >
          Board of Directors
        </Link>
        <Link
          href="/leadership?tab=management-team"
          aria-current={!isBoard ? 'page' : undefined}
          className={!isBoard ? 'leadership-tab-active' : ''}
        >
          Management Team
        </Link>
      </nav>

      <section className="leadership-section" aria-labelledby={isBoard ? 'board-heading' : 'management-heading'}>
        <div className="leadership-section-intro">
          <div>
            <p className="rima-eyebrow">{isBoard ? '01 / GOVERNANCE' : '02 / EXECUTIVE LEADERSHIP'}</p>
            <h2 id={isBoard ? 'board-heading' : 'management-heading'}>
              {isBoard ? <>Board of <span>Directors.</span></> : <>Management <span>Team.</span></>}
            </h2>
          </div>
          <p>
            {isBoard
              ? 'The Board brings together accomplished professionals whose experience, judgement and commitment to responsible governance help guide Rima’s growth and strengthen the communities we serve. Explore each profile to learn more about their leadership and areas of expertise.'
              : 'Meet the professionals leading Rima’s day-to-day operations and service delivery.'}
          </p>
        </div>
        <div className={`leadership-grid${isBoard ? '' : ' leadership-grid-management'}`}>
          {profiles.map((profile, index) => (
            <article className="leadership-card" key={profile.slug}>
              <Link
                className="leadership-card-portrait"
                href={`/leadership/${profile.slug}`}
                aria-label={`Read ${profile.name}'s profile`}
              >
                <span className="leadership-card-index">{String(index + 1).padStart(2, '0')}</span>
                {profile.portraitSrc ? (
                  <Image
                    className={`leadership-card-photo${profile.portraitFit === 'cover' ? ' leadership-photo-cover' : ''}${profile.portraitFocus ? ` leadership-photo-focus-${profile.portraitFocus}` : ''}`}
                    src={profile.portraitSrc}
                    alt=""
                    fill
                    sizes="(max-width: 480px) 42vw, (max-width: 780px) 45vw, 30vw"
                  />
                ) : (
                  <span className="leadership-initials" aria-hidden="true">{profile.initials}</span>
                )}
                <span className="leadership-card-link">View profile <ArrowUpRight aria-hidden="true" /></span>
              </Link>
              <div className="leadership-card-copy">
                <p className="rima-eyebrow">{profile.title}</p>
                <h3><Link href={`/leadership/${profile.slug}`}>{profile.name}</Link></h3>
                <p>{profile.disciplines.map((discipline) => t(discipline)).join(' / ')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article></LocalizedTree>
  )
}
