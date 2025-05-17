import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import LanguageSelect from 'components/language-select'

const Wrapper = styled.div`
  margin-inline-start: auto;
  display: flex;
  gap: 1.875rem;
  font-family: var(--font-family-title);

  a,
  button {
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.15s ease;
    line-height: 2.5rem;

    &:hover {
      color: var(--color-primary);
    }
  }

  @media (max-width: 512px) {
    margin-top: 1.5rem;
    margin-right: auto;
  }
`

const Navigation = () => {
  const t = useTranslations('common')

  return (
    <Wrapper role="navigation">
      <a href="https://github.com/linearmouse/linearmouse">{t('navigation.github')}</a>
      <a href="https://github.com/linearmouse/linearmouse/discussions">{t('navigation.discussions')}</a>

      <LanguageSelect />
    </Wrapper>
  )
}

export default Navigation
