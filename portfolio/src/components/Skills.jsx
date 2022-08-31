import { motion } from 'framer-motion'

import { JavaScript, Nextjs, Nodejs, React, Redux, Sass, Solidity, Styledcomponents, Threejs, TypeScript } from '../assets/icons'

const initial = {y: -50,opacity: 0}
const animate = {y: 0, opacity: 1,transition: {duration: 1, ease: 'easeInOut'}}
const container = {hidden: {opacity: 0 },show: {opacity: 1,transition: {staggerChildren: 0.75,},},}
const item = {hidden: {opacity: 0},show: {opacity: 1}}

const Skills = () => {

    return (
        <div className='flex flex-col items-center text-center bg-black px-6 py-10' id="about">
            <motion.div initial={initial} whileInView={animate} className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-primary outline-text'>
                    SKILLS
                </p>
            </motion.div>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-3xl text-white mb-2'>
                        2 years+, a ton of tutorials and online courses, here I am.
                    </p>

                    <p className='text-2xl text-white'>
                        A passion of mine is translating logic and designs into code. Here are some the tools I use
                    </p>
                </div>
                <motion.ul variants={container} initial='hidden' animate='show' className='md:w-1/2 text-left w-full my-4 flex flex-wrap gap-8'>
                    <motion.li variants={item}>
                        <JavaScript fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Nextjs fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Nodejs fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <React fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Redux fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Sass fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Solidity fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Styledcomponents fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <Threejs fill='white'/>
                    </motion.li>
                    <motion.li variants={item}>
                        <TypeScript fill='white'/>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}

export default Skills