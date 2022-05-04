import Head from 'next/head'

import { About, Contact, Footer, Header, MobileMenu, Skills, Work } from '../comps/index'

export default function Home() {
  return (
    <>
    <Head>
      <title>Samson Okunola</title>
    </Head>
    <Header />
    <MobileMenu />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </>
  )
}
