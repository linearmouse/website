import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: {
      common: (await import(`../locales/${locale}/common.json`)).default,
      index: (await import(`../locales/${locale}/index.json`)).default
    }
  }
})
