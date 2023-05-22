import React from 'react'

const Container = (props) => {
  const {children, className} = props
  
  return (
    <div className={`px-2 md:px-20 ${className}`}>
      {children}
    </div>
  )
}

export default Container