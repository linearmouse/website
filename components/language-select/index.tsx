import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import styled from 'styled-components'

const localesToShow = {
  'ar-SA': 'العربية',
  'cs-CZ': 'Čeština',
  'da-DK': 'Dansk',
  'de-DE': 'Deutsch',
  'el-GR': 'Ελληνικά',
  en: 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'he-IL': 'עברית',
  'hu-HU': 'Magyar',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'nl-NL': 'Nederlands',
  'pl-PL': 'Polski',
  'ro-RO': 'Română',
  'ru-RU': 'Русский',
  'tr-TR': 'Türkçe',
  'uk-UA': 'Українська',
  'vi-VN': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'zh-HK': '繁體中文 (香港)'
}

const Wrapper = styled.button`
  margin: 0;
  padding: 0;
  position: relative;
  appearance: none;
  border: 0;
  background-color: transparent;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  text-align: start;

  span {
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  menu {
    margin: 0;
    padding: 0.625rem;
    border: var(--border-dropdown);
    position: absolute;
    left: 50%;
    top: 100%;
    width: max-content;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
    cursor: initial;
    background-color: var(--color-white);
    border-radius: var(--border-radius-md);
    transition: opacity 0.15s ease;
    box-shadow: var(--shadow-md);
    column-count: 2;

    a {
      display: block;
      padding: 0.1em 1em;
    }
  }

  @media (max-width: 1840px) {
    menu {
      left: auto;
      right: -20px;
      transform: none;
    }
  }

  &:hover {
    menu {
      opacity: 1;
      pointer-events: initial;
    }
  }
`

const LanguageSelect = () => {
  const persistLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=${30 * 24 * 3600}; path=/`
  }

  const { t } = useTranslation('common')

  return (
    <Wrapper type="button">
      <span>{t('navigation.language')}</span>
      <menu>
        {Object.entries(localesToShow).map(([locale, language]) => (
          <Link key={locale} lang={locale} href="" locale={locale} onClick={() => persistLocale(locale)}>
            {language}
          </Link>
        ))}
      </menu>
    </Wrapper>
  )
}

export default LanguageSelect
