import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/rima-shell'
import { getLeadershipProfile, leadershipProfiles } from '@/components/leadership-data'
import { LocalizedTree } from '@/lib/language'

type ProfilePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return leadershipProfiles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params
  const profile = getLeadershipProfile(slug)?.profile
  if (!profile) return { title: 'Leadership profile' }

  return {
    title: profile.name,
    description: `Meet ${profile.name} and learn about their professional experience and leadership focus at RIMA Microfinance Bank.`,
  }
}

export default async function LeadershipProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params
  const entry = getLeadershipProfile(slug)
  if (!entry) notFound()
  const { profile } = entry
  const isManagementProfile = entry.group === 'management'
  const directoryHref = isManagementProfile
    ? '/leadership?tab=management-team'
    : '/leadership?tab=board-of-directors'
  const directoryLabel = isManagementProfile ? 'Back to Management Team' : 'Back to Board of Directors'
  const profileLabel = isManagementProfile ? 'MANAGEMENT TEAM / PROFILE' : 'BOARD OF DIRECTORS / PROFILE'
  const directoryCta = isManagementProfile ? 'Explore the Management Team' : 'Explore the Board'

  return (
    <PageShell>
      <LocalizedTree>
      <article className="editorial-page leadership-profile-page">
        <Link className="leadership-back-link" href={directoryHref}>
          <ArrowLeft aria-hidden="true" /> {directoryLabel}
        </Link>
        <header className="leadership-profile-hero">
          <div className="leadership-profile-portrait" aria-hidden="true">
            {profile.portraitSrc ? (
              <Image
                className={`leadership-profile-photo${profile.portraitFit === 'cover' ? ' leadership-photo-cover' : ''}${profile.portraitFocus ? ` leadership-photo-focus-${profile.portraitFocus}` : ''}`}
                src={profile.portraitSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 780px) 90vw, 40vw"
              />
            ) : (
              <span>{profile.initials}</span>
            )}
            <small>RIMA / LEADERSHIP</small>
          </div>
          <div className="leadership-profile-intro">
            <p className="rima-eyebrow">{profileLabel}</p>
            <h1>{profile.name}</h1>
            <p className="leadership-profile-title">{profile.title}</p>
            <div className="leadership-discipline-list">
              {profile.disciplines.map((discipline) => <span key={discipline}>{discipline}</span>)}
            </div>
          </div>
        </header>
        <div className={`leadership-profile-content ${profile.education.length ? '' : 'leadership-profile-content-single'}`}>
          <section>
            {profile.profileSections ? (
              profile.profileSections.map((section) => (
                <section className="leadership-profile-subsection" key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))
            ) : (
              <>
                <p className="rima-eyebrow">CAREER OVERVIEW</p>
                <h2>Experience shaped by <span>service.</span></h2>
                {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </>
            )}
          </section>
          {profile.education.length > 0 && (
            <aside className="leadership-education">
              <p className="rima-eyebrow">EDUCATION &amp; QUALIFICATIONS</p>
              <ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          )}
        </div>
        {profile.appointmentNote && <p className="leadership-source-note">{profile.appointmentNote}</p>}
        <Link className="rima-button leadership-return-cta" href={directoryHref}>
          {directoryCta} <ArrowUpRight aria-hidden="true" />
        </Link>
      </article>
      </LocalizedTree>
    </PageShell>
  )
}
