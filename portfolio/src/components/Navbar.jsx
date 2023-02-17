import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

import logo from '/images/logo.png'
import { useStateContext } from '../contexts/ContextProvider'

const links = ['about', 'projects', 'contact']

const Name = () => {
    return (
        <h1 className='font-extrabold text-2xl'>Okunola Samson</h1>
    )
}

const Navbar = () => {
    const { isOpen, toggleOpen } = useStateContext()
      
  return (
    <nav className='w-screen flex items-center justify-between bg-white fixed top-0 left-0 py-4 px-8 z-50 shadow-lg'>
            <Name />

            <ul className='md:flex items-center gap-4 hidden'>
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link}`} className='nav_link'>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='block md:hidden text-black text-2xl cursor-pointer' onClick={toggleOpen}>
                {isOpen ? <FiX /> : 
                <div className='flex flex-col justify-center gap-2 h-4 w-8'>
                    <span className='w-full h-[1px] bg-black rounded-sm'></span>
                    <span className='w-3/4 h-[1px] bg-black rounded-sm self-end'></span>
                </div>
                }
            </div>
    </nav>
  )
}

export default Navbar