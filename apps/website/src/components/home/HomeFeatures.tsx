import { m } from '#/paraglide/messages'

import { containerClass, featureScreenshots } from './constants'
import { FeatureProfilesDemo } from './FeatureProfilesDemo'
import { RichHeadingText } from './RichHeadingText'
import { messageToRichTokens, richTokensToPlainText } from './richText'
import { ThemedImage } from './ThemedImage'

const featureContent = [
  {
    title: m.feature_profiles_title,
    description: m.feature_profiles_description,
  },
  {
    title: m.feature_scrolling_title,
    description: m.feature_scrolling_description,
  },
  {
    title: m.feature_pointer_title,
    description: m.feature_pointer_description,
  },
  {
    title: m.feature_buttons_title,
    description: m.feature_buttons_description,
  },
] as const

export function HomeFeatures() {
  return (
    <section id="features">
      {featureScreenshots.map((feature, index) => {
        const messages = featureContent[index]
        if (!messages) {
          return null
        }

        const titleTokens = messageToRichTokens(messages.title)

        return (
          <section
            key={feature.light}
            className="py-24"
          >
            <div className={containerClass}>
              <div className={`${index > 0 ? 'scroll-reveal' : ''} mx-auto max-w-[680px] text-center`}>
                <h2 className="text-[clamp(1.9rem,4.3vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
                  <RichHeadingText
                    tokens={titleTokens}
                    keyPrefix={`feature-title-${index}`}
                  />
                </h2>

                <div className="mt-6 text-[1.125rem] font-medium leading-[1.5] text-[color:color-mix(in_oklab,var(--text)_82%,var(--canvas))] sm:mt-7 sm:text-[1.2rem] sm:leading-[1.52]">
                  <p>{messages.description()}</p>
                </div>
              </div>

              <div className={`${index > 0 ? 'scroll-reveal-image' : 'scroll-reveal'} mx-auto mt-12 max-w-[800px]`}>
                {index === 0
                  ? (
                    <FeatureProfilesDemo />
                    )
                  : (
                    <ThemedImage
                      light={feature.light}
                      dark={feature.dark}
                      alt={richTokensToPlainText(titleTokens)}
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="w-full"
                    />
                    )}
              </div>
            </div>
          </section>
        )
      })}
    </section>
  )
}
