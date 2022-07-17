import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

const Wrapper = styled.div`
  padding: 2rem 0;
  font-size: 0.875rem;
  opacity: 0.8;
`

const Footer = () => (
  <Wrapper>
    <MaxWidthWrapper>&copy; 2021-{new Date().getFullYear()} LinearMouse</MaxWidthWrapper>
  </Wrapper>
)

export default Footer
