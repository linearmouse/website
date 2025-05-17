import { useTranslations } from 'next-intl'

import CookieConsent from 'components/cookie-consent'
import MaxWidthWrapper from 'components/max-width-wrapper'
import { Wrapper, Copyright, Links } from './styles'

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
