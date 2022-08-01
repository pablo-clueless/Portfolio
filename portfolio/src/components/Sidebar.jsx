import React from 'react'
import { motion } from 'framer-motion'
import { FiCodepen, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Hashnode } from '../assets/icons'

import { IconButton } from '.'

const container = {hidden: {opacity: 0 },show: {opacity: 1,transition: {staggerChildren: 0.75,},},}
const item = {hidden: {opacity: 0},show: {opacity: 1}}

const Sidebar = () => {

  return (
    <div className='flex flex-col justify-center items-center w-full h-full fixed right-0 bg-black float-right px-2 z-20'>
        <div className='flex flex-col items-center gap-2 h-full'>
            <motion.ul variants={container} initial='hidden' animate='show' className='flex flex-col items-center gap-12 my-20'>
                <motion.li variants={item}>
                    <a href="#projects" className='text-xl font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        Projects
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="#contact" className='text-xl font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        Contact
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href="https://frontendpablo.hashnode.dev" target='_blank' rel='noreferrer' className='text-xl font-medium text-white hover:text-primary hover:bg-white duration-500 px-2 py-1 rounded-sm'>
                        Blog
                    </a>
                </motion.li>
            </motion.ul>

            <div className='flex items-center'>
                <IconButton to='https://codepen.io/pablo-clueless' icon={<FiCodepen />} />
                <IconButton to='https://github.com/pablo-clueless' icon={<FiGithub />} />
                <IconButton to='https://linkedin.com/in/samson-okunola/' icon={<FiLinkedin />} />
                <IconButton to='https://twitter.com/pablo_clueless' icon={<FiTwitter />} />
                <IconButton to='https://hashnode.com/@pablo_clueless' icon={<Hashnode />} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar