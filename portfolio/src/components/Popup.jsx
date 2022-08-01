import React from 'react'

import { Button } from './'

const Popup = () => {
  return (
    <div className='w-90 md:w-500 h-200 bg-black border-1 border-white fixed bottom-1 left-1/2 -translate-x-1/2 p-4 text-white text-center popup'>
        <p className='text-xl'>Do you want to get better at programming?</p>
        <div className='mt-2 grid place-items-center'>
            <p className='text-lg'>Then join Community Pro.</p>
            <Button text='Show Me More' />
        </div>
    </div>
  )
}

export default Popup