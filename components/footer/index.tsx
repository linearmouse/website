import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

const Wrapper = styled.div`
  padding: 2rem 0;
  font-size: 0.875rem;

  & > ${MaxWidthWrapper} {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`

const Copyright = styled.div`
  flex: 1;
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

  a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
  }
`

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Copyright>&copy; 2021-{new Date().getFullYear()} LinearMouse</Copyright>

        <Links>
          <a href="https://crowdin.com/profile/lujjjh" target="_blank" rel="noreferrer noopener">
            {t('footer.help_translate')}
          </a>
        </Links>
      </MaxWidthWrapper>
    </Wrapper>
  )
}

export default Footer
