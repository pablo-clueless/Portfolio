import React from 'react'

import { WorkData } from '../assets/data/work-data'
import Card2 from './Card2'

const Experience = () => {

  return (
    <div className='flex flex-col items-center text-center bg-main-bg dark:bg-main-dark-bg px-6 py-10' id="about">
            <p className='text-6xl font-medium text-primary mb-10'>
                Experience
            </p>

      <p className='text-3xl text-gray-600 dark:text-white'>
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