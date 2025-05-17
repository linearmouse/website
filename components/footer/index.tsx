import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import CookieConsent from 'components/cookie-consent'
import MaxWidthWrapper from 'components/max-width-wrapper'

const Wrapper = styled.div`
  padding: 2rem 0;
  font-size: 0.875rem;

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

const Copyright = styled.div`
  opacity: 0.8;
`

const Links = styled.ol`
  display: flex;
  gap: 1rem;

  &,
  li {
    margin: 0;
    padding: 0;
  }

  & {
    margin-inline-start: auto;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
  }
`

const Footer = () => {
  const t = useTranslations('common')

  return (
    <>
      <Wrapper>
        <MaxWidthWrapper>
          <Copyright>&copy; 2021-{new Date().getFullYear()} LinearMouse</Copyright>

          <Links>
            <a href="https://crowdin.com/project/linearmouse" target="_blank" rel="noreferrer noopener">
              {t('footer.help_translate')}
            </a>
            <a href="/privacy.html">{t('footer.privacy_policy')}</a>
          </Links>
        </MaxWidthWrapper>
      </Wrapper>
      <CookieConsent />
    </>
  )
}

export default Footer
