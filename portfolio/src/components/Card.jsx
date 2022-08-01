import React, { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({name, description, repo, live, image_dt}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='flex flex-col w-300 h-300 cursor-pointer transition-all ease-in-out duration-500' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered ?
        <div className='w-full h-full flex flex-col justify-between p-4 text-left'>
          <p className='text-xl text-primary font-semibold'>{name}</p>
          <p className="text-base text-white">
            {description}
          </p>
          <div className="flex items-center justify-between w-1/3">
            <a href={repo} target='_blank' rel='noreferrer' className='text-2xl text-white hover:text-primary duration-500'>
              <FiGithub />
            </a>
            <a href={live} target='_blank' rel='noreferrer' className='text-2xl text-white hover:text-primary duration-500'>
              <FiExternalLink />
            </a>
          </div>
        </div> :
        <div className='wfull h-full transition-all ease-in-out duration-500'>
          <img src={image_dt} alt="project" className='w-full h-full object-cover ' />
        </div>
      }
    </div>
  )
}

export default Card
