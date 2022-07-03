import React from 'react'
import { ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { About, Contact, Experience, Footer, Header, Navbar, Projects, Sidebar, Skills } from './components'
import { theme } from './theme'

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className={classes.root}>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App