import type { NextPage } from 'next'
import Head from 'next/head'

import Features from 'components/features'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'

const Home: NextPage = () => (
  <>
    <Head>
      <title>LinearMouse | The mouse and trackpad utility for Mac.</title>
      <meta
        name="description"
        content="Customize mouse and trackpad's scrolling direction, pointer acceleration, pointer speed and so on..."
      />
    </Head>

    <Header />

    <Hero />

    <Features />

    <Footer />
  </>
)

export default Home
