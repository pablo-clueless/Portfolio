import React from 'react'

import Card from './Card'
import { data } from '../assets/data/project-data'

const Projects = () => {

    return (
        <div className='flex flex-col items-center text-center bg-black px-6 py-10' id="projects">
            <div className='mb-12 text-left'>
                <p className='text-6xl font-black font-heading text-primary outline-text'>
                    PROJECTS
                </p>
            </div>
           <p className='text-2xl text-white'>
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