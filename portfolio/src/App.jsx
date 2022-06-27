import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'

import { About, Contact, Experience, Footer, Header, Navbar, Projects, Sidebar, Skills } from './components'
import { theme } from './theme'
import { getGithubData } from './store/features/dataSlice'
import { closeSidebar, openSidebar } from './store/features/sidebarSlice'

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
  }
})

const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { data, isLoading } = useSelector(store => store.data)
  const { isOpen } = useSelector(store => store.sidebar)

  const toggleSidebar = () => {
    if(isOpen) {
      dispatch(closeSidebar())
    } else {
      dispatch(openSidebar())
    }
  }

  useEffect(() => {
    dispatch(getGithubData())
  },[])

  if(isLoading) return <h1>Loading...</h1>

  return (
    <ThemeProvider theme={theme}>
      {isOpen && <Sidebar handleToggle={toggleSidebar} />}
      <Navbar handleToggle={toggleSidebar} />
      <div className={classes.root}>
        <Header data={data} />
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