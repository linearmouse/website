import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

import GlobalStyle from 'components/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider locale={router.locale} timeZone="Europe/Vienna" messages={pageProps.messages}>
      <GlobalStyle />

      <Component {...pageProps} />
    </NextIntlClientProvider>
  )
}

export default MyApp
