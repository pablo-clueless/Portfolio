import React from 'react'
import { ThemeProvider } from '@mui/material'
import { Helmet } from 'react-helmet'

import { About, Contact, Experience, Footer, Header, Navbar, Projects, Sidebar, Skills } from './components'
import { theme } from './theme'
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { currentMode } = useStateContext()

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <ThemeProvider theme={theme}>
        <Helmet>
        {/* Primary Meta Tags */}
          <title>Samson Okunola</title>
          <meta name="title" content="Samson Okunola" />
          <meta name="description" content="Samson Okunola is a frontend developer who loves minimalist designs, and 3D animations, and is a Web3 enthusiast." />

        {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.okunolasamson.dev/" />
          <meta property="og:title" content="Samson Okunola" />
          <meta property="og:description" content="Samson Okunola is a frontend developer who loves minimalist designs, and 3D animations, and is a Web3 enthusiast." />
          <meta property="og:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1650869377/Pablo-Clueless_rtt8d9.png" />

          {/*  Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.okunolasamson.dev/" />
          <meta property="twitter:title" content="Samson Okunola" />
          <meta property="twitter:description" content="Samson Okunola is a frontend developer who loves minimalist designs, and 3D animations, and is a Web3 enthusiast." />
          <meta property="twitter:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1650869377/Pablo-Clueless_rtt8d9.png" />

          <title>Samson Okunola</title>
        </Helmet>
        <Navbar />
        <div className='w-screen mt-20'>
          <Header />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App