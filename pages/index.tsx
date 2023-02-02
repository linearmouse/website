import type { GetServerSideProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import Features from 'components/features'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'

const Home: NextPage = () => {
  const { t } = useTranslation('index')

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

// TODO: SSG
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  return {
    props: {}
  }
}

export default Home
