import React from 'react'

const Card2 = ({company, position, type, start, end}) => {

  return (
    <div className='w-300 flex items-center gap-4 p-4 border border-white'>
        <div className='flex flex-col items-start'>
            <p className='text-3xl text-primary'>
                {company}
            </p>
            <div className='flex items-center my-2'>
                <p className='text-white text-xs'>
                    {start} - {end}
                </p>
            </div>
            <p className='text-white'>
                {position}
            </p>
            <p className='text-sm text-white'>
                {type}
            </p>
        </div>
    </div>
  )
}

export default Card2