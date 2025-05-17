import GlobalStyle from 'components/GlobalStyle'
import StyledComponentsRegistry from 'components/styled-components-regsitry'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

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
