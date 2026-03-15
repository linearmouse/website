import type { ThemeMode } from './constants'

export const themeCookieName = 'linearmouse-theme-mode'
export const themeCookieMaxAge = 60 * 60 * 24 * 365

export function parseThemeMode(value?: string | null): ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system'
    ? value
    : 'system'
}

export function readThemeModeFromCookieString(cookieString: string): ThemeMode {
  const prefix = `${themeCookieName}=`

  for (const entry of cookieString.split(';')) {
    const trimmedEntry = entry.trim()

    if (!trimmedEntry.startsWith(prefix)) {
      continue
    }

    return parseThemeMode(decodeURIComponent(trimmedEntry.slice(prefix.length)))
  }

  return 'system'
}

export function readThemeModeFromDocument(): ThemeMode {
  const rootTheme = document.documentElement.dataset.theme

  return rootTheme
    ? parseThemeMode(rootTheme)
    : readThemeModeFromCookieString(document.cookie)
}

export function serializeThemeCookie(theme: ThemeMode) {
  return [
    `${themeCookieName}=${encodeURIComponent(theme)}`,
    'Path=/',
    `Max-Age=${themeCookieMaxAge}`,
    'SameSite=Lax',
  ].join('; ')
}

export function writeThemeCookie(theme: ThemeMode) {
  document.cookie = serializeThemeCookie(theme)
}

export function getThemeColorScheme(theme: ThemeMode) {
  return theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : 'light dark'
}

export function resolveTheme(theme: ThemeMode) {
  if (theme === 'light' || theme === 'dark') {
    return theme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyThemeMode(theme: ThemeMode) {
  const root = document.documentElement
  const resolvedTheme = resolveTheme(theme)

  root.dataset.theme = theme
  root.dataset.resolvedTheme = resolvedTheme
  root.style.colorScheme = getThemeColorScheme(theme)
}

export function setThemeMode(theme: ThemeMode) {
  writeThemeCookie(theme)
  applyThemeMode(theme)
}
