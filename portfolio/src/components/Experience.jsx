import React from 'react'
import { motion } from 'framer-motion'

import { WorkData } from '../assets/data/work-data'
import Card2 from './Card2'

const initial = {y: 50,opacity: 0}
const animate = {y: 0, opacity: 1,transition: {duration: 1, ease: 'easeInOut'}}

const Experience = () => {

  return (
    <div className='flex flex-col items-center text-center px-6 py-10' id="about">
      <motion.div initial={initial} whileInView={animate} className='mb-12 text-left'>
        <p className='md:text-6xl text-4xl font-black font-heading text-white'>
          EXPERIENCE
        </p>
      </motion.div>

      <p className='text-3xl text-white'>
        Below are some of the companies where I've worked as a developer.
      </p>

      <div className='flex flex-wrap items-center gap-8 my-4'>
        {WorkData.map((item) => (
          <Card2 key={item.index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Experience