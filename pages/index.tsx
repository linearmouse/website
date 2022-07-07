import Header from 'components/header'
import Hero from 'components/hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <>
    <Head>
      <title>LinearMouse | The mouse and trackpad utility on macOS.</title>
      <meta
        name="description"
        content="Customize mouse and trackpad's scrolling direction, pointer acceleration, pointer speed and so on..."
      />
    </Head>

    <Header />

    <Hero />
  </>
)

export default Home
