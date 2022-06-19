import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCodepen, FiGithub, FiLinkedin, FiMail ,FiTwitter } from 'react-icons/fi'

import '../styles/contact.css'

const Contact = () => {
    const [showSection, setShowSection] = useState(false)
    const [lastYPosition, setLastYPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const positionY = window.scrollY
            const isScrolling = positionY > lastYPosition

            setShowSection(isScrolling)
            setLastYPosition(positionY)
        }
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPosition])

    return (
        <motion.section 
        className='section'
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSection ? 1 : 0, transition: { duration: 3 }}}>
            <h1>Contact</h1>

            <span>looking to hire? have a project? </span>

            <p>I&apos;m currently open to junior developer roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I&apos;ll try to get back as soon as possible.</p>

            <a href='mailto:smsnmicheal@gmail.com' className='link'>
                <FiMail /> get in touch
            </a>

            <ul>
                <li>
                    <a href='https://codepen.io/pablo-clueless' target='_blank' rel='noopener noreferrer'>
                        <FiCodepen />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/pablo-clueless' target='_blank' rel='noopener noreferrer'>
                        <FiGithub />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/samson-okunola/' target='_blank' rel='noopener noreferrer'>
                        <FiLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/pablo_clueless' target='_blank' rel='noopener noreferrer'>
                        <FiTwitter />
                    </a>
                </li>

            </ul>
        </motion.section>
    )
}

export default Contact