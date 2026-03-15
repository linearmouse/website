import { Menu } from '@base-ui/react/menu'
import { Button } from '@base-ui/react/button'
import { Download, Github, Menu as MenuIcon, MessageSquare, Terminal } from 'lucide-react'

import { m } from '#/paraglide/messages'

import { CopyStatusIcon } from './CopyStatusIcon'
import { homebrewCommand, menuItemClass, menuPopupClass, navTriggerClass } from './constants'
import { useCopyFeedback } from './useCopyFeedback'

export function MobileMenu() {
  const { copied, handleCopy } = useCopyFeedback(homebrewCommand)

  return (
    <Menu.Root>
      <Menu.Trigger className={navTriggerClass} aria-label={m.nav_menu()}>
        <MenuIcon className="size-4" strokeWidth={1.8} />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={12} align="end" className="z-[160]">
          <Menu.Popup className={`${menuPopupClass} min-w-[14rem]`}>
            <Menu.LinkItem
              href="https://dl.linearmouse.org/latest/LinearMouse.dmg"
              className={menuItemClass}
            >
              <Download className="size-3.5" strokeWidth={1.8} />
              <span>{m.install_download()}</span>
            </Menu.LinkItem>

            <Button
              type="button"
              onClick={handleCopy}
              className={`${menuItemClass} group`}
            >
              <Terminal className="size-3.5" strokeWidth={1.8} />
              <span className="flex-1 truncate text-left text-[13px] [font-family:var(--font-mono)]">
                {homebrewCommand}
              </span>
              <CopyStatusIcon copied={copied} wrapperClassName="size-4" iconClassName="size-3" />
            </Button>

            <div className="my-1 border-t border-[color:var(--line)]" role="separator" />

            <Menu.LinkItem
              href="https://github.com/linearmouse/linearmouse"
              className={menuItemClass}
            >
              <Github className="size-3.5" strokeWidth={1.8} />
              <span>{m.nav_github()}</span>
            </Menu.LinkItem>

            <Menu.LinkItem
              href="https://github.com/linearmouse/linearmouse/discussions"
              className={menuItemClass}
            >
              <MessageSquare className="size-3.5" strokeWidth={1.8} />
              <span>{m.nav_discussions()}</span>
            </Menu.LinkItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
