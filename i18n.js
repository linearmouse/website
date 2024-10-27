const { isMainlandChinaCluster } = require('./utils/config')

let locales = [
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

let defaultLocale = 'en'

if (isMainlandChinaCluster) {
  defaultLocale = 'zh-CN'
  locales = [defaultLocale]
}

module.exports = {
  defaultLocale,
  locales,
  pages: {
    '*': ['common'],
    '/': ['index']
  }
}
