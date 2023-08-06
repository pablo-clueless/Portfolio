import { useParams } from "react-router-dom"
import React from "react"

import { Contact, Navbar, StarsCanvas } from "../components"

const Blog = () => {
  const { id } = useParams()
  
  return (
    <div className="relative z-0 bg-white select-none">
      <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="relative z-0 bg-black">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Blog
