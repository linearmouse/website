import MaxWidthWrapper from 'components/max-width-wrapper'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Navigation from './navigation'

type WrapperProps = {
  scrollTop: number
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  margin: 0 auto;
  padding: 3.4375rem 0;
  --progress: ${({ scrollTop }) => Math.min(scrollTop / 100, 1)};

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-color: hsla(217, 20%, 98%, calc(var(--progress) * 0.8));
    z-index: -1;
    pointer-events: none;
    backdrop-filter: saturate(calc(100% + var(--progress) * 80%)) blur(calc(var(--progress) * 20px));
  }
`

const Header = () => {
  const [scrollTop, setScrollTop] = useState(typeof document === 'undefined' ? 0 : document.documentElement.scrollTop)

  useEffect(() => {
    const update = () => {
      setScrollTop(document.documentElement.scrollTop)
    }

    addEventListener('scroll', update)

    return () => removeEventListener('scroll', update)
  }, [])

  return (
    <Wrapper role="banner" scrollTop={scrollTop}>
      <MaxWidthWrapper>
        <Logo />
        <Navigation />
      </MaxWidthWrapper>
    </Wrapper>
  )
}

export default Header
