import React from 'react'

const Button = ({customFn, text, icon, variant}) => {
    if(variant === 'outlined') {
        return (
            <button type='button' className='text-base border-1 dark:border-white text-gray-600 dark:text-white flex items-center gap-2 px-2 py-1 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-gray-600 duration-500' onClick={customFn}>
                {text} {icon}
            </button>
        )
    }
  return (
    <button type='button' className='text-base border-1 dark:border-white text-gray-600 dark:text-white flex items-center gap-2 px-2 py-1 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-gray-600 duration-500' onClick={customFn}>
        {text} {icon}
    </button>
  )
}

export default Button