import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig(({ mode }) => ({
  plugins: mode === 'test' ? [] : [cloudflare()],
}))
