import React from "react"

import "./styles/loader.css"

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-white fixed top-0 left-0 !z-10">
      <svg viewBox="25 25 50 50" className="loader">
        <circle r="20" cx="50" cy="50" className="loader-circle" />
      </svg>
    </div>
  )
}

export default Loader
