import GlobalStyle from 'components/GlobalStyle'
import StyledComponentsRegistry from 'components/styled-components-regsitry'
import { NextIntlClientProvider } from 'next-intl'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
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
