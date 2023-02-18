import React from 'react'
import { motion } from 'framer-motion'
import { FiCodepen, FiGithub, FiLinkedin, FiMail ,FiTwitter } from 'react-icons/fi'
import { Hashnode } from '../assets/icons'

import { Button, IconButton } from '.'

const container = {hidden: {opacity: 0 },show: {opacity: 1,transition: {staggerChildren: 0.75,},},}
const item = {hidden: {opacity: 0},show: {opacity: 1}}
const initial = {y: '100%',opacity: 0}
const animate = {y: 0, opacity: 1,transition: {duration: 0.5, ease: 'easeInOut'}}

const Contact = () => {

    return (
        <div className='flex flex-col items-center text-center px-6 py-10' id="contact">
            <motion.div initial={initial} whileInView={animate} className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-white'>
                    GET IN TOUCH
                </p>
            </motion.div>

            <p className='text-3xl text-white my-4'>
                Looking to hire? Have a project?
            </p>

            <p className='text-2xl text-white my-4'>
                I&apos;m currently open to mid-level roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I&apos;ll try to get back as soon as possible.
            </p>

            <Button to='mailto:smsnmicheal@gamil' text='GET IN TOUCH' icon={<FiMail />} mt={64} mb={64} />
            <motion.ul variants={container} initial='hidden' whileInView='show' className='flex items-center justify-between'>
                <motion.li variants={item} className='md:mx-4 mx-0.5'>
                    <IconButton to='https://codepen.io/pablo-clueless' icon={<FiCodepen color='#FFF' />} large />
                </motion.li>
                <motion.li variants={item} className='md:mx-4 mx-0.5'>
                    <IconButton to='https://github.com/pablo-clueless' icon={<FiGithub color='#FFF' />} large />
                </motion.li>
                <motion.li variants={item} className='md:mx-4 mx-0.5'>
                    <IconButton to='https://linkedin.com/in/samson-okunola/' icon={<FiLinkedin color='#FFF' />} large />
                </motion.li>
                <motion.li variants={item} className='md:mx-4 mx-0.5'>
                    <IconButton to='https://twitter.com/pablo_clueless' icon={<FiTwitter color='#FFF' />} large />
                </motion.li>
                <motion.li variants={item} className='md:mx-4 mx-0.5'>
                    <IconButton to='https://hashnode.com/@pablo-clueless' icon={<Hashnode fill="#FFF" />} large />
                </motion.li>
            </motion.ul>
        </div>
    )
}

export default Contact