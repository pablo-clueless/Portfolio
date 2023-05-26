import React from 'react'

interface Props {
  company: string
  role: string
  type: string
  start: string
  end: string
}

const Employment = (props:Props) => {
  const {company, end, role, start, type} = props

  return (
    <div className='w-full md:w-fit flex items-center gap-2 border border-gray-500 px-4 py-2'>
      <div className='flex flex-col'>
        <p className='text-lg font-extrabold'>{company}</p>
        <p className='font-bold'>{role}{' '}({type})</p>
        <div className='w-full flex items-center text-xs font-semibold'>
          <p>{start}</p><span className='mx-2'>-</span><p>{end}</p>
        </div>
      </div>
    </div>
  )
}

export default Employment