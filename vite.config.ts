import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

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
          localized: [
            ['af-ZA', '/af-ZA/'],
            ['ar-SA', '/ar-SA/'],
            ['bs-BA', '/bs-BA/'],
            ['ca-ES', '/ca-ES/'],
            ['cs-CZ', '/cs-CZ/'],
            ['da-DK', '/da-DK/'],
            ['de-DE', '/de-DE/'],
            ['el-GR', '/el-GR/'],
            ['en', '/en/'],
            ['es-ES', '/es-ES/'],
            ['fi-FI', '/fi-FI/'],
            ['fr-FR', '/fr-FR/'],
            ['he-IL', '/he-IL/'],
            ['hu-HU', '/hu-HU/'],
            ['it-IT', '/it-IT/'],
            ['ja-JP', '/ja-JP/'],
            ['ko-KR', '/ko-KR/'],
            ['my-MM', '/my-MM/'],
            ['nb-NO', '/nb-NO/'],
            ['nl-NL', '/nl-NL/'],
            ['no-NO', '/no-NO/'],
            ['pl-PL', '/pl-PL/'],
            ['pt-BR', '/pt-BR/'],
            ['pt-PT', '/pt-PT/'],
            ['ro-RO', '/ro-RO/'],
            ['ru-RU', '/ru-RU/'],
            ['sk-SK', '/sk-SK/'],
            ['sr-SP', '/sr-SP/'],
            ['sv-SE', '/sv-SE/'],
            ['tr-TR', '/tr-TR/'],
            ['uk-UA', '/uk-UA/'],
            ['vi-VN', '/vi-VN/'],
            ['zh-CN', '/zh-CN/'],
            ['zh-HK', '/zh-HK/'],
            ['zh-TW', '/zh-TW/'],
          ],
        },
        {
          pattern: '/:path(.*)?',
          localized: [
            ['af-ZA', '/af-ZA/:path(.*)?'],
            ['ar-SA', '/ar-SA/:path(.*)?'],
            ['bs-BA', '/bs-BA/:path(.*)?'],
            ['ca-ES', '/ca-ES/:path(.*)?'],
            ['cs-CZ', '/cs-CZ/:path(.*)?'],
            ['da-DK', '/da-DK/:path(.*)?'],
            ['de-DE', '/de-DE/:path(.*)?'],
            ['el-GR', '/el-GR/:path(.*)?'],
            ['en', '/en/:path(.*)?'],
            ['es-ES', '/es-ES/:path(.*)?'],
            ['fi-FI', '/fi-FI/:path(.*)?'],
            ['fr-FR', '/fr-FR/:path(.*)?'],
            ['he-IL', '/he-IL/:path(.*)?'],
            ['hu-HU', '/hu-HU/:path(.*)?'],
            ['it-IT', '/it-IT/:path(.*)?'],
            ['ja-JP', '/ja-JP/:path(.*)?'],
            ['ko-KR', '/ko-KR/:path(.*)?'],
            ['my-MM', '/my-MM/:path(.*)?'],
            ['nb-NO', '/nb-NO/:path(.*)?'],
            ['nl-NL', '/nl-NL/:path(.*)?'],
            ['no-NO', '/no-NO/:path(.*)?'],
            ['pl-PL', '/pl-PL/:path(.*)?'],
            ['pt-BR', '/pt-BR/:path(.*)?'],
            ['pt-PT', '/pt-PT/:path(.*)?'],
            ['ro-RO', '/ro-RO/:path(.*)?'],
            ['ru-RU', '/ru-RU/:path(.*)?'],
            ['sk-SK', '/sk-SK/:path(.*)?'],
            ['sr-SP', '/sr-SP/:path(.*)?'],
            ['sv-SE', '/sv-SE/:path(.*)?'],
            ['tr-TR', '/tr-TR/:path(.*)?'],
            ['uk-UA', '/uk-UA/:path(.*)?'],
            ['vi-VN', '/vi-VN/:path(.*)?'],
            ['zh-CN', '/zh-CN/:path(.*)?'],
            ['zh-HK', '/zh-HK/:path(.*)?'],
            ['zh-TW', '/zh-TW/:path(.*)?'],
          ],
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
