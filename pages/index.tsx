import type { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'

import Features from 'components/features'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'

export async function getStaticProps(context: any) {
  const common = (await import(`../locales/${context.locale}/common.json`)).default
  const index = (await import(`../locales/${context.locale}/index.json`)).default

  const messages = { common, index }

  return {
    props: {
      messages
    }
  }
}

const Home: NextPage = () => {
  const t = useTranslations('index')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>

      <Header />

      <Hero />

      <Features />

      <Footer />
    </>
  )
}

export default Home
