import { NextMiddleware, NextResponse } from 'next/server'
import { isMainlandChinaCluster } from 'utils/config'

const countryRedirects: Partial<Record<string, string>> = {
  CN: 'https://linearmouse.cn'
}

export const middleware: NextMiddleware = (req) => {
  if (isMainlandChinaCluster) return

  // no contry redirect?
  if (req.cookies.get('NCR')?.value === '1') return

  // set no-contry-redirect cookie?
  if (req.nextUrl.pathname === '/ncr/') {
    const res = NextResponse.redirect(new URL('/', req.url), { status: 307 })
    res.cookies.set('NCR', '1', { path: '/', maxAge: 31536000 })
    return res
  }

  // country redirect
  const ipCountry = req.headers.get('Cf-Ipcountry')
  if (!ipCountry || !Object.hasOwn(countryRedirects, ipCountry)) return
  const redirectTo = countryRedirects[ipCountry]
  if (!redirectTo) return
  return NextResponse.redirect(redirectTo, { status: 307 })
}
