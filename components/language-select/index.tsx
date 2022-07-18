import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import styled from 'styled-components'

const localesToShow = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '正體中文'
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

    a {
      display: block;
      padding: 0.1em 1em;
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
          <Link key={locale} href="" locale={locale}>
            <a onClick={() => persistLocale(locale)}>{language}</a>
          </Link>
        ))}
      </menu>
    </Wrapper>
  )
}

export default LanguageSelect
