import React from "react"

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Stacks,
  StarsCanvas,
  Works,
} from "../components"

const Home = () => {
  return (
    <div className="relative z-0 bg-white select-none">
      <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Stacks /> */}
      <Works />
      <Feedbacks />
      <div className="relative z-0 bg-black">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home
