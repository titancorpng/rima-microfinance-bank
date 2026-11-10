'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useTranslate } from '@/lib/language'

type PhotoFeatureProps = {
  image: string
  alt: string
  eyebrow: string
  title: string
  description: string
  href?: string
  linkLabel?: string
  imageSide?: 'left' | 'right'
}

const pageFeatures: Record<string, PhotoFeatureProps> = {
  '/about': {
    image: '/image2.jpg',
    alt: 'Customers meeting with a Rima banking team in a welcoming branch lounge',
    eyebrow: 'OUR ROOTS / OUR PEOPLE',
    title: 'A familiar place to start.',
    description:
      'Good banking begins with listening. We aim to make every conversation clear, welcoming and grounded in the needs of the people we serve.',
    href: '/our-story',
    linkLabel: 'Discover our story',
    imageSide: 'left',
  },
  '/our-story': {
    image: '/image1.jpg',
    alt: 'Customers and staff working together at a Rima Microfinance Bank service desk',
    eyebrow: 'SERVICE THAT STARTS WITH PEOPLE',
    title: 'Community is more than a place.',
    description:
      'It is the trust built in everyday conversations, the support behind a small business and the care that helps families plan what comes next.',
    href: '/personal-banking',
    linkLabel: 'Explore personal banking',
  },
  '/personal-banking': {
    image: '/image2.jpg',
    alt: 'Customers meeting with a Rima banking team in a welcoming branch lounge',
    eyebrow: 'PERSONAL BANKING / HERE TO HELP',
    title: 'Make a plan that feels like yours.',
    description:
      'Whether you are saving for a household goal or managing everyday money, our team can help explain the options and terms available.',
    href: '/support',
    linkLabel: 'Ask our team',
    imageSide: 'left',
  },
  '/business-banking': {
    image: '/image7.jpg',
    alt: 'A customer making a purchase with a bank payment terminal',
    eyebrow: 'BUSINESS BANKING / BUILT AROUND YOUR WORK',
    title: 'Support for the work you do.',
    description:
      'From a local shop to a growing enterprise, speak with Rima about organising business funds and the account requirements that apply.',
    href: '/support',
    linkLabel: 'Start a business enquiry',
  },
  '/mobile-banking': {
    image: '/image6.jpg',
    alt: 'A customer using the Rima MFB digital banking app on a smartphone',
    eyebrow: 'DIGITAL BANKING / ACCESS ON THE GO',
    title: 'A clearer view of everyday banking.',
    description:
      'The app is being prepared for public release. Official download links will appear here once approved and available.',
    href: '/app#download',
    linkLabel: 'App availability',
    imageSide: 'left',
  },
  '/support': {
    image: '/image8.jpg',
    alt: 'A customer talking with a Rima staff member at a branch',
    eyebrow: 'CUSTOMER CARE / WE ARE HERE TO HELP',
    title: 'A conversation can move things forward.',
    description:
      'For account questions, transaction concerns or service feedback, use a support channel that Rima has officially verified.',
    href: '/faq',
    linkLabel: 'Browse common questions',
  },
  '/faq': {
    image: '/image7.jpg',
    alt: 'A customer making a purchase with a bank payment terminal',
    eyebrow: 'EVERYDAY ACCESS / SHOP WITH CONFIDENCE',
    title: 'Questions are part of good banking.',
    description:
      'Find practical answers about accounts, app access, transaction status and keeping your banking details safe.',
    href: '/security',
    linkLabel: 'Read security guidance',
    imageSide: 'left',
  },
}

export function PhotoFeature({
  image,
  alt,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  imageSide = 'right',
}: PhotoFeatureProps) {
  const t = useTranslate()
  return (
    <section className={`photo-feature photo-feature-${imageSide}`}>
      <div className="photo-feature-image">
        <Image src={image} alt={t(alt)} fill sizes="(max-width: 780px) 100vw, 50vw" />
        <span className="photo-feature-image-wash" aria-hidden="true" />
      </div>
      <div className="photo-feature-copy">
        <p className="rima-eyebrow">{t(eyebrow)}</p>
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
        {href && linkLabel && (
          <Link className="photo-feature-link" href={href}>
            {t(linkLabel)} <ArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  )
}

export function PagePhotoFeature({ pathname }: { pathname: string }) {
  const feature = pageFeatures[pathname]
  return feature ? <PhotoFeature {...feature} /> : null
}
