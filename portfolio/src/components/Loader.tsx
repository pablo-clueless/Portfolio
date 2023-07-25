import React from 'react'

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-white fixed top-0 left-0 !z-10">
      <div className="w-[50px] aspect-[1/1] relative animate-spin">
        <div className="w-[15px] aspect-[1/1] rounded-full bg-black absolute top-0 left-0"></div>
        <div className="w-[15px] aspect-[1/1] rounded-full bg-black absolute top-0 right-0"></div>
        <div className="w-[15px] aspect-[1/1] rounded-full bg-black absolute bottom-0 left-0"></div>
        <div className="w-[15px] aspect-[1/1] rounded-full bg-black absolute bottom-0 right-0"></div>
      </div>
    </div>
  )
}

export default Loader
