// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'

import { CookieConsent } from './CookieConsent'

vi.mock('#/paraglide/messages', () => ({
  m: { cookie_description: () => 'We use cookies.', ok: () => 'OK' },
}))

beforeEach(() => {
  const store = new Map<string, string>()
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => void store.set(key, value),
  })
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

it('shows the notice when required and remembers the acknowledgement', () => {
  const { unmount } = render(<CookieConsent required />)
  expect(screen.getByText('We use cookies.')).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'OK' }))
  expect(screen.queryByText('We use cookies.')).toBeNull()
  expect(localStorage.getItem('cookie_consent_informed')).toBe('1')
  unmount()

  // Returning visitors who already acknowledged it never see it again.
  render(<CookieConsent required />)
  expect(screen.queryByText('We use cookies.')).toBeNull()
})

it('stays hidden when not required', () => {
  render(<CookieConsent required={false} />)
  expect(screen.queryByText('We use cookies.')).toBeNull()
  expect(localStorage.getItem('cookie_consent_informed')).toBeNull()
})
