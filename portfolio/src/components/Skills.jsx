import { motion } from 'framer-motion'

import { JavaScript, Nextjs, Nodejs, React, Redux, Sass, Solidity, Styledcomponents, Threejs, TypeScript } from '../assets/icons'

const Skills = () => {

    return (
        <div className='flex flex-col items-center text-center bg-black px-6 py-10' id="about">
            <div className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-primary outline-text'>
                    SKILLS
                </p>
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-2xl text-white mb-2'>
                        2 years+, a ton of tutorials and online courses, here I am.
                    </p>

                    <p className='text-xl text-white'>
                        A passion of mine is translating logic and designs into code. Here are some the tools I use
                    </p>
                </div>
                <motion.ul className='md:w-1/2 text-left w-full my-4 flex flex-wrap gap-8'>
                    <motion.li>
                        <JavaScript fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Nextjs fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Nodejs fill='white'/>
                    </motion.li>
                    <motion.li>
                        <React fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Redux fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Sass fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Solidity fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Styledcomponents fill='white'/>
                    </motion.li>
                    <motion.li>
                        <Threejs fill='white'/>
                    </motion.li>
                    <motion.li>
                        <TypeScript fill='white'/>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}

export default Skills