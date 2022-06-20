import React from 'react'
import { About, Contact, Experience, Footer, Header, MobileMenu, Projects, Skills } from './components'

const App = () => {
  return (
    <>
    <Header />
    <MobileMenu />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App