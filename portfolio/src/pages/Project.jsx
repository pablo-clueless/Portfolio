import React from 'react'
import { useParams } from 'react-router-dom'

import { data } from '../assets/data/project-data'

const Project = () => {
    const { id } = useParams()

    const project = data.find((project) => project.id === id)
    
  return (
    <div className='w-full flex flex-col mt-32'>
        <div className='w-full flex flex-col items-center text-center'>
            <p className='text-primary text-3xl md:text-6xl font-bold'>{project.name}</p>
            <div className='w-[300px] h-[250px] md:w-[650px] md:h-[400px] mt-4 mb-8 cursor-pointer p-card'>
                <img src={project.image_dt} alt={project.name} className='w-full h-full object-cover' />
            </div>
            <p className='w-full md:w-1/2 text-white text-xl'>
                {project.description}
            </p>
        </div>
    </div>
  )
}

export default Project