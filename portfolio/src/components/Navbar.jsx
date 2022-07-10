import React from 'react'
import { FiMoon, FiSun, FiTwitter } from 'react-icons/fi'

import logo from '/images/logo.png'
import { Button, IconButton } from './'
import { useStateContext } from '../contexts/ContextProvider'

const Navbar = () => {
    const { currentMode, setMode } = useStateContext()

  return (
    <nav className='w-full flex items-center justify-between fixed top-0 left-0 bg-main-bg dark:bg-main-dark-bg z-10 border-b-1 border-color dark:border-white p-4'>
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
                <a href="https://twitter.com/messages/compose?recipient_id=3805104374" target='_blank' rel='noreferrer' className='text-base text-gray-600 dark:text-white' data-screen-name='@pablo_clueless'>
                    <Button text="Let's Chat" icon={<FiTwitter />} />
                </a>
            </div>
    </nav>
  )
}

export default Navbar