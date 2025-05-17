'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

import Logo from './logo'
import Navigation from './navigation'

type WrapperProps = {
  $scrollTop: number
}

const Wrapper = styled.div.attrs((props) => ({}))<WrapperProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  margin: 0 auto;
  padding: 3.4375rem 0;
  --progress: ${({ $scrollTop }) => Math.min($scrollTop / 100, 1)};

  @media (max-width: 960px) {
    position: absolute;
  }

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;

    @media (max-width: 512px) {
      flex-direction: column;
    }
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-color: hsl(var(--color-background-hsl) / calc(var(--progress) * 0.8));
    z-index: -1;
    pointer-events: none;
    backdrop-filter: saturate(calc(100% + var(--progress) * 80%)) blur(calc(var(--progress) * 20px));
  }
`

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const update = () => {
      setScrollTop(document.documentElement.scrollTop)
    }

    update()

    addEventListener('scroll', update)

    return () => removeEventListener('scroll', update)
  }, [])

  return (
    <Wrapper role="banner" $scrollTop={scrollTop}>
      <MaxWidthWrapper>
        <Logo />
        <Navigation />
      </MaxWidthWrapper>
    </Wrapper>
  )
}

export default Header
