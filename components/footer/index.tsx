import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'
import { CLUSTER_NAME, isMainlandChinaCluster } from 'utils/config'

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

const ICPLicense = styled.a`
  opacity: 0.5;
  color: var(--color-text);
  text-decoration: none;
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
    margin-left: auto;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
  }
`

const DigitalOceanBadge = styled.a`
  display: flex;
  align-items: center;
`

const Footer = () => {
  const { t } = useTranslation('common')

  const showDigitalOceanBadge = CLUSTER_NAME === 'digitalocean'

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Copyright>&copy; 2021-{new Date().getFullYear()} LinearMouse</Copyright>

        {isMainlandChinaCluster && (
          <ICPLicense href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer noopener">
            沪ICP备2023003051号
          </ICPLicense>
        )}

        <Links>
          <a href="https://crowdin.com/project/linearmouse" target="_blank" rel="noreferrer noopener">
            {t('footer.help_translate')}
          </a>
        </Links>

        {showDigitalOceanBadge && (
          <DigitalOceanBadge
            href="https://www.digitalocean.com/?refcode=f272815c14b2&utm_campaign=Referral_Invite&utm_source=LinearMouse"
            target="_blank"
            rel="noopener"
          >
            <img
              alt="DigitalOcean Referral Badge"
              width={30}
              height={30}
              src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_icon_blue.svg"
            />
          </DigitalOceanBadge>
        )}
      </MaxWidthWrapper>

      {!isMainlandChinaCluster && <CookieConsent />}
    </Wrapper>
  )
}

export default Footer
