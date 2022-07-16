import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'

import Marquee from './marquee'

const Wrapper = styled.div`
  margin-top: 6.3125rem;
  font-family: var(--font-family-title);
  font-size: 2.5625rem;
  font-weight: bold;

  @media (max-width: 1190px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 512px) {
    font-size: 2rem;
  }
`

const FlexLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.3;
  overflow: hidden;
  contain: content;
`

const GradientText = styled.span`
  @supports (-webkit-text-fill-color: transparent) {
    & {
      background-image: linear-gradient(
        110deg,
        hsl(29deg 100% 55%) 0%,
        hsl(327deg 100% 50%) 50%,
        hsl(223deg 100% 54%) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const Slogan = () => {
  const { t } = useTranslation('index')

  return (
    <Wrapper>
      <FlexLine>
        <span style={{ whiteSpace: 'pre' }}>{t('slogan.before_marquee')}</span>
        <Marquee
          lines={[
            t('slogan.mouse_and_trackpad'),
            t('slogan.scrolling_direction'),
            t('slogan.pointer_acceleration'),
            t('slogan.pointer_speed'),
            t('slogan.modifier_keys')
          ]}
        />
      </FlexLine>
      <FlexLine>
        <span style={{ whiteSpace: 'pre' }}>{t('slogan.before_gradient')}</span>
        <GradientText>{t('slogan.pro')}</GradientText>
      </FlexLine>
    </Wrapper>
  )
}

export default Slogan
