import React from 'react'

import { CONNECT } from '../constants'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='w-full px-2 md:px-20 py-5'>
      <div className='w-full flex flex-wrap items-center justify-between gap-5'>
        <Logo size="text-6xl" color="text-white" />
        <div className='flex items-center gap-4'>
          {CONNECT.map((item, index) => (
            <a key={index} href={item.url} target='_blank' className='bg-gray-500 p-2 rounded hover:scale-110'>
              <span className='text-white text-xl'>
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-500 my-10'></div>
      <div className='w-full flex items-center justify-between'>
        <p className='text-xs text-white font-bold uppercase'>
          &copy; {new Date().getFullYear()} Samson Okunola
        </p>
      </div>
    </footer>
  )
}

export default Footer