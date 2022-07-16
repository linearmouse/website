import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1000;
  pointer-events: none;

  @media (max-width: 1190px) {
    display: none;
  }
`

const Circle = styled.div`
  position: absolute;
  left: 52vw;
  top: 0;
  width: 1000px;
  height: 1000px;
  transform: translate(10%, -60%);
  background-color: var(--color-circle);
  border-radius: 50%;
`

const CircleBackground = () => (
  <Wrapper>
    <Circle />
  </Wrapper>
)

export default CircleBackground
