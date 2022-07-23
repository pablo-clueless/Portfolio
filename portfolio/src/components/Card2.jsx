import React from 'react'

const Card2 = ({company, position, type, start, end}) => {

  return (
    <div className='flex items-center gap-4 border-1 border-color dark:border-white p-4'>
        <div className='flex flex-col items-start'>
            <p className='text-3xl text-primary'>
                {company}
            </p>
            <div className='flex items-center'>
                <p className='text-base text-white'>
                    {start} - {end}
                </p>
            </div>
        </div>
        <div className='flex flex-col items-end gap-1'>
            <p className='text-white text-sm'>
                {position}
            </p>
            <p className='text-xs text-white'>
                {type}
            </p>
        </div>
    </div>
  )
}

export default Card2