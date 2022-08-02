import React from 'react'

import { WorkData } from '../assets/data/work-data'
import Card2 from './Card2'

const Experience = () => {

  return (
    <div className='flex flex-col items-center text-center bg-black px-6 py-10' id="about">
      <div className='mb-12 text-left'>
        <p className='md:text-6xl text-4xl font-black font-heading text-primary'>
          EXPERIENCE
        </p>
      </div>

      <p className='text-3xl text-white'>
        Below are some of the companies where I've worked as a developer.
      </p>

      <div className='flex flex-col items-center my-4'>
        {WorkData.map((item) => (
          <Card2 key={item.index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Experience