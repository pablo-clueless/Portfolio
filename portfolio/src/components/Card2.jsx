import React from 'react'

const Card2 = ({company, position, type, start, end}) => {

  return (
    <div className='w-300 h-[150px] flex items-center gap-4 bg-white p-4 border border-black'>
        <div className='flex flex-col items-start'>
            <p className='text-3xl font-bold text-primary'>
                {company}
            </p>
            <div className='flex items-center my-2'>
                <p className='text-black font-bold text-xs'>
                    {start} - {end}
                </p>
            </div>
            <p className='text-black'>
                {position}
            </p>
            <p className='text-sm text-black'>
                {type}
            </p>
        </div>
    </div>
  )
}

export default Card2