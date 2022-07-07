import Header from 'components/header'
import Hero from 'components/hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <>
    <Head>
      <title>LinearMouse</title>
    </Head>

    <Header />

    <Hero />
  </>
)

export default Home
