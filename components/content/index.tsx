import { PropsWithChildren } from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'
import Spacer from 'components/spacer'

const Wrapper = styled.div`
  h1 {
    margin: 2rem 0 1rem;
    font-size: 1.875rem;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
`

export type ContentProps = PropsWithChildren<{}>

const Content = ({ children }: ContentProps) => (
  <Wrapper>
    <Spacer size="6.75rem" />

    <MaxWidthWrapper>{children}</MaxWidthWrapper>
  </Wrapper>
)

export default Content
