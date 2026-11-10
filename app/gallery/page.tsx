'use client'

import Image from 'next/image'
import { PageShell } from '@/components/rima-shell'

const images = [
  { src: '/image1.jpg', alt: 'Rima-branded service counter with staff and visitors', caption: 'Community service' },
  { src: '/image2.jpg', alt: 'Rima-branded branch interior and customer service area', caption: 'A welcoming space' },
  { src: '/image3.jpg', alt: 'Rima-branded branch reception and team', caption: 'Local connection' },
  { src: '/image4.jpg', alt: 'Banker speaking with a small-business owner', caption: 'Business conversations' },
  { src: '/image5.jpg', alt: 'Account conversation with a local textiles merchant', caption: 'Supporting enterprise' },
  { src: '/image6.jpg', alt: 'Rima-branded banking app displayed on a mobile phone', caption: 'Digital banking' },
  { src: '/image7.jpg', alt: 'Merchant payment interaction at a shop counter', caption: 'Everyday commerce' },
  { src: '/image8.jpg', alt: 'Exterior of a Rima-branded bank building', caption: 'A future-facing identity' },
]

export default function GalleryPage() {
  return (
    <PageShell>
      <article className="editorial-page gallery-page">
        <header className="gallery-heading">
          <p className="rima-eyebrow">RIMA / IMAGE GALLERY</p>
          <h1>Community, in <span>focus.</span></h1>
          <p className="lead">A curated collection of Rima-branded imagery centred on community, local enterprise and modern banking.</p>
        </header>
        <div className="gallery-grid">
          {images.map((item, index) => (
            <figure className={`gallery-card gallery-card-${(index % 4) + 1}`} key={item.src}>
              <div className="gallery-card-image">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                />
              </div>
              <figcaption><span>0{index + 1}</span><strong>{item.caption}</strong></figcaption>
            </figure>
          ))}
        </div>
      </article>
    </PageShell>
  )
}
