import React from 'react'

const Button = ({customFn, text, icon, outlined, to, m, mt, mb, mr, ml}) => {
    if(to) {
        return(
            <a href={to} target='_blank' rel='noreferrer' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-base border-1 dark:border-white text-primary dark:text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary duration-500'>
                {text} {icon && icon}
            </a>
        )
    }

    if(to && outlined) {
        return(
            <a href={to} target='_blank' rel='noreferrer' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-base border-1 dark:border-white text-primary dark:text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary duration-500'>
                {text} {icon && icon}
            </a>
        )
    }

    if(outlined) {
        return (
            <button type='button' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-base border-1 dark:border-white text-primary dark:text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary duration-500' onClick={customFn}>
                {text} {icon && icon}
            </button>
        )
    }

  return (
    <button type='button' style={{margin:m,marginTop:mt,marginBottom:mb,marginRight:mr,marginLeft:ml}} className='text-base border-1 dark:border-white text-primary dark:text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary duration-500' onClick={customFn}>
        {text} {icon && icon}
    </button>
  )
}

export default Button