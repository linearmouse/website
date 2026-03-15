import handler from '@tanstack/react-start/server-entry'

import { handleAppcastRequest } from '#/lib/appcast'
import { paraglideMiddleware } from '#/paraglide/server.js'
import { locales } from '#/paraglide/runtime'

function redirectLocaleRootWithTrailingSlash(request: Request) {
  const url = new URL(request.url)
  const localeRoot = url.pathname.slice(1)

  if (locales.includes(localeRoot as (typeof locales)[number])) {
    url.pathname = `${url.pathname}/`
    return Response.redirect(url, 307)
  }

  return null
}

export default {
  async fetch(req: Request, env: Env) {
    const appcastResponse = await handleAppcastRequest(req, env)

    if (appcastResponse) {
      return appcastResponse
    }

    const redirect = redirectLocaleRootWithTrailingSlash(req)

    if (redirect) {
      return redirect
    }

    return await paraglideMiddleware(req, () => handler.fetch(req))
  },
}
