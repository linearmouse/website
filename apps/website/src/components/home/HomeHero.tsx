import { containerClass } from './constants'
import { DownloadActions } from './DownloadActions'
import { HeroSlogan } from './HeroSlogan'

export function HomeHero() {
  return (
    <section className="flex items-center overflow-x-clip pt-[calc(8rem+var(--header-height))] sm:pt-[calc(9rem+var(--header-height))] lg:pt-[calc(10rem+var(--header-height))]">
      <div className={`${containerClass} w-full text-center`}>
        <div className="scroll-reveal space-y-8 sm:space-y-10 lg:-translate-y-6">
          <HeroSlogan />
          <DownloadActions />
        </div>
      </div>
    </section>
  )
}
