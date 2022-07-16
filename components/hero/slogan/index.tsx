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

const Slogan = () => (
  <Wrapper>
    <FlexLine>
      <span>Customize&nbsp;</span>
      <Marquee
        lines={['Mouse and Trackpad', 'Scrolling Direction', 'Pointer Acceleration', 'Pointer Speed', 'Modifier Keys']}
      />
    </FlexLine>
    <FlexLine>
      <span>
        Like a <GradientText>Pro.</GradientText>
      </span>
    </FlexLine>
  </Wrapper>
)

export default Slogan
