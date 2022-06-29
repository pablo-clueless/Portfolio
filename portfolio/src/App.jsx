import React from 'react'
import { ThemeProvider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'

import { About, Contact, Experience, Footer, Header, Navbar, Projects, Sidebar, Skills } from './components'
import { theme } from './theme'
import { closeSidebar, openSidebar } from './store/features/sidebarSlice'

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
  }
})

const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { isOpen } = useSelector(store => store.sidebar)

  const toggleSidebar = () => {
    if(isOpen) {
      dispatch(closeSidebar())
    } else {
      dispatch(openSidebar())
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {isOpen && <Sidebar handleToggle={toggleSidebar} />}
      <Navbar handleToggle={toggleSidebar} />
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