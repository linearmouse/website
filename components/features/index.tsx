import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

import feature1 from './feature-1.png'
import feature2 from './feature-2.png'
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
    margin-left: 52vw;
    margin-right: auto;
    padding: 0;
  }

  &:nth-child(even) {
    ${MaxWidthWrapper} {
      margin-right: 52vw;
      margin-left: auto;
    }
  }
`

const FeatureImageWrapper = styled.div`
  position: absolute;
  right: 50vw;
  top: 3.75rem;

  ${FeatureWrapper}:nth-child(even) > & {
    right: revert;
    left: 50vw;
  }
`

const Heading = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.25rem;
  line-height: 1.3;
  font-family: var(--font-family-title);
  font-weight: bold;

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
`

const Description = styled.div`
  opacity: 0.8;

  p:not(:last-child) {
    margin: 0 0 0.5rem;
  }
`

const Features = () => {
  const { t } = useTranslation('index')

  const images = [feature1, feature2, feature3]

  return (
    <Wrapper>
      {images.map(({ src }, index) => (
        <FeatureWrapper key={index}>
          <MaxWidthWrapper maxWidth={'calc(var(--max-width) / 2)'}>
            <Heading>
              <Trans
                i18nKey={`index:features.${index}.title`}
                components={{ strong: <strong />, br: <br />, q: <q /> }}
              />
            </Heading>
            <Description>
              <Trans i18nKey={`index:features.${index}.description`} components={{ br: <br />, p: <p /> }} />
            </Description>
          </MaxWidthWrapper>

          <FeatureImageWrapper>
            <Image layout="fixed" src={src} width={962} height={712} />
          </FeatureImageWrapper>
        </FeatureWrapper>
      ))}
    </Wrapper>
  )
}

export default Features
