import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-main-bg dark:bg-main-dark-bg'>
            <p className='text-base text-gray-600 dark:text-white'>
                Designed and built by Okunola Samson - <span className='text-primary'>@pablo_clueless</span>
            </p>
            <motion.a href='#home' animate={{scale: 1}} whileHover={{color:"#E35A44",translateY:[-5, 0, -5], transition:{type: "spring",stiffness:100,duration:0.5,repeat:Infinity}}}>
                scroll to top &uarr;
            </motion.a>
        </div>
    )
}

export default Footer