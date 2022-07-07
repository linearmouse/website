import CircleBackground from 'components/circle-background'
import MaxWidthWrapper from 'components/max-width-wrapper'
import Spacer from 'components/spacer'
import styled from 'styled-components'
import Download from './download'
import Slogan from './slogan'

const Wrapper = styled.div`
  padding-top: 6.75rem;

  & > ${MaxWidthWrapper} {
    display: flex;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Hero = () => (
  <Wrapper>
    <MaxWidthWrapper>
      <LeftColumn>
        <Slogan />
        <Spacer size={40} />
        <Download />
      </LeftColumn>
    </MaxWidthWrapper>
    <CircleBackground />
  </Wrapper>
)

export default Hero
