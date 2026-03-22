import { Button } from '@base-ui/react/button'
import { Terminal } from 'lucide-react'

import { m } from '#/paraglide/messages'

import { CopyStatusIcon } from './CopyStatusIcon'
import { homebrewCommand } from './constants'
import { useCopyFeedback } from './useCopyFeedback'

export function DownloadActions() {
  const { copied, handleCopy } = useCopyFeedback(homebrewCommand)

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="https://dl.linearmouse.org/latest/LinearMouse.dmg"
        className="download-button-solid inline-flex h-12 cursor-pointer items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-[background-color,scale,opacity] duration-[320ms] ease-[var(--ease-spring)] active:scale-[0.97]"
      >
        {m.install_download()}
      </a>

      <Button
        type="button"
        onClick={handleCopy}
        aria-label={homebrewCommand}
        title={homebrewCommand}
        className="group inline-flex h-12 min-w-0 cursor-pointer items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-5 text-left transition-[background-color,scale,opacity] duration-[320ms] ease-[var(--ease-spring)] hover:bg-[color:var(--surface-subtle)] active:scale-[0.97]"
      >
        <Terminal
          className="size-4 shrink-0 text-[color:color-mix(in_oklab,var(--text)_72%,var(--canvas))]"
          strokeWidth={1.8}
        />
        <span className="truncate text-[14px] font-medium tracking-[-0.01em] text-[color:color-mix(in_oklab,var(--text)_78%,var(--canvas))] [font-family:var(--font-mono)]">
          {homebrewCommand}
        </span>
        <CopyStatusIcon
          copied={copied}
          wrapperClassName="size-6 text-[color:color-mix(in_oklab,var(--text)_70%,var(--canvas))] transition-colors duration-[320ms] ease-[var(--ease-out-quint)] group-hover:text-[color:var(--text)]"
          iconClassName="size-3.5"
        />
      </Button>
    </div>
  )
}
