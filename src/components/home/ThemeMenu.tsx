import { Menu } from '@base-ui/react/menu'
import { Check } from 'lucide-react'

import { m } from '#/paraglide/messages'

import { menuItemClass, menuPopupClass, navTriggerClass, themeModes, type ThemeMode } from './constants'
import { useThemeMode } from './ThemeProvider'

export function ThemeMenu() {
  const { theme, setThemeMode } = useThemeMode()

  function handleThemeChange(nextTheme: ThemeMode) {
    setThemeMode(nextTheme)
  }

  const currentTheme = themeModes.find((option) => option.value === theme) ?? themeModes[0]
  const CurrentIcon = currentTheme.icon
  const themeLabels: Record<ThemeMode, string> = {
    system: m.theme_system(),
    light: m.theme_light(),
    dark: m.theme_dark(),
  }

  return (
    <Menu.Root>
      <Menu.Trigger className={navTriggerClass} aria-label={m.nav_theme()} title={m.nav_theme()}>
        <CurrentIcon className="size-3.5" strokeWidth={1.8} />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={12} align="end" className="z-[160]">
          <Menu.Popup className={`${menuPopupClass} min-w-[10rem]`}>
            <Menu.RadioGroup value={theme} onValueChange={(value) => handleThemeChange(value as ThemeMode)}>
              {themeModes.map(({ value, icon: Icon }) => (
                <Menu.RadioItem key={value} value={value} closeOnClick className={menuItemClass}>
                  <Icon className="size-3.5" strokeWidth={1.8} />
                  <span className="flex-1 text-left">{themeLabels[value]}</span>
                  <Menu.RadioItemIndicator className="text-[color:var(--brand)]">
                    <Check className="size-3.5" strokeWidth={2} />
                  </Menu.RadioItemIndicator>
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
