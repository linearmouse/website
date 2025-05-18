import { getTranslations, setRequestLocale } from 'next-intl/server'

import Features from 'components/features'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'index' })

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />

      <Hero />

      <Features />

      <Footer />
    </>
  )
}
