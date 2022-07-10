import React, { useEffect } from 'react'
import { FiMoon, FiSun, FiTwitter } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'

import logo from '/images/logo.png'
import { Button, IconButton } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const Navbar = () => {
    const { currentMode, setMode, setIsOpen, toggleSidebar, screenSize, setScreenSize } = useStateContext()

    useEffect(() => {
        const handleScreenResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleScreenResize)
        
        handleScreenResize()
    
        return () => window.removeEventListener('resize', handleScreenResize)
      },[])
    
      useEffect(() => {
        screenSize > 768 && setIsOpen(false)
      },[screenSize])
      
  return (
    <nav className='w-screen flex items-center justify-between fixed top-0 left-0 bg-main-bg dark:bg-main-dark-bg z-10 border-b-1 border-color dark:border-white p-4'>
            <img src={logo} alt="logo" className='w-12 h-12' />

            <ul className='md:flex items-center gap-4 hidden'>
                <li>
                    <a href="#projects" className='text-base font-medium text-gray-600 dark:text-white hover:text-primary'>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className='text-base font-medium text-gray-600 dark:text-white hover:text-primary'>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="https://frontendpablo.hashnode.dev" target='_blank' rel='noreferrer' className='text-base font-medium text-gray-600 dark:text-white hover:text-primary'>
                        Blog
                    </a>
                </li>
            </ul>

            <div className='flex items-center gap-4'>
                {currentMode === 'Light' ? <IconButton icon={<FiMoon />} customFn={() => setMode('Dark')} /> : <IconButton icon={<FiSun />} customFn={() => setMode('Light')} />}
                <Button text="Resume" />

                <div className='block md:hidden'>
                    <IconButton icon={<AiOutlineMenu />} customFn={toggleSidebar} />
                </div>
            </div>
    </nav>
  )
}

export default Navbar