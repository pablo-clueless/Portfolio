import React from 'react'
import { useParams } from 'react-router-dom'

import { data } from '../assets/data/project-data'
import { Footer } from '../components'

const Project = () => {
    const { id } = useParams()

    const project = data.find((project) => project.id === id)
    
  return (
    <div className='w-full flex flex-col mt-32'>
        <div className='w-full flex flex-col items-center text-center'>
            <p className='text-primary text-3xl md:text-6xl font-bold'>{project.name}</p>
            <div className='w-[300px] h-[250px] md:w-[650px] md:h-[400px] mt-4 mb-8 cursor-pointer p-card'>
                <img src={project.image_dt} alt={project.name} className='w-full h-full object-cover object-top' />
            </div>
            <p className='w-full md:w-1/2 text-white text-xl'>
                {project.description}
            </p>
            <div className='w-full flex flex-col items-center md:w-1/2 mt-8'>
                <p className='text-primary text-2xl md:text-3xl font-bold'>Built with</p>
                <ul className='w-full flex flex-col items-center justify-center gap-4 list-disc'>
                    {project.build.map((item, index) => (
                        <li key={index} className='text-white text-lg md:text-xl uppercase'>{item}</li>
                    ))}
                </ul>
                <div className='w-full md:w-1/2 flex items-center justify-between gap-4 mt-12 mb-8 px-20 md:px-0'>
                    <a href={project.source_code} className='text-white hover:text-primary text-base md:text-xl underline'>Source code</a>
                    <a href={project.live} className='text-white hover:text-primary text-base md:text-xl underline'>Live</a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Project