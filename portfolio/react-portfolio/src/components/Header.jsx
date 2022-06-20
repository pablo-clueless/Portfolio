import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/header.css'
import logo from '/images/logo.png'

const menu = ['home', 'about', 'projects', 'skills', 'contact']

const Header = () => {

    return (
        <motion.header className='header' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 5 } }} id="home">
            <nav className='main_nav'>
                <img src={logo} alt='Samson Okunola' />
                <ul>
                    {menu.map(item => (
                    <li key={item}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                    ))}
                </ul>
            </nav>
            <span>
                Hello, I&apos;m
            </span>
            <h1>Okunola Samson</h1>
            <p>Web Developer. Blockchain Enthusiast. Content Writer.</p>
        </motion.header>
    )
}

export default Header