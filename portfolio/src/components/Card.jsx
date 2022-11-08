import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Card = ({id, name, description, repo, live, image_dt}) => {

  return (
    <div className='flex flex-col w-300 h-300 bg-primary cursor-pointer relative overflow-hidden card'>
        <div className='w-full h-full flex flex-col justify-between p-4 text-left'>
          <p className='text-xl text-white font-semibold font-heading'>{name}</p>
          <p className="text-base text-white">
            {description}
          </p>
          <div className="flex items-center justify-between w-1/3">
            <Link to={`/project/${id}`} className="bg-white text-primary text-xs font-bold py-1 px-2 uppercase hover:bg-transparent hover:text-white border-1 hover:border-white transition-all ease-in-out">
              more
            </Link>
          </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-30 swipe-effect'>
          <img src={image_dt} alt="project" className='w-full h-full object-cover object-top' />
        </div>
    </div>
  )
}

export default Card
