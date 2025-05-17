import { RichTagsFunction, useTranslations } from 'next-intl'
import Image from 'next/image'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

import feature1Dark from './feature-1-dark.png'
import feature1 from './feature-1.png'
import feature2Dark from './feature-2-dark.png'
import feature2 from './feature-2.png'
import feature3Dark from './feature-3-dark.png'
import feature3 from './feature-3.png'

const Wrapper = styled.div``

const FeatureWrapper = styled.div`
  position: relative;
  padding: 6.25rem 0;
  box-sizing: border-box;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:nth-child(odd) {
    background-color: var(--color-white);
  }

  ${MaxWidthWrapper} {
    margin-inline-start: 52vw;
    margin-inline-end: auto;
  }

  &:nth-child(even) {
    ${MaxWidthWrapper} {
      margin-inline-end: 52vw;
      margin-inline-start: auto;
    }
  }

  &:nth-child(odd) ${MaxWidthWrapper} {
    padding-inline-start: 0;
  }

  &:nth-child(even) ${MaxWidthWrapper} {
    padding-inline-end: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    &:nth-child(odd) ${MaxWidthWrapper}, &:nth-child(even) ${MaxWidthWrapper} {
      margin: 0;
      padding: 0 2rem;
      box-sizing: border-box;
      width: 100%;
    }
  }
`

const FeatureImageWrapper = styled.div`
  position: absolute;
  right: 50vw;
  top: 3.75rem;

  &:lang(ar),
  &:lang(he) {
    right: revert;
    left: 50vw;
  }

  ${FeatureWrapper}:nth-child(even) > & {
    right: revert;
    left: 50vw;

    &:lang(ar),
    &:lang(he) {
      right: 50vw;
      left: revert;
    }
  }

  @media (max-width: 960px) {
    position: static;
    margin-bottom: -20rem;
  }
`

const Heading = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.25rem;
  line-height: 1.3;
  font-family: var(--font-family-title);
  font-weight: bold;
  white-space: pre-wrap;

  strong {
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
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`

const Description = styled.div`
  opacity: 0.8;
  white-space: pre-wrap;

  p:not(:last-child) {
    margin: 0 0 0.5rem;
  }
`

const Features = () => {
  const images = [
    {
      light: feature1,
      dark: feature1Dark
    },
    {
      light: feature2,
      dark: feature2Dark
    },
    {
      light: feature3,
      dark: feature3Dark
    }
  ]

  const t = useTranslations('index')

  const componentElements: Record<string, RichTagsFunction> = {
    p: (chunks) => <p>{chunks}</p>,
    q: (chunks) => <q>{chunks}</q>,
    strong: (chunks) => <strong>{chunks}</strong>
  }

  return (
    <Wrapper>
      {images.map(({ light, dark }, index) => (
        <FeatureWrapper key={index}>
          <MaxWidthWrapper $maxWidth={'calc(var(--max-width) / 2)'}>
            <Heading>{t.rich(`features.${index}.title`, componentElements)}</Heading>
            <Description>{t.rich(`features.${index}.description`, componentElements)}</Description>
          </MaxWidthWrapper>

          <FeatureImageWrapper>
            <div className="light-only">
              <Image alt="" src={light} width={962} height={740} />
            </div>
            <div className="dark-only">
              <Image alt="" src={dark} width={962} height={740} />
            </div>
          </FeatureImageWrapper>
        </FeatureWrapper>
      ))}
    </Wrapper>
  )
}

export default Features
