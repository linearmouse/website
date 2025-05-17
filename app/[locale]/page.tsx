import { getTranslations } from 'next-intl/server'

import Features from 'components/features'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'

export const generateMetadata = async () => {
  const t = await getTranslations('index')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Features />

      <Footer />
    </>
  )
}
