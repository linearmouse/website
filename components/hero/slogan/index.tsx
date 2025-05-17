import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import Marquee from './marquee'

const Wrapper = styled.div`
  margin-top: 6.3125rem;
  font-family: var(--font-family-title);
  font-size: 2.5625rem;
  font-weight: bold;
  white-space: pre;
  line-height: 1.3;
  overflow: hidden;
  contain: content;

  @media (max-width: 1190px) {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 512px) {
    font-size: 2rem;
  }
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
  const t = useTranslations('index')

  return (
    <Wrapper>
      {t.rich('slogan', {
        Marquee: () => (
          <Marquee
            lines={[
              t('slogan_marquee.mouse_and_trackpad'),
              t('slogan_marquee.scrolling_direction'),
              t('slogan_marquee.pointer_acceleration'),
              t('slogan_marquee.pointer_speed'),
              t('slogan_marquee.modifier_keys')
            ]}
          />
        ),
        GradientText: (chunks) => <GradientText>{chunks}</GradientText>
      })}
    </Wrapper>
  )
}

export default Slogan
