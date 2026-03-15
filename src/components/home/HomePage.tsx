import { useEffect } from 'react'

import { isRtlLocale } from '#/lib/i18n'
import { getLocale } from '#/paraglide/runtime'
import { Route as RootRoute } from '#/routes/__root'

import { HomeFeatures } from './HomeFeatures'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { HomeHero } from './HomeHero'
import { ThemeProvider } from './ThemeProvider'

export function HomePage() {
  const locale = getLocale()
  const { theme } = RootRoute.useLoaderData()

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr'
  }, [locale])

  return (
    <ThemeProvider initialTheme={theme}>
      <div className="min-h-screen">
        <HomeHeader />
        <main>
          <HomeHero />
          <HomeFeatures />
        </main>
        <HomeFooter />
      </div>
    </ThemeProvider>
  )
}
