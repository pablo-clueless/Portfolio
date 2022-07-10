import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-main-bg dark:bg-main-dark-bg'>
            <p className='text-base text-gray-600 dark:text-white'>
                Designed and built by Okunola Samson - <span className='text-primary'>@pablo_clueless</span>
            </p>
            <a href='#home' className='text-gray-600 dark:text-white duration-500 bounce'>
                scroll to top &uarr;
            </a>
        </div>
    )
}

export default Footer