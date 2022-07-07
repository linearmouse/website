import styled from 'styled-components'

export type SpacerProps = {
  size: number | string
}

const Spacer = styled.span<SpacerProps>`
  display: inline-block;
  --size: ${({ size }) => `${typeof size === 'number' ? `${size}px` : size}`};
  min-width: var(--size);
  min-height: var(--size);
`

export default Spacer
