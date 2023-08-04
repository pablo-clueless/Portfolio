import React from "react"

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-white fixed top-0 left-0 !z-10">
      <div className="w-[100px] h-[100px] grid place-items-center rounded-full border-8 border-red-600 border-b-transparent animate-spin">
        <div className="w-[60px] h-[60px] rounded-full border-8 border-black border-b-transparent animate-spin"></div>
      </div>
    </div>
  )
}

export default Loader
