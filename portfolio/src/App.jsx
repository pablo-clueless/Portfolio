import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { About, Contact, Experience, Footer, Header, MobileMenu, Navbar, Projects, Skills } from './components'
import { theme } from './theme'
import { getGithubData } from './store/features/dataSlice'

const App = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector(store => store.data)

  useEffect(() => {
    dispatch(getGithubData())
    console.log(data)
  },[])

  if(isLoading) return <h1>Loading...</h1>

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header data={data} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App