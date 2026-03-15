import { Laptop, Moon, Sun } from 'lucide-react'

export const homebrewCommand = 'brew install --cask linearmouse'

export const featureScreenshots = [
  {
    light: '/features/feature-1.png',
    dark: '/features/feature-1-dark.png',
  },
  {
    light: '/features/feature-2.png',
    dark: '/features/feature-2-dark.png',
  },
  {
    light: '/features/feature-3.png',
    dark: '/features/feature-3-dark.png',
  },
  {
    light: '/hero/screenshots/buttons.png',
    dark: '/hero/screenshots/buttons-dark.png',
  },
] as const

export const containerClass = 'mx-auto w-full max-w-[980px] px-6'

export const containerWideClass = 'mx-auto w-full max-w-[1200px] px-6'

export const themeModes = [
  { value: 'system', label: 'System', icon: Laptop },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
] as const

export const navTriggerBaseClass =
  'cursor-pointer items-center gap-2 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-[color:color-mix(in_oklab,var(--text)_68%,var(--canvas))] transition-[color,opacity] duration-200 ease-[var(--ease-out-quart)] hover:text-[color:var(--text)] sm:px-4 sm:text-sm'

export const navTriggerClass = `inline-flex ${navTriggerBaseClass}`

export const menuPopupClass = 'menu-popup-motion glass-surface z-[120] rounded-2xl p-1.5 outline-none'

export const menuItemClass =
  'flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-normal text-[color:var(--muted)] outline-none transition-[background-color,color] duration-200 ease-[var(--ease-out-quart)] data-[highlighted]:bg-[color:var(--surface-subtle)] data-[highlighted]:text-[color:var(--text)]'

export type ThemeMode = (typeof themeModes)[number]['value']
