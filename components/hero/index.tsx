import CircleBackground from 'components/circle-background'
import MaxWidthWrapper from 'components/max-width-wrapper'
import Spacer from 'components/spacer'

import Download from './download'
import Screenshots from './screenshots'
import Slogan from './slogan'
import { Wrapper } from './styles'

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
