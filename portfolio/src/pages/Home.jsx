import React from 'react'

import { About, Contact, Header, Skills, Experience, Footer, Projects } from '../components'

const Home = () => {
  return (
    <>
    <Header />
    <About />
    {/* <Skills /> */}
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Home