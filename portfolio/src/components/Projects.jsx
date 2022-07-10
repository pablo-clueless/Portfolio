import React from 'react'

import Card from './Card'
import { data } from '../assets/data/project-data'

const Projects = () => {

    return (
        <div className='flex flex-col items-center text-center bg-main-bg dark:bg-main-dark-bg px-6 py-10' id="about">
            <p className='text-6xl font-medium text-primary mb-10'>
                Projects
            </p>

           <p className='text-2xl text-gray-600 dark:text-white'>
            I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.
            </p>

           <div className='flex flex-wrap items-center justify-center gap-8 mt-12'>
                {data.map((item) => (
                    <Card key={item.name} {...item} />
                ))}
            </div>
       </div>
    )
}

export default Projects