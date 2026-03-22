// @vitest-environment jsdom

import { fireEvent, render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { beforeEach, describe, expect, it } from 'vitest'

import {
  applyThemeMode,
  parseThemeMode,
  readThemeModeFromCookieString,
  readThemeModeFromDocument,
  serializeThemeCookie,
  setThemeMode,
  themeCookieName,
} from './theme'
import { ThemeProvider, useThemeMode } from './ThemeProvider'

describe('theme helpers', () => {
  beforeEach(() => {
    document.cookie = `${themeCookieName}=; Max-Age=0; Path=/`
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
    document.documentElement.style.colorScheme = ''
  })

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

  it('updates all theme consumers through the provider', () => {
    function ThemeValue({ label }: { label: string }) {
      const { theme, setThemeMode: updateThemeMode } = useThemeMode()

      return createElement(
        'button',
        { type: 'button', onClick: () => updateThemeMode('dark') },
        `${label}:${theme}`,
      )
    }

    render(
      createElement(
        ThemeProvider,
        { initialTheme: 'light' },
        createElement(ThemeValue, { label: 'nav' }),
        createElement(ThemeValue, { label: 'floating' }),
      ),
    )

    expect(screen.getByRole('button', { name: 'nav:light' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'floating:light' })).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'nav:light' }))

    expect(screen.getByRole('button', { name: 'nav:dark' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'floating:dark' })).not.toBeNull()
    expect(readThemeModeFromDocument()).toBe('dark')
  })

  it('persists the selected theme to the document cookie', () => {
    setThemeMode('dark')

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.cookie).toContain(`${themeCookieName}=dark`)
  })
})
