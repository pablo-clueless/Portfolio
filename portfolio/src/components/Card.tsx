import { Link } from '@phosphor-icons/react'
import React from 'react'

interface Props {
  description: string
  image: string
  name: string
  url: string
}

const Card = (props:Props) => {
  const {description, image, name, url} = props
  
  return (
    <div className='w-full flex flex-col gap-4 p-1 border border-gray-500 rounded cursor-pointer hover:animate-jiggle transition-all duration-500 ease-in-out relative'>
      <a href={url} target='_blank' className='bg-black text-sm text-white rounded-full p-2 md:text-2xl absolute top-2 right-2'>
        <Link />
      </a>
      <img src={image} alt={name} className='w-full object-cover rounded border' />
      <div className='flex flex-col'>
        <p className='text-lg font-black tracking-wide'>{name}</p>
        <p className='text-sm font-bold'>{description}</p>
      </div>
    </div>
  )
}

export default Card