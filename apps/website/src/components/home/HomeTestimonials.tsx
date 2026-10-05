import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'

import { isRtlLocale } from '#/lib/i18n'

import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

import { DownloadActions } from './DownloadActions'
import { testimonials } from './testimonials'

export function HomeTestimonials() {
  const locale = getLocale()
  const viewport = useRef<HTMLDivElement>(null)
  const firstGroup = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const move = useRef<(direction: number) => void>(() => {})
  const dateFormat = new Intl.DateTimeFormat(locale, {
    month: 'short', year: 'numeric', timeZone: 'UTC',
  })

  useEffect(() => {
    const element = viewport.current
    const group = firstGroup.current
    if (!element || !group) return

    let frame = 0
    let previous = 0
    let visible = false
    let position = element.scrollLeft
    const carousel = element.parentElement!
    let hovered = window.matchMedia('(hover: hover)').matches && carousel.matches(':hover')
    let dragging = false
    let resumeAt = 0
    let jump: { start: number; distance: number; time: number } | null = null
    move.current = (direction) => {
      const width = group.offsetWidth
      if (!width) return
      const card = group.firstElementChild as HTMLElement | null
      const distance = direction * ((card?.offsetWidth ?? 320) + 20)
      position = element.scrollLeft
      if (reducedMotion) {
        element.scrollLeft = Math.max(0, Math.min(element.scrollWidth - element.clientWidth, position + distance))
        position = element.scrollLeft
        return
      }
      // Start in the repeated group when moving backwards through the seam.
      if (position + distance < 0) position += width
      element.scrollLeft = position
      jump = { start: position, distance, time: performance.now() }
    }
    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') hovered = true
    }
    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') hovered = false
    }
    carousel.addEventListener('pointerenter', onPointerEnter)
    carousel.addEventListener('pointerleave', onPointerLeave)
    const onPointerDown = () => { dragging = true; jump = null }
    const onPointerUp = () => {
      if (!dragging) return
      dragging = false
      resumeAt = performance.now() + 900
    }
    element.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    observer.observe(element)
    const tick = (now: number) => {
      const elapsed = previous ? Math.min(now - previous, 64) : 0
      previous = now
      if (jump) {
        const progress = Math.min((now - jump.time) / 520, 1)
        position = jump.start + jump.distance * (1 - (1 - progress) ** 4)
        element.scrollLeft = position
        if (progress === 1) {
          position = (position + group.offsetWidth) % group.offsetWidth
          element.scrollLeft = position
          jump = null
        }
      } else if (!reducedMotion && visible && !document.hidden && !hovered && !dragging && now >= resumeAt) {
        if (Math.abs(element.scrollLeft - position) > 2) position = element.scrollLeft
        const width = group.offsetWidth
        if (width > 0) {
          position = (position + elapsed * 0.028) % width
          element.scrollLeft = position
        }
      } else {
        position = element.scrollLeft
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      carousel.removeEventListener('pointerenter', onPointerEnter)
      carousel.removeEventListener('pointerleave', onPointerLeave)
      element.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
      move.current = () => {}
    }
  }, [reducedMotion])

  return (
    <section aria-labelledby="testimonials-title" className="testimonials-section py-20 sm:py-24">
      <div className="mx-auto mb-10 max-w-[680px] px-6 text-center sm:mb-12">
        <h2 id="testimonials-title" className="text-[clamp(1.65rem,3vw,2.2rem)] font-semibold leading-tight tracking-[-0.035em]">
          {m['testimonials.title']()}
        </h2>
      </div>
      <div className="testimonials-carousel">
        <button type="button" className="testimonials-arrow testimonials-arrow-left" aria-label={m['testimonials.previous']()} aria-controls="testimonials-track" onClick={() => move.current(-1)}>
          <ArrowLeft size={19} aria-hidden="true" />
        </button>
        <div
          id="testimonials-track"
          ref={viewport}
          className="testimonials-viewport"
          dir="ltr"
          tabIndex={0}
          role="region"
          aria-labelledby="testimonials-title"
        >
          <div className="flex w-max">
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} ref={duplicate ? undefined : firstGroup} className={`testimonials-group${duplicate ? ' testimonials-duplicate' : ''}`} aria-hidden={duplicate || undefined}>
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.url} className="testimonial-card" dir={isRtlLocale(locale) ? 'rtl' : 'ltr'}>
                    <blockquote cite={testimonial.url} lang={locale} className="flex-1 text-[18px] font-medium leading-[1.6] tracking-[-0.015em]">
                      <p>“{testimonial.quote()}”</p>
                    </blockquote>
                    <figcaption className="mt-8">
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={duplicate ? -1 : undefined}
                        className="group flex items-start justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand)]"
                      >
                        <span className="flex min-w-0 flex-col gap-1.5 text-start">
                          <bdi className="break-words text-sm font-medium transition-colors group-hover:text-[color:var(--brand)]">{testimonial.author}</bdi>
                          <time dateTime={testimonial.date} className="text-xs text-[color:var(--muted)]">
                            {dateFormat.format(new Date(testimonial.date))}
                          </time>
                        </span>
                        <span className="flex shrink-0 flex-col items-end gap-1.5 text-[color:var(--muted)]">
                          <span className="inline-flex items-center gap-1 text-xs transition-colors group-hover:text-[color:var(--brand)]">
                            <bdi>{testimonial.source}</bdi>
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </span>
                          {locale.split('-')[0] !== (testimonial.language ?? 'en') && (
                            <span className="text-[11px]">{m['testimonials.translated']()}</span>
                          )}
                        </span>
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="testimonials-arrow testimonials-arrow-right" aria-label={m['testimonials.next']()} aria-controls="testimonials-track" onClick={() => move.current(1)}>
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </div>
      <div className="mt-12 px-6 sm:mt-14">
        <DownloadActions />
      </div>
    </section>
  )
}
