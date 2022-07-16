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
    margin-right: 6.875rem;
    padding: 0;
  }

  &:nth-child(even) {
    ${MaxWidthWrapper} {
      margin-right: 52vw;
      margin-left: 6.875rem;
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
  font-weight: 300;
  opacity: 0.8;

  p:not(:last-child) {
    margin: 0 0 0.5rem;
  }
`

const Features = () => (
  <Wrapper>
    <FeatureWrapper>
      <MaxWidthWrapper>
        <Heading>
          For <strong>Each</strong> Pointing Device.
        </Heading>
        <Description>
          <p>
            LinearMouse supports per-device settings.
            <br />
            You can apply different settings to your mice and trackpads.
          </p>
        </Description>
      </MaxWidthWrapper>

      <FeatureImageWrapper>
        <Image layout="fixed" src={feature1} width={962} height={712} />
      </FeatureImageWrapper>
    </FeatureWrapper>

    <FeatureWrapper>
      <MaxWidthWrapper>
        <Heading>
          <strong>More Natural</strong>
          <br />
          Than Natural.
        </Heading>
        <Description>
          <p>
            If you are uncomfortable with the natural scrolling of the mouse, LinearMouse can help you reverse the
            scrolling direction.
          </p>
          <p>
            As each device can be configured independently, there is no need to be concerned about the touchpad's
            scrolling direction being affected.
          </p>
        </Description>
      </MaxWidthWrapper>

      <FeatureImageWrapper>
        <Image layout="fixed" src={feature2} width={962} height={712} />
      </FeatureImageWrapper>
    </FeatureWrapper>

    <FeatureWrapper>
      <MaxWidthWrapper>
        <Heading>
          Move the Pointer
          <br />
          <strong>Fast and Accurately.</strong>
        </Heading>
        <Description>
          <p>
            LinearMouse allows you to find a comfortable pointer acceleration and speed and helps you to move the
            pointer faster and more accurately.
          </p>
          <p>
            You can even disable pointer acceleration if you're a gamer or designer to get the best pointer accuracy.
          </p>
        </Description>
      </MaxWidthWrapper>

      <FeatureImageWrapper>
        <Image layout="fixed" src={feature3} width={962} height={712} />
      </FeatureImageWrapper>
    </FeatureWrapper>
  </Wrapper>
)

export default Features
