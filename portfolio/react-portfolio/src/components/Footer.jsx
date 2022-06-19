import React from 'react'
import { motion } from 'framer-motion'

import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>designed and built by Okunola Samson - <span>@pablo_clueless</span></p>
            <motion.a href='#home' animate={{ color: "var(--dark)", scale: 1 }} whileHover={{color: "var(--light)", translateY: [-5, 0, -5], transition: {type: "spring", stiffness: 100, duration: 0.5, repeat: Infinity}}}>
                scroll to top &uarr;
            </motion.a>
        </footer>
    )
}

export default Footer