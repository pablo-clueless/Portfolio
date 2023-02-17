import React from 'react'
import { motion } from 'framer-motion'

import Card from './Card3'
import { data } from '../assets/data/project'

const initial = {opacity: 0,scale: 0.5}
const animate = {opacity: 1,scale: 1}
const transition = {default: {duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
const scale = {type: 'spring',stiffness: 100,dumping: 5,restDelta: 0.001}

const initialDiv = {x: '-100%',opacity: 0,scale: 0.5}
const animateDiv = {x: 0, opacity: 1,scale: 1,transition: {duration: 2, ease: 'easeInOut'}}

const Projects = () => {

    return (
        <div className='flex flex-col items-center text-center px-6 py-10' id="projects">
            <motion.div initial={initialDiv} whileInView={animateDiv} className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-black outline-text'>
                    PROJECTS
                </p>
            </motion.div>
           <p className='text-2xl text-black'>
                These are some projects I've worked on.
            </p>
           <div className='flex flex-wrap items-center gap-8 mt-12'>
                {data.map((data) => (
                    <motion.div key={data.id} initial={initial} whileInView={animate} transition={{default: transition, scale: scale}}>
                        <Card {...data} />
                    </motion.div>
                ))}
            </div>
       </div>
    )
}

export default Projects