import { useEffect } from 'react'

import { isRtlLocale } from '#/lib/i18n'
import { getLocale } from '#/paraglide/runtime'

import { HomeFeatures } from './HomeFeatures'
import { HomeFooter } from './HomeFooter'
import { HomeHeader } from './HomeHeader'
import { HomeHero } from './HomeHero'

export function HomePage() {
  const locale = getLocale()

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr'
  }, [locale])

  return (
    <div className="min-h-screen">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeFeatures />
      </main>
      <HomeFooter />
    </div>
  )
}
