import React, { Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes } from 'react-router-dom'

import { AudioControls, Glimer, Navbar } from './components'
import { useStateContext } from './contexts/ContextProvider'
import { Home, Project } from './pages'

const Sidebar = React.lazy(() => import('./components/Sidebar'))

const App = () => {
  const { isOpen, setIsOpen, screenSize, setScreenSize } = useStateContext()

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleScreenResize)

    handleScreenResize()

    return () => window.removeEventListener('resize', handleScreenResize)
  },[])

  useEffect(() => {
    screenSize >= 768 ? setIsOpen(false) : null
  },[screenSize])

  return (
    <>
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
      <div className='w-screen bg-white relative'>
        <Suspense fallback={<Glimer />}>
          {isOpen && <Sidebar />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App