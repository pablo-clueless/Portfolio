import Head from 'next/head'
import About from '../comps/About'
import Contact from '../comps/Contact'
import Experience from '../comps/Experience'
import Header from '../comps/Header'
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
    <About />
    <Work />
    <Experience />
    <Contact />
    </>
  )
}
