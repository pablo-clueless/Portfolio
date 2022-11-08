import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({id, name, description, repo, live, image_dt}) => {

  return (
    <Link to={`/project/${id}`} className='flex flex-col w-300 h-300 bg-primary cursor-pointer relative overflow-hidden card'>
        <div className='w-full h-full flex flex-col justify-between p-4 text-left'>
          <p className='text-xl text-white font-semibold font-heading'>{name}</p>
          <p className="text-base text-white">
            {description}
          </p>
          <p className='w-full text-white text-base'>
            click to see more details
          </p>
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-30 swipe-effect'>
          <img src={image_dt} alt="project" className='w-full h-full object-cover object-top' />
        </div>
    </Link>
  )
}

export default Card
