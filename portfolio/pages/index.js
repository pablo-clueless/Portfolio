import Head from 'next/head'

import { About, Contact, Experience, Footer, Header, MobileMenu, Particle, Skills, Work } from '../comps/index'

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
    <Experience />
    <Work />
    <Contact />
    <Footer />
    </>
  )
}
