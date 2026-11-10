'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function HomeMotion({ children }: { children: React.ReactNode }) {
	const scope = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		const root = scope.current
		if (!root) return

		const media = gsap.matchMedia()
		media.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.timeline({ defaults: { ease: 'power3.out' } })
				.from('[data-home-eyebrow]', { autoAlpha: 0, y: 12, duration: 0.45 })
				.from('.home-hero-copy h1', { autoAlpha: 0, y: 26, duration: 0.75 }, '-=0.2')
				.from('.home-hero-copy .lead, .home-hero-copy .hero-actions', {
					autoAlpha: 0,
					y: 18,
					duration: 0.6,
					stagger: 0.1,
				}, '-=0.35')
				.from('.home-hero-note', { autoAlpha: 0, y: 10, duration: 0.45 }, '-=0.25')
				.from('.home-app-showcase-phones .phone-hero', { autoAlpha: 0, y: 30, duration: 0.8 }, '-=0.65')
				.from('.home-app-showcase-phones .phone-thumbnail', { autoAlpha: 0, y: 18, duration: 0.65 }, '-=0.55')

			gsap.utils.toArray<HTMLElement>('[data-home-reveal]', root).forEach((element) => {
				gsap.from(element, {
					autoAlpha: 0,
					y: 24,
					duration: 0.75,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: element,
						start: 'top 86%',
						once: true,
					},
				})
			})
		})

		return () => media.revert()
	}, { scope })

	return <div ref={scope} className="home-motion-scope">{children}</div>
}
