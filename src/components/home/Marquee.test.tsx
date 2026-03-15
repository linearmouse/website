// @vitest-environment jsdom

import React, { forwardRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Marquee } from './Marquee'

vi.mock('motion/react', () => ({
  motion: {
    span: forwardRef<HTMLSpanElement, React.ComponentProps<'span'> & {
      animate?: { width?: number, y?: string }
      initial?: boolean
      transition?: unknown
    }>(function MockMotionSpan({
      animate,
      initial: _initial,
      transition: _transition,
      style,
      ...props
    }, ref) {
      return (
        <span
          ref={ref}
          style={{
            ...style,
            ...(typeof animate?.width === 'number'
              ? { width: `${animate.width}px` }
              : null),
            ...(animate?.y
              ? { transform: `translateY(${animate.y})` }
              : null),
          }}
          {...props}
        />
      )
    }),
  },
  useReducedMotion: () => false,
}))

class ResizeObserverMock {
  constructor(private readonly callback: ResizeObserverCallback) {}

  observe() {
    this.callback([], this as unknown as ResizeObserver)
  }

  disconnect() {}

  unobserve() {}
}

class IntersectionObserverMock {
  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe() {
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }

  disconnect() {}

  unobserve() {}
}

describe('Marquee', () => {
  let visibilityState: DocumentVisibilityState

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
    visibilityState = 'visible'

    Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
      configurable: true,
      value() {
        const width = (this.textContent?.length ?? 0) * 10

        return {
          bottom: 0,
          height: 20,
          left: 0,
          right: width,
          top: 0,
          width,
          x: 0,
          y: 0,
          toJSON() {
            return {}
          },
        }
      },
    })

    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      get() {
        return visibilityState
      },
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('does not reset to the first line when rerendered with the same content', () => {
    const { rerender } = render(
      <Marquee lines={['Mouse', 'Trackpad']} />,
    )

    const track = screen.getAllByText('Mouse').at(-1)?.parentElement
    expect(track).not.toBeNull()
    expect(track?.style.transform).toBe('translateY(-0em)')

    act(() => {
      vi.advanceTimersByTime(3200)
    })

    expect(track?.style.transform).toBe('translateY(-1.24em)')

    rerender(
      <Marquee lines={['Mouse', 'Trackpad']} />,
    )

    expect(track?.style.transform).toBe('translateY(-1.24em)')
  })

  it('pauses while the page is hidden and resumes from the remaining delay', () => {
    render(
      <Marquee lines={['Mouse', 'Trackpad']} />,
    )

    const track = screen.getAllByText('Mouse').at(-1)?.parentElement
    expect(track).not.toBeNull()
    expect(track?.style.transform).toBe('translateY(-0em)')

    act(() => {
      vi.advanceTimersByTime(1600)
    })

    act(() => {
      visibilityState = 'hidden'
      document.dispatchEvent(new Event('visibilitychange'))
      vi.advanceTimersByTime(10_000)
    })

    expect(track?.style.transform).toBe('translateY(-0em)')

    act(() => {
      visibilityState = 'visible'
      document.dispatchEvent(new Event('visibilitychange'))
      vi.advanceTimersByTime(1599)
    })

    expect(track?.style.transform).toBe('translateY(-0em)')

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(track?.style.transform).toBe('translateY(-1.24em)')
  })
})
