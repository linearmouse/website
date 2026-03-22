import type { AppLocale } from '#/generated/locales'

export const localeNames: Record<AppLocale, string> = {
  'af-ZA': 'Afrikaans',
  'ar-SA': 'العربية',
  'bs-BA': 'Bosanski',
  'ca-ES': 'Català',
  'cs-CZ': 'Čeština',
  'da-DK': 'Dansk',
  'de-DE': 'Deutsch',
  'el-GR': 'Ελληνικά',
  en: 'English',
  'es-ES': 'Español',
  'fi-FI': 'Suomi',
  'fr-FR': 'Français',
  'he-IL': 'עברית',
  'hu-HU': 'Magyar',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'my-MM': 'မြန်မာ',
  'nb-NO': 'Norsk bokmål',
  'nl-NL': 'Nederlands',
  'no-NO': 'Norsk',
  'pl-PL': 'Polski',
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)',
  'ro-RO': 'Română',
  'ru-RU': 'Русский',
  'sk-SK': 'Slovenčina',
  'sr-SP': 'Српски',
  'sv-SE': 'Svenska',
  'tr-TR': 'Türkçe',
  'uk-UA': 'Українська',
  'vi-VN': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-HK': '繁體中文 (香港)',
  'zh-TW': '繁體中文',
}

export function isRtlLocale(locale: string) {
  return locale === 'ar-SA' || locale === 'he-IL'
}
