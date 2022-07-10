import React from 'react'

const IconButton = ({icon, customFn, to}) => {
    if(to) {
        return (
            <a href={to} target='_blank' rel='noreferrer'>
                <button className='w-10 h-10 rounded-full grid place-items-center hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white cursor-pointer'>
                    {text}
                </button>
            </a>
        )
    }
  return (
    <button className='w-10 h-10 rounded-full grid place-items-center hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white' onClick={customFn}>
        {icon}
    </button>
  )
}

export default IconButton