import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Card3 = ({name, description, company, url, image}) => {
  return (
    <div className='w-[320px] max-w-full h-[400px] relative'>
      <div className='w-[320px] max-w-full h-[400px] flex flex-col gap-3 py-2 px-4 bg-white border border-black absolute top-0 left-0 z-[1] top-card'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-base font-bold text-primary leading-6'>{name}</p>
          <a href={url} rel='noreferrer' target='_blank' className='text-black hover:scale-125 transition-all duration-300 ease-in-out'>
              <FiExternalLink />
          </a>
        </div>
        <div className='w-full h-[150px]'>
          <img src={`${image}`} alt="" className='w-[150px] h-[150px] card-image' />
        </div>
        <p className='h-[150px] text-base font-medium text-black text-left'>{description}</p>
        <p className='text-xs font-bold text-black text-left'>{company}</p>
      </div>
      <div className='w-[320px] max-w-full h-[400px] bg-black absolute top-2 left-2 shadow-card transition-all duration-500 ease-in-out'></div>
    </div>
  )
}

export default Card3