import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { FiCodepen, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import { Button, IconButton } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const { toggleSidebar } = useStateContext()

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-half-transparent z-20'>
        <div className='flex flex-col justify-center items-center h-full w-300 bg-main-bg dark:bg-main-dark-bg float-right px-2 duration-500'>
            <div className='flex items-center justify-between w-full border-b-1 border-color dark:border-white py-2'>
                <Button text='Resume' />
                <button className='rounded-full grid place-items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary hover:drop-shadow-xl' onClick={toggleSidebar}>
                    <MdOutlineCancel />
                </button>
            </div>
            <div className='flex flex-col items-center gap-2 h-full'>
                <ul className='flex flex-col items-center gap-12 my-20'>
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

                <div className='flex items-center gap-2'>
                    <IconButton to='https://codepen.io/pablo-clueless' icon={<FiCodepen />} />
                    <IconButton to='https://github.com/pablo-clueless' icon={<FiGithub />} />
                    <IconButton to='https://linkedin.com/in/samson-okunola/' icon={<FiLinkedin />} />
                    <IconButton to='https://twitter.com/pablo_clueless' icon={<FiTwitter />} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar