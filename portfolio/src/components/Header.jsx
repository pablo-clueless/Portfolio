import React from 'react'
import { FiMail } from 'react-icons/fi'

import image from '/images/pablo.jpeg'
import { Button } from '.'

const Header = () => {

    return (
        <div className='w-full h-screen bg-main-bg dark:bg-main-dark-bg flex flex-col items-center justify-center' id='home'>
            <img src={image} alt='Samson Okunla' className='w-44 h-44 rounded-full object-cover'/>

            <p className='text-6xl font-medium text-center text-gray-600 dark:text-white uppercase px-4'>
                Hi! I'm Samson.<br />
                A web developer based in lagos.
            </p>
            <Button to='mailto:smsnmicheal@gmail.com' text='Hire Me' mt={32} icon={<FiMail />} />
        </div>
    )
}

export default Header