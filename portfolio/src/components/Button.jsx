import React from 'react'

const Button = ({customFn, text, icon, outlined, to, m, mt, mb, mr, ml}) => {
    if(to) {
        return(
            <a href={to} target='_blank' rel='noreferrer' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-lg border-1 border-white text-white flex items-center justify-center gap-2 px-4 py-2 duration-500 cursor-pointer'>
                {text} {icon && icon}
            </a>
        )
    }

    if(to && outlined) {
        return(
            <a href={to} target='_blank' rel='noreferrer' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-lg border-1 border-white text-white flex items-center justify-center gap-2 px-4 py-2 duration-500 cursor-pointer'>
                {text} {icon && icon}
            </a>
        )
    }

    if(outlined) {
        return (
            <button type='button' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-lg border-1 border-white text-white flex items-center justify-center gap-2 px-4 py-2 duration-500 cursor-pointer' onClick={customFn}>
                {text} {icon && icon}
            </button>
        )
    }

  return (
    <button type='button' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-lg border-1 border-white text-white flex items-center justify-center gap-2 px-4 py-2 duration-500 cursor-pointer' onClick={customFn}>
        {text} {icon && icon}
    </button>
  )
}

export default Button