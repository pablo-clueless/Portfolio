import Head from 'next/head'
import About from '../comps/About'

import Contact from '../comps/Contact'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import MobileMenu from '../comps/MobileMenu'
import Skills from '../comps/Skills'
import Work from '../comps/Work'

export default function Home() {
  return (
    <>
    <Head>
      <title>Samson Okunola</title>
      <meta name='author' content='Samson Okunola'/>
      <meta name='description' content="Samson Okunola's portfolio site"/>
      <meta name='description' content="Samson Okunola is a frontend developer and content writer."/>
      <link rel='shortcut icon' href='/branding.png' />
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
