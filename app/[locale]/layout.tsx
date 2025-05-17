import GlobalStyle from 'components/GlobalStyle'
import StyledComponentsRegistry from 'components/styled-components-regsitry'
import { NextIntlClientProvider } from 'next-intl'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from 'i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
