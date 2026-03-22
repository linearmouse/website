import { Menu } from '@base-ui/react/menu'
import { Button } from '@base-ui/react/button'
import { ChevronDown, Download, Terminal } from 'lucide-react'

import { m } from '#/paraglide/messages'

import { CopyStatusIcon } from './CopyStatusIcon'
import { homebrewCommand, menuPopupClass } from './constants'
import { useCopyFeedback } from './useCopyFeedback'

export function HeaderDownload() {
  const { copied, handleCopy } = useCopyFeedback(homebrewCommand)

  return (
    <div className="flex items-center whitespace-nowrap">
      <a
        href="https://dl.linearmouse.org/latest/LinearMouse.dmg"
        className="download-button-solid inline-flex h-7 items-center gap-1.5 overflow-hidden rounded-l-full pl-3.5 pr-2.5 text-xs font-medium transition-[background-color,scale] duration-[320ms] ease-[var(--ease-spring)] active:scale-[0.97]"
      >
        <Download className="size-3" strokeWidth={2} />
        <span>{m.install_download()}</span>
      </a>

      <Menu.Root>
        <Menu.Trigger
          className="download-button-solid inline-flex h-7 cursor-pointer items-center rounded-r-full border-l px-1.5 transition-[background-color,border-color,scale] duration-[320ms] ease-[var(--ease-spring)] active:scale-[0.97]"
          aria-label={m.install_install_via_homebrew()}
          style={{ borderColor: 'var(--download-solid-divider)' }}
        >
          <ChevronDown
            className="size-3 transition-transform duration-200 ease-[var(--ease-out-quart)] data-[popup-open]:rotate-180"
            strokeWidth={2}
          />
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Positioner sideOffset={12} align="end" className="z-[160]">
            <Menu.Popup className={`${menuPopupClass} min-w-[20rem]`}>
              <div className="px-2 py-2">
                <div className="mb-2 px-1 text-[11px] font-medium uppercase tracking-wider text-[color:var(--muted)]">
                  Homebrew
                </div>
                <Button
                  type="button"
                  onClick={handleCopy}
                  className="group flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2.5 transition-[background-color] duration-200 ease-[var(--ease-out-quart)] hover:bg-[color:var(--surface-subtle)]"
                >
                  <Terminal className="size-3.5 shrink-0 text-[color:var(--muted)]" strokeWidth={1.8} />
                  <span className="flex-1 truncate text-left text-[13px] font-normal text-[color:var(--text)] [font-family:var(--font-mono)]">
                    {homebrewCommand}
                  </span>
                  <CopyStatusIcon
                    copied={copied}
                    wrapperClassName="size-5 text-[color:var(--muted)] transition-colors duration-200 group-hover:text-[color:var(--text)]"
                    iconClassName="size-3"
                  />
                </Button>
              </div>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </div>
  )
}
