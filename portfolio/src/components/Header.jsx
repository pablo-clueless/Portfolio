import React from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

import { Button } from '.'

const initial = {x: -1000}
const animate = {x: 50,transition: {duration: 2,ease: 'easeInOut' }}
const style = {WebkitTextStroke: '1px #fff',color: '#fff',WebkitTextFillColor: 'transparent'}

const Header = () => {

    return (
        <div className='w-full h-screen bg-transparent flex flex-col items-center justify-center relative' id='home'>
            <motion.div initial={initial} animate={animate} className='flex self-start'>
                <p className='md:text-6xl text-4xl font-black font-heading text-white dark:text-white uppercase px-4'>
                    Hi! I'm Samson.<br />
                    <span style={style}>A web developer</span><br />
                    — based in lagos.
                </p>
            </motion.div>
            <motion.div className='w-100 h-100 bg-white rounded-full absolute top-1/4 right-1/2' />

            <div className='flex self-start ml-8'>
                <Button to='mailto:smsnmicheal@gmail.com' text='Hire Me' mt={32} icon={<FiMail/>} />
            </div>
        </div>
    )
}

export default Header