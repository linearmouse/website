import { RichTagsFunction, useTranslations } from 'next-intl'
import Image from 'next/image'

import MaxWidthWrapper from 'components/max-width-wrapper'

import feature1Dark from './feature-1-dark.png'
import feature1 from './feature-1.png'
import feature2Dark from './feature-2-dark.png'
import feature2 from './feature-2.png'
import feature3Dark from './feature-3-dark.png'
import feature3 from './feature-3.png'
import { Description, FeatureImageWrapper, FeatureWrapper, Heading, Wrapper } from './styles'

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
