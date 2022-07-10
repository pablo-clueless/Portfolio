import React from 'react'

const Card2 = ({company, position, type, start, end}) => {

  return (
    <div className='flex items-center gap-4 border-1 border-color dark:border-white p-4'>
        <div className=''>
            <p className='text-3xl text-gray-600 dark:text-white'>
                {company}
            </p>
            <div className='flex items-center'>
                <p className='text-base text-gray-600 dark:text-white'>
                    {start} - {end}
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-base text-gray-600 dark:text-white'>
                {position}
            </p>
            <p className='text-sm text-gray-600 dark:text-white'>
                {type}
            </p>
        </div>
    </div>
  )
}

export default Card2