import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({name, description, repo, live, image_dt}) => {

  return (
    <div className='flex flex-col w-300 h-300 bg-primary cursor-pointer relative overflow-hidden card'>
        <div className='w-full h-full flex flex-col justify-between p-4 text-left'>
          <p className='text-xl text-white font-semibold font-heading'>{name}</p>
          <p className="text-base text-white">
            {description}
          </p>
          <div className="flex items-center justify-between w-1/3">
            <a href={repo} target='_blank' rel='noreferrer' className='text-3xl text-white duration-500'>
              <FiGithub />
            </a>
            <a href={live} target='_blank' rel='noreferrer' className='text-3xl text-white duration-500'>
              <FiExternalLink />
            </a>
          </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-30 swipe-effect'>
          <img src={image_dt} alt="project" className='w-full h-full object-cover object-top' />
        </div>
    </div>
  )
}

export default Card
