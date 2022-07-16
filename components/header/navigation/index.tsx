import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.875rem;
  font-family: var(--font-family-title);

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.15s ease;

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
  const { t } = useTranslation('common')

  return (
    <Wrapper role="navigation">
      <a href="https://github.com/linearmouse/linearmouse">{t('navigation.github')}</a>
      <a href="https://github.com/linearmouse/linearmouse/discussions">{t('navigation.discussions')}</a>
    </Wrapper>
  )
}

export default Navigation
