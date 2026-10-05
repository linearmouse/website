import type { CSSProperties } from 'react'

import { Brand } from './Brand'
import { containerClass } from './constants'
import { GitHubStars } from './GitHubStars'
import { HeaderDownload } from './HeaderDownload'
import { LanguageMenu } from './LanguageMenu'
import { MobileMenu } from './MobileMenu'
import { ThemeMenu } from './ThemeMenu'

const FLOAT_THRESHOLD = 620
const FLOAT_REVEAL_RANGE = 148

const floatingAnimationStyle = {
  '--header-float-start': `${FLOAT_THRESHOLD}px`,
  '--header-float-end': `${FLOAT_THRESHOLD + FLOAT_REVEAL_RANGE}px`,
} as CSSProperties

function HeaderBar({ floating }: { floating: boolean }) {
  return (
    <div
      className={`${floating ? 'header-bar-float' : 'header-bar-home'} ${containerClass} relative z-10 flex items-center justify-between border py-2 pe-3 ps-4 sm:py-2.5 sm:pe-4 sm:ps-5`}
    >
      <Brand />

      <nav className="flex items-center gap-0.5 text-sm">
        <div className="hidden lg:block me-2">
          <GitHubStars />
        </div>
        <span className="hidden lg:inline-flex">
          <ThemeMenu />
        </span>
        <span className="hidden lg:inline-flex">
          <LanguageMenu />
        </span>
        {floating ? (
          <div className="header-float-download ms-1">
            <HeaderDownload />
          </div>
        ) : null}
        <div className="-me-[14px] inline-flex items-center gap-0.5 lg:hidden">
          <LanguageMenu />
          <MobileMenu />
        </div>
      </nav>
    </div>
  )
}

export function HomeHeader() {
  return (
    <>
      <header className="header-home z-40 px-2 sm:px-4">
        <HeaderBar floating={false} />
      </header>

      <header
        style={floatingAnimationStyle}
        className="header-float z-40 px-2 sm:px-4"
      >
        <HeaderBar floating />
      </header>
    </>
  )
}
