import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import type { ThemeMode } from './constants'
import { applyThemeMode, parseThemeMode, setThemeMode as persistThemeMode } from './theme'

type ThemeContextValue = {
  theme: ThemeMode
  setThemeMode: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme: ThemeMode
}) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof document === 'undefined') {
      return initialTheme
    }

    const documentTheme = document.documentElement.dataset.theme
    return documentTheme ? parseThemeMode(documentTheme) : initialTheme
  })

  useEffect(() => {
    setTheme(initialTheme)
    applyThemeMode(initialTheme)
  }, [initialTheme])

  useEffect(() => {
    if (theme !== 'system') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = () => applyThemeMode('system')

    mediaQuery.addEventListener('change', syncSystemTheme)
    return () => mediaQuery.removeEventListener('change', syncSystemTheme)
  }, [theme])

  function updateTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme)
    persistThemeMode(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider')
  }

  return context
}
