import type { AppLocale } from '#/generated/locales'
import { locales } from '#/paraglide/runtime'

const productionOrigin = 'https://linearmouse.app'

function withTrailingSlash(pathname: string) {
  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

export function getSiteOrigin() {
  return productionOrigin
}

export function getLocaleUrl(locale: AppLocale) {
  return new URL(withTrailingSlash(`/${locale}`), productionOrigin).toString()
}

export function getXDefaultUrl() {
  return new URL('/', productionOrigin).toString()
}

export function getCanonicalUrl(locale: AppLocale) {
  return getLocaleUrl(locale)
}

export function getAlternateLanguageLinks() {
  return [
    {
      rel: 'alternate' as const,
      hrefLang: 'x-default',
      href: getXDefaultUrl(),
    },
    ...locales.map((locale) => ({
      rel: 'alternate' as const,
      hrefLang: locale,
      href: getLocaleUrl(locale),
    })),
  ]
}
