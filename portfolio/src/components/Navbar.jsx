import { Moon, Sun } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { useStateContext } from '../hooks'
import Logo from './Logo'

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false)
  const {handleMode, mode} = useStateContext()

  const handleScroll = () => {
    if(window.scrollY > 700) {
      setisScrolled(true)
    } else {
      setisScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className={`w-full flex items-center justify-between bg-white dark:bg-black px-2 md:px-20 py-4 top-0 left-0 z-10 ${isScrolled ? 'fixed' : 'static'}`}>
      <Logo />
      <div className='text-2xl text-black dark:text-white'>
        {mode === 'light' ? (
          <button onClick={() => handleMode('dark')}>
            <Moon />
          </button>
        ):(
          <button onClick={() => handleMode('light')}>
            <Sun />
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar