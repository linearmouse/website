import { createRequire } from 'node:module'

import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

const require = createRequire(import.meta.url)
const projectSettings = require('./project.inlang/settings.json') as {
  locales: readonly string[]
}

const localeRootPatterns = projectSettings.locales.map(
  (locale) => [locale, `/${locale}/`] satisfies [string, string],
)

const localePathPatterns = projectSettings.locales.map(
  (locale) => [locale, `/${locale}/:path(.*)?`] satisfies [string, string],
)

const config = defineConfig(({ mode }) => {
  const isTest = mode === 'test' || process.env.VITEST === 'true'

  return {
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      emitTsDeclarations: true,
      outputStructure: 'message-modules',
      strategy: ['url', 'preferredLanguage', 'baseLocale'],
      urlPatterns: [
        {
          pattern: '/',
          localized: localeRootPatterns,
        },
        {
          pattern: '/:path(.*)?',
          localized: localePathPatterns,
        },
      ],
      }),
      devtools(),
      !isTest && cloudflare({ viteEnvironment: { name: 'ssr' } }),
      tailwindcss(),
      tanstackStart({
        server: {
          entry: './server.ts',
        },
      }),
      viteReact(),
    ].filter(Boolean),
  }
})

export default config
