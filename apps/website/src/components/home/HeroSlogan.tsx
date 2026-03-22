import { m } from '#/paraglide/messages'

import { Marquee } from './Marquee'
import { RichHeadingText } from './RichHeadingText'
import { messageToRichTokens } from './richText'

export function HeroSlogan() {
  const marqueeLines = [
    m.slogan_marquee_mouse_and_trackpad(),
    m.slogan_marquee_per_app_profiles(),
    m.slogan_marquee_reverse_scrolling(),
    m.slogan_marquee_pointer_precision(),
    m.slogan_marquee_button_shortcuts(),
  ]

  return (
    <div className="mx-auto max-w-[16em] text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
      <RichHeadingText
        tokens={messageToRichTokens(m.slogan_rich)}
        keyPrefix="slogan"
        options={{
          marquee: (
            <Marquee lines={marqueeLines} />
          ),
        }}
      />
    </div>
  )
}
