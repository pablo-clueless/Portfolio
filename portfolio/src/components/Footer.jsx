import React from 'react'

const Footer = () => {
    return (
        <div className='flex sm:flex-row flex-col items-center justify-between p-4 bg-secondary'>
            <p className='text-base text-white'>
                Designed and built by <span className='text-primary'>@pablo_clueless</span>
            </p>
            <a href='#home' className='text-white hover:text-primary duration-500 bounce'>
                scroll to top &uarr;
            </a>
        </div>
    )
}

export default Footer