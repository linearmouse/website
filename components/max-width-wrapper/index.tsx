import styled from 'styled-components'

export type MaxWidthWrapperProps = {
  maxWidth?: number | string
}

const MaxWidthWrapper = styled.div<MaxWidthWrapperProps>`
  margin-left: auto;
  margin-right: auto;
  padding-left: 4rem;
  padding-right: 4rem;
  max-width: ${({ maxWidth }) => (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth ?? `var(--max-width)`)};
`

export default MaxWidthWrapper
