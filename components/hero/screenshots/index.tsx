import Image from 'next/image'
import styled from 'styled-components'

import scrolling from './scrolling.png'
import pointer from './pointer.png'
import buttons from './buttons.png'
import modifierKeys from './modifier-keys.png'
import { useEffect, useState } from 'react'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  contain: strict;

  @media (max-width: 1190px) {
    display: none;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  right: -50px;
  top: 6.75rem;
  bottom: 0;
  z-index: -1;
  max-width: 50vw;
  overflow: hidden;
  transition: opacity 1s;
  will-change: opacity;
`

const screenshots = [
  { src: scrolling, alt: 'Screenshots - Scrolling', width: 962, height: 712 },
  { src: pointer, alt: 'Screenshots - Pointer', width: 962, height: 712 },
  { src: buttons, alt: 'Screenshots - Buttons', width: 962, height: 712 },
  { src: modifierKeys, alt: 'Screenshots - Modifier Keys', width: 962, height: 712 }
]

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const next = () => {
      setCurrentIndex((index) => (index + 1) % screenshots.length)
    }

    const timer = setInterval(next, 5000)

    return () => void clearInterval(timer)
  }, [])

  return (
    <Wrapper>
      {screenshots.map(({ src, alt, width, height }, index) => (
        <ImageWrapper key={index} style={{ opacity: currentIndex === index ? 1 : 0 }}>
          <Image layout="fixed" {...{ src, alt, width, height }} />
        </ImageWrapper>
      ))}
    </Wrapper>
  )
}

export default Screenshots
