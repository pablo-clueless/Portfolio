import React from 'react'

const Footer = () => {
    return (
        <div className='flex sm:flex-row flex-col items-center justify-between p-4 bg-white border-t'>
            <p className='text-base text-black'>
                Designed and built by <span className='text-primary'>@pablo_clueless</span>
            </p>
            <a href='#home' className='text-black hover:text-primary duration-500 bounce'>
                scroll to top &uarr;
            </a>
        </div>
    )
}

export default Footer