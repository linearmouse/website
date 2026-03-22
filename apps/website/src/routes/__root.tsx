import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import type { ReactNode } from 'react'

import {
  getThemeColorScheme,
  parseThemeMode,
  readThemeModeFromDocument,
  themeCookieName,
} from '#/components/home/theme'
import type { ThemeMode } from '#/components/home/constants'
import { isRtlLocale } from '#/lib/i18n'
import { getLocale } from '#/paraglide/runtime'
import appCss from '../styles.css?url'

const getThemePreference = createIsomorphicFn()
  .server(async () => {
    const { getCookie } = await import('@tanstack/react-start/server')

    return parseThemeMode(getCookie(themeCookieName))
  })
  .client(() => readThemeModeFromDocument())

function getThemeInitScript(theme: ThemeMode) {
  return `
(() => {
  const root = document.documentElement;
  const theme = ${JSON.stringify(theme)};
  const resolvedTheme =
    theme === 'light' || theme === 'dark'
      ? theme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  root.dataset.theme = theme;
  root.dataset.resolvedTheme = resolvedTheme;
  root.style.colorScheme = theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : 'light dark';
})();
`
}

export const Route = createRootRoute({
  loader: async () => ({
    theme: await getThemePreference(),
  }),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
  notFoundComponent: () => null,
})

function RootLayout() {
  return <Outlet />
}

function RootDocument({ children }: { children: ReactNode }) {
  const { theme } = Route.useLoaderData()
  const locale = getLocale()
  const initialResolvedTheme = theme === 'light' || theme === 'dark' ? theme : 'light'

  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? 'rtl' : 'ltr'}
      data-theme={theme}
      data-resolved-theme={initialResolvedTheme}
      style={{ colorScheme: getThemeColorScheme(theme) }}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript(theme) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
