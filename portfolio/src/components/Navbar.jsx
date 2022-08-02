import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import logo from '/images/logo.png'
import { useStateContext } from '../contexts/ContextProvider'

const Navbar = () => {
    const { isOpen, toggleOpen } = useStateContext()
      
  return (
    <nav className='w-screen flex items-center justify-between fixed top-0 left-0 py-4 px-8 bg-black z-50'>
            <img src={logo} alt="logo" className='md:w-16 md:h-16 w-12 h-12' />

            <ul className='md:flex items-center gap-4 hidden'>
                <li>
                    <a href="#about" className='text-base font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className='text-base font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className='text-base font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        Contact
                    </a>
                </li>
            </ul>
            <div className='block md:hidden text-white text-2xl cursor-pointer' onClick={toggleOpen}>
                {isOpen ? <FiX /> : 
                <div className='flex flex-col justify-center gap-2 h-4 w-8'>
                    <span className='w-full h-0.5 bg-white rounded-sm'></span>
                    <span className='w-3/4 h-0.5 bg-white rounded-sm self-end'></span>
                </div>
                }
            </div>
    </nav>
  )
}

export default Navbar