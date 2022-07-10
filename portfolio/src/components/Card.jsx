import React from 'react'

const Card = ({name, description, repo, live, image_dt}) => {

  return (
    <div className='flex flex-col w-300 rounded-md text-left px-1 bg-gray-300 dark:bg-black hover:scale-105 duration-500 cursor-pointer'>
      <p className='text-base font-medium text-primary py-1'>
        {name}
      </p>
      <img src={image_dt} alt="project" className='w-200 h-200' />

      <div className='flex flex-col w-full h-120 gap-2 py-2 px-1'>
        <p className='text-sm text-gray-600 dark:text-white'>
          {description}
        </p>

        <div className='flex items-center gap-4'>
          <a href={repo} target='_blank' rel='noreferrer' className='text-sm text-primary hover:text-gray-700 dark:hover:text-white'>
            Github
          </a>
          <a href={live} target='_blank' rel='noreferrer' className='text-sm text-primary hover:text-gray-700 dark:hover:text-white'>
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
