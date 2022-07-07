import CircleBackground from 'components/circle-background'
import MaxWidthWrapper from 'components/max-width-wrapper'
import Spacer from 'components/spacer'
import styled from 'styled-components'
import Download from './download'
import Screenshots from './screenshots'
import Slogan from './slogan'

const Wrapper = styled.div`
  position: relative;
  padding-top: 6.75rem;
  padding-bottom: 5rem;
`

const Hero = () => (
  <Wrapper>
    <MaxWidthWrapper>
      <Slogan />
      <Spacer size={40} />
      <Download />
    </MaxWidthWrapper>

    <Screenshots />

    <CircleBackground />
  </Wrapper>
)

export default Hero
