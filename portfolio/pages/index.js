import Head from 'next/head'
import About from '../comps/About'
import Header from '../comps/Header'
import Work from '../comps/Work'

export default function Home() {
  return (
    <>
    <Head>
      <title>Samson Okunola</title>
    </Head>
    <Header />
    <About />
    <Work />
    </>
  )
}
