import React from 'react'

const IconButton = ({icon, customFn, to, large}) => {

  if(to) {
    return (
      <a href={to} target='_blank' rel='noreferrer' className={`rounded-full grid place-items-center p-4 hover:bg-gray-400 text-black hover:text-primary hover:drop-shadow-xl text-2xl ${large && 'text-3xl'}`}>
        {icon}
      </a>
    )
  }

  return (
    <button className={`rounded-full grid place-items-center p-4 text-black hover:bg-gray-400 hover:text-primary hover:drop-shadow-xl text-2xl ${large && 'text-3xl'}`} onClick={customFn}>
        {icon}
    </button>
  )
}

export default IconButton