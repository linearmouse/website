import { Menu } from '@base-ui/react/menu'
import { Globe } from 'lucide-react'

import { isRtlLocale, localeNames } from '#/lib/i18n'
import { m } from '#/paraglide/messages'
import { getLocale, locales } from '#/paraglide/runtime'

import { menuItemClass, menuPopupClass, navTriggerClass } from './constants'

export function LanguageMenu() {
  const locale = getLocale()

  return (
    <Menu.Root>
      <Menu.Trigger
        className={`${navTriggerClass} px-2.5`}
        aria-label={m.nav_language()}
        title={m.nav_language()}
      >
        <Globe className="size-3.5" strokeWidth={1.8} />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          sideOffset={12}
          align={isRtlLocale(locale) ? 'start' : 'end'}
          className="z-[160]"
        >
          <Menu.Popup className={`${menuPopupClass} min-w-[16rem]`}>
            <div className="grid max-h-[60vh] grid-cols-2 gap-0.5 overflow-y-auto">
              {locales.map((option) => (
                <Menu.LinkItem
                  key={option}
                  href={`/${option}/`}
                  lang={option}
                  hrefLang={option}
                  closeOnClick
                  aria-label={localeNames[option]}
                  aria-current={option === locale ? 'true' : undefined}
                  title={localeNames[option]}
                  className={`${menuItemClass} aria-[current=true]:text-[color:var(--brand)]`}
                >
                  {localeNames[option]}
                </Menu.LinkItem>
              ))}
            </div>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
