import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

type MarqueeProps = {
  lines: string[]
}

const rotationDelayMs = 3200
const lineHeightEm = 1.24
const widthSpring = {
  type: 'spring',
  stiffness: 340,
  damping: 32,
  mass: 0.85,
} as const
const slideSpring = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
  mass: 0.8,
} as const

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export function Marquee({ lines }: MarqueeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lineWidths, setLineWidths] = useState<number[]>(() =>
    lines.map(() => 0),
  )
  const [hasEnteredAnimatedMode, setHasEnteredAnimatedMode] = useState(false)
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const measurementRefs = useRef<(HTMLSpanElement | null)[]>([])
  const timeoutRef = useRef<number | null>(null)
  const cycleStartedAtRef = useRef<number | null>(null)
  const remainingDelayRef = useRef(rotationDelayMs)
  const isPageVisibleRef = useRef(true)
  const isInViewRef = useRef(true)
  const prefersReducedMotion = useReducedMotion()
  const linesSignature = lines.join('\u0000')
  const currentLine = lines[currentIndex] ?? ''

  const clearScheduledAdvance = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    cycleStartedAtRef.current = null
  }

  const scheduleAdvance = (delay: number) => {
    if (lines.length < 2 || prefersReducedMotion || !isPageVisibleRef.current || !isInViewRef.current) {
      return
    }

    const nextDelay = Math.max(0, delay)
    remainingDelayRef.current = nextDelay
    cycleStartedAtRef.current = Date.now()
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null
      cycleStartedAtRef.current = null
      remainingDelayRef.current = rotationDelayMs
      setCurrentIndex((index) => (index + 1) % lines.length)
      scheduleAdvance(rotationDelayMs)
    }, nextDelay)
  }

  const pauseAdvance = () => {
    if (timeoutRef.current === null) {
      return
    }

    const startedAt = cycleStartedAtRef.current
    if (startedAt !== null) {
      const elapsed = Date.now() - startedAt
      remainingDelayRef.current = Math.max(0, remainingDelayRef.current - elapsed)
    }

    clearScheduledAdvance()
  }

  const resumeAdvance = () => {
    if (timeoutRef.current !== null) {
      return
    }

    scheduleAdvance(remainingDelayRef.current)
  }

  useIsomorphicLayoutEffect(() => {
    measurementRefs.current = measurementRefs.current.slice(0, lines.length)
    clearScheduledAdvance()
    remainingDelayRef.current = rotationDelayMs
    isInViewRef.current = true
    setLineWidths(lines.map(() => 0))
    setHasEnteredAnimatedMode(false)
    setCurrentIndex(0)
  }, [lines.length, linesSignature])

  useIsomorphicLayoutEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      return
    }

    const elements = measurementRefs.current.slice(0, lines.length)
    if (!elements.length || elements.some((element) => element === null)) {
      return
    }

    const measure = () => {
      setLineWidths(
        elements.map((element) =>
          Math.ceil(element?.getBoundingClientRect().width ?? 0),
        ),
      )
    }

    measure()

    const observer = new ResizeObserver(measure)
    elements.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [lines.length, linesSignature])

  const currentWidth = lineWidths[currentIndex] ?? 0
  const areAllWidthsReady =
    lineWidths.length === lines.length
    && lineWidths.every((width) => width > 0)

  useEffect(() => {
    if (areAllWidthsReady) {
      setHasEnteredAnimatedMode(true)
    }
  }, [areAllWidthsReady])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const updateVisibility = () => {
      isPageVisibleRef.current = document.visibilityState !== 'hidden'

      if (isPageVisibleRef.current) {
        resumeAdvance()
      } else {
        pauseAdvance()
      }
    }

    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)

    return () => {
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [lines.length, prefersReducedMotion])

  useEffect(() => {
    const element = rootRef.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      isInViewRef.current = true
      resumeAdvance()
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry?.isIntersecting ?? true

      if (isInViewRef.current) {
        resumeAdvance()
      } else {
        pauseAdvance()
      }
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [lines.length, prefersReducedMotion, linesSignature])

  useEffect(() => {
    if (prefersReducedMotion) {
      pauseAdvance()
      return
    }

    resumeAdvance()

    return () => {
      clearScheduledAdvance()
    }
  }, [lines.length, prefersReducedMotion, linesSignature])

  const shouldAnimate = !prefersReducedMotion && hasEnteredAnimatedMode

  return (
    <span ref={rootRef} className="relative inline-block align-baseline">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 flex flex-col opacity-0"
      >
        {lines.map((line, index) => (
          <span
            key={`measure-${line}-${index}`}
            ref={(element) => {
              measurementRefs.current[index] = element
            }}
            className="inline-block h-[1.24em] w-fit whitespace-nowrap leading-[1.24]"
          >
            {line}
          </span>
        ))}
      </span>

      {areAllWidthsReady
        ? (
          <motion.span
            className="relative inline-block h-[1.24em] align-baseline will-change-[width]"
            initial={false}
            animate={{ width: currentWidth }}
            transition={shouldAnimate ? widthSpring : { duration: 0 }}
          >
            <span
              aria-hidden="true"
              className="inline-block h-[1.24em] whitespace-nowrap leading-[1.24] text-transparent select-none"
            >
              {currentLine}
            </span>

            <span className="absolute inset-0 overflow-hidden">
              <motion.span
                className="absolute left-0 top-0 inline-flex flex-col"
                initial={false}
                animate={{
                  y: `-${currentIndex * lineHeightEm}em`,
                }}
                transition={shouldAnimate ? slideSpring : { duration: 0 }}
              >
                {lines.map((line, index) => (
                  <span
                    key={`${line}-${index}`}
                    className="inline-block h-[1.24em] w-fit whitespace-nowrap leading-[1.24] text-[color:var(--brand)]"
                  >
                    {line}
                  </span>
                ))}
              </motion.span>
            </span>
          </motion.span>
          )
        : (
          <span
            className="inline-block h-[1.24em] w-fit whitespace-nowrap leading-[1.24] text-[color:var(--brand)]"
          >
            {currentLine}
          </span>
          )}
    </span>
  )
}
