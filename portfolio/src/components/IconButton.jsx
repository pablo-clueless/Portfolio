import React from 'react'

const IconButton = ({icon, customFn, to, large}) => {

  if(to) {
    return (
      <a href={to} target='_blank' rel='noreferrer' className={`rounded-full grid place-items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary hover:drop-shadow-xl ${large && 'text-3xl'}`}>
        {icon}
      </a>
    )
  }

  return (
    <button className={`rounded-full grid place-items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary hover:drop-shadow-xl ${large && 'text-3xl'}`} onClick={customFn}>
        {icon}
    </button>
  )
}

export default IconButton