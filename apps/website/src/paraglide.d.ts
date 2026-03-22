type GeneratedLocale = import('./paraglide/runtime.js').Locale
type GeneratedMessagePart = import('./paraglide/runtime.js').MessagePart

declare module '#/paraglide/messages' {
  export * from './paraglide/messages/_index.js'
  export * as m from './paraglide/messages/_index.js'
}

declare module '#/paraglide/runtime' {
  export type Locale = GeneratedLocale
  export type MessagePart = GeneratedMessagePart
  export const locales: readonly GeneratedLocale[]
  export function getLocale(): GeneratedLocale
  export function localizeUrl(url: string | URL, options?: { locale?: GeneratedLocale }): URL
  export function deLocalizeUrl(url: string | URL): URL
}

declare module '#/paraglide/server.js' {
  export function paraglideMiddleware<T>(
    request: Request,
    resolve: (args: {
      request: Request
      locale: GeneratedLocale
    }) => T | Promise<T>,
    callbacks?: {
      onRedirect: (response: Response) => void
    },
  ): Promise<Response>
}
