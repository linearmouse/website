import { defineRouting } from 'next-intl/routing'

const locales = [
  'af-ZA',
  'ar-SA',
  'ca-ES',
  'cs-CZ',
  'da-DK',
  'de-DE',
  'el-GR',
  'en',
  'es-ES',
  'fi-FI',
  'fr-FR',
  'he-IL',
  'hu-HU',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'my-MM',
  'nb-NO',
  'nl-NL',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'pt-PT',
  'ro-RO',
  'ru-RU',
  'sk-SK',
  'sr-SP',
  'sv-SE',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-HK',
  'zh-TW'
]

const defaultLocale = 'en'

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
  domains: [
    {
      domain: 'linearmouse.app',
      defaultLocale: 'en',
      locales: locales.filter((locale) => locale !== 'zh-CN')
    },
    {
      domain: 'linearmouse.cn',
      defaultLocale: 'zh-CN',
      locales: ['zh-CN']
    }
  ]
})
