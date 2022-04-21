import Head from 'next/head'
import { motion } from 'framer-motion'

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
