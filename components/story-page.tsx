'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PageShell } from '@/components/rima-shell'
import { LocalizedTree } from '@/lib/language'
import { StoryMetricsCarousel } from '@/components/story-metrics-carousel'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function StoryPage() {
  const storyRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.story-hero-kicker', { autoAlpha: 0, y: 14, duration: 0.5 })
        .from('.story-hero-title', { autoAlpha: 0, y: 42, duration: 0.9 }, '-=0.2')
        .from('.story-hero-summary, .story-hero-scroll', {
          autoAlpha: 0,
          y: 18,
          duration: 0.65,
          stagger: 0.12,
        }, '-=0.35')

      gsap.to('.story-hero-image', {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.45,
        },
      })

      gsap.utils.toArray<HTMLElement>('.story-reveal').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            once: true,
          },
        })
      })

      gsap.from('.story-value-row', {
        autoAlpha: 0,
        y: 22,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.story-values-list',
          start: 'top 82%',
          once: true,
        },
      })
    })

    return () => media.revert()
  }, { scope: storyRef })

  return (
    <PageShell>
      <LocalizedTree><article ref={storyRef} className="story-experience">
        <section className="story-hero" aria-labelledby="story-title">
          <Image
            className="story-hero-image"
            src="/rimahero1.jpg"
            alt="The exterior of a Rima Microfinance Bank branch"
            fill
            priority
            sizes="100vw"
          />
          <div className="story-hero-shade" aria-hidden="true" />
          <div className="story-hero-grid" aria-hidden="true" />
          <div className="story-hero-copy">
            <p className="story-hero-kicker">OUR STORY <span>/</span> THE RIMA NAME</p>
            <h1 id="story-title" className="story-hero-title">
              Our name.<br />
              Our roots.<br />
              <span>Our purpose.</span>
            </h1>
            <p className="story-hero-summary">
              Inspired by the Rima River. Committed to the people it sustains.
            </p>
            <a className="story-hero-scroll" href="#the-name">
              Explore our story <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="story-hero-caption">ROOTED IN THE NORTH-WEST <span>·</span> GROWING WITH OUR COMMUNITIES</p>
          <span className="story-hero-index" aria-hidden="true">01 <i /> 03</span>
        </section>

        <section className="story-origin story-reveal" aria-labelledby="story-origin-title">
          <div className="story-origin-heading">
            <p className="rima-eyebrow">ABOUT RIMA MFB · GAME DA MU</p>
            <h2 id="story-origin-title">
              30+ years of community banking <span>in the North.</span>
            </h2>
          </div>
          <div className="story-origin-copy">
            <p>
              Rima Microfinance Bank’s published story begins in 1992 in Gwaranyo LGA,
              Sokoto State. Over more than three decades, its focus has been the financial
              lives of traders, farmers, civil servants and households across Northern Nigeria.
            </p>
            <p>
              Today, Rima is shaping its next chapter around community-rooted service and a
              digital transformation intended to broaden access. “Made For Us, By Us” is a
              commitment to build with the people and communities the bank serves.
            </p>
          </div>
        </section>

        <StoryMetricsCarousel />

        <section id="the-name" className="story-introduction story-reveal">
          <div className="story-section-label">
            <p className="rima-eyebrow">A NAME WITH A SOURCE</p>
            <div className="story-brand-card">
              <Image
                src="/RIMAMFB_mainlogo.jpg"
                alt="RIMA Microfinance Bank emblem with the slogan Made For Us, By Us"
                width={640}
                height={640}
                sizes="(max-width: 780px) 54vw, 250px"
              />
            </div>
            <span>01 / HERITAGE</span>
          </div>
          <div className="story-introduction-copy">
            <h2>A river can sustain more than <span>the land.</span></h2>
            <p>
              In northern Nigeria, water carries a significance that reaches beyond its banks.
              It nourishes the land, sustains livelihoods and shapes the possibilities of
              entire communities. The Rima River is a familiar presence in the North-West
              landscape and a reminder of how closely natural resources, enterprise and
              everyday life are connected.
            </p>
            <p>
              Rima Microfinance Bank takes its name from this river. In that name, we
              recognise a heritage of sustenance, connection and opportunity — qualities
              we aspire to bring to the communities we serve.
            </p>
          </div>
        </section>

        <section className="story-photo-interlude" aria-label="Rima's people and community">
          <Image
            src="/image2.jpg"
            alt="Customers speaking with the Rima team in a welcoming branch"
            fill
            sizes="100vw"
          />
          <div className="story-photo-shade" aria-hidden="true" />
          <p className="story-photo-caption">A CONNECTION TO PLACE.<br /><span>A COMMITMENT TO PEOPLE.</span></p>
          <span className="story-photo-credit">RIMA MICROFINANCE BANK <i /> COMMUNITY FIRST</span>
        </section>

        <section className="story-river-section story-reveal">
          <div className="story-river-heading">
            <p className="rima-eyebrow">A RIVER WOVEN INTO THE LIFE OF THE NORTH</p>
            <h2>The Rima is more than water. <span>It is a mainstay.</span></h2>
          </div>
          <div className="story-river-copy">
            <p>
              The Rima forms part of the wider Sokoto–Rima river system, connected to the
              Niger through the Sokoto River. Across this system, river channels, floodplains,
              pools and reservoirs support fishing and agricultural livelihoods.
            </p>
            <p>
              In a region marked by distinct wet and dry seasons, access to water is a
              foundation of economic activity. The Goronyo reservoir and Middle Rima Valley
              irrigation infrastructure show how this resource can support cultivation and
              food production beyond dependence on rainfall alone.
            </p>
          </div>
        </section>

        <section className="story-values" aria-labelledby="story-values-title">
          <div className="story-values-heading story-reveal">
            <p className="rima-eyebrow">WHAT THE RIVER REPRESENTS</p>
            <h2 id="story-values-title">A living source of <span>possibility.</span></h2>
            <p>
              The river’s story is also a story of the people and enterprise connected to it.
              These are the ideas we carry into our work.
            </p>
          </div>
          <ol className="story-values-list">
            <li className="story-value-row">
              <span className="story-value-number">01</span>
              <h3>Livelihoods</h3>
              <p>
                Farmers preparing a field, fishing households and local businesses all form
                part of the activity sustained by this wider river system.
              </p>
              <span className="story-value-mark" aria-hidden="true">↗</span>
            </li>
            <li className="story-value-row">
              <span className="story-value-number">02</span>
              <h3>Enterprise</h3>
              <p>
                Rice production and processing in the Middle Rima Valley connect cultivation
                with enterprise and income.
              </p>
              <span className="story-value-mark" aria-hidden="true">↗</span>
            </li>
            <li className="story-value-row">
              <span className="story-value-number">03</span>
              <h3>Opportunity</h3>
              <p>
                Resources create greater value when people can put them to productive use.
                That is the lesson we carry into responsible financial services.
              </p>
              <span className="story-value-mark" aria-hidden="true">↗</span>
            </li>
          </ol>
        </section>

        <section className="story-purpose">
          <div className="story-purpose-topline">
            <p className="rima-eyebrow">FROM COMMUNITY ROOTS TO A DIGITAL FUTURE</p>
            <span>02 / PURPOSE</span>
          </div>
          <h2>Technology gives us new ways to serve. Our roots remind us <span>whom we serve.</span></h2>
          <div className="story-purpose-bottom">
            <p>
              We want banking to be understandable to the trader, useful to the small business,
              accessible to the household and responsive to customers whose livelihoods depend
              on careful management of money.
            </p>
            <p>
              We carry the river’s name with pride — and with the responsibility to make that
              name meaningful in our customers’ lives.
            </p>
          </div>
          <Link className="story-purpose-link" href="/personal-banking">
            Explore Rima banking <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </article></LocalizedTree>
    </PageShell>
  )
}
