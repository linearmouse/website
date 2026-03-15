import { describe, expect, it } from 'vitest'

import {
  parseThemeMode,
  readThemeModeFromCookieString,
  serializeThemeCookie,
  themeCookieName,
} from './theme'

describe('theme helpers', () => {
  it('falls back to system for invalid theme values', () => {
    expect(parseThemeMode('dark')).toBe('dark')
    expect(parseThemeMode('')).toBe('system')
    expect(parseThemeMode('sepia')).toBe('system')
    expect(parseThemeMode(undefined)).toBe('system')
  })

  it('reads the stored theme from the cookie header string', () => {
    expect(readThemeModeFromCookieString(`${themeCookieName}=dark`)).toBe('dark')
    expect(readThemeModeFromCookieString(`foo=bar; ${themeCookieName}=light`)).toBe('light')
    expect(readThemeModeFromCookieString('foo=bar')).toBe('system')
  })

  it('serializes the theme cookie with stable attributes', () => {
    expect(serializeThemeCookie('system')).toBe(
      `${themeCookieName}=system; Path=/; Max-Age=31536000; SameSite=Lax`,
    )
  })
})
