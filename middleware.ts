import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import type { NextMiddleware } from 'next/server'

const i18nMiddleware = createMiddleware(routing)

export const middleware = (async (request) => {
  const response = i18nMiddleware(request)

  const rewriteURL = response.headers.get('x-middleware-rewrite')
  if (rewriteURL) {
    // Cloudflare cache keys: https://developers.cloudflare.com/cache/how-to/cache-keys/
    response.headers.set('x-rewrite-url', rewriteURL)
  }

  return response
}) satisfies NextMiddleware

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
