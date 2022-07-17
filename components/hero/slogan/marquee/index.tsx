import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

export type MarqueeProps = {
  lines: string[]
}

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 1.3em;
  overflow: hidden;
  contain: content;
`

const Scrollable = styled.div`
  transition: transform 1s ease;
  will-change: transform;
`

const Line = styled.div`
  position: relative;
  color: var(--color-primary-dark);
  line-height: 1.3;
  width: fit-content;
  transition: opacity 0.5s 0.2s ease;
  will-change: opacity;
  white-space: nowrap;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0.2em;
    height: 0.3em;
    background-color: var(--color-primary);
    opacity: 0.2;
  }
`

const Marquee = ({ lines }: MarqueeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const next = () => {
      setCurrentIndex((index) => (index + 1) % lines.length)
    }

    const timer = setInterval(next, 3000)

    return () => void clearInterval(timer)
  }, [lines])

  const translateY = useMemo(() => -currentIndex * 1.3 + 'em', [currentIndex])

  return (
    <Wrapper>
      <Scrollable style={{ transform: `translateY(${translateY})` }}>
        {lines.map((line, index) => (
          <Line
            key={index}
            style={{
              opacity: currentIndex === 0 || currentIndex === index ? 1 : 0,
              userSelect: currentIndex === index ? undefined : 'none',
              WebkitUserSelect: currentIndex === index ? undefined : 'none'
            }}
            aria-hidden={currentIndex !== index}
          >
            {line}
          </Line>
        ))}
      </Scrollable>
    </Wrapper>
  )
}

export default Marquee
