import React, { useState } from 'react'

import { Card, Employment, Footer, Navbar } from '../components'
import { EMPLOYMENTS, PROJECTS } from '../constants'
import { Container } from '../layouts'

const Home = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className='bg-white dark:bg-black'>
    <Navbar />
    <Container className='w-full h-[700px] flex flex-col items-center justify-center gap-5 bg-mountains bg-cover bg-fixed py-4 text-center'>
      <p className='text-5xl lg:text-7xl text-black dark:text-white font-black'>Hi, I'm Samson</p>
      <p className='w-full md:w-1/2 lg:text-2xl text-black dark:text-white text-lg font-bold'>
        I'm a web developer with an edge. I specialize in building web and mobile apps to give the best user experience.
      </p>
      <a href='mailto:smsnmicheal@gmail.com' target='_blank' className='bg-gray-500 text-white text-xl font-semibold px-5 py-3 rounded'>
        Send me a mail
      </a>
    </Container>
    <Container className='w-full flex flex-col text-black dark:text-white py-10'>
      <p className='text-xl md:text-2xl font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-[100px] after:h-[2px] after:bg-black dark:after:bg-white'>
        About Me
      </p>
      <div className='w-full flex flex-col md:flex-row items-start'>
        <p className='text-base md:text-lg text-gray-500 font-semibold mt-5'>
          I'm a web developer based in Lagos, and web development is life to me; the endless possibilities of the web fuels my passion. <br />
          I constantly endeavor to get better and surpass my threshold to deliver outstanding results. <br />
          I like pop music, good food and video games. And web3.
        </p>
        {/* <div className='w-full md:w-1/2'>
          <img src="" alt="" className='w-full aspect-[3/4] object-cover' />
        </div> */}
      </div>
    </Container>
    <Container className='w-full flex flex-col text-black dark:text-white py-10'>
      <p className='text-xl md:text-2xl font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-[100px] after:h-[2px] after:bg-black dark:after:bg-white'>
        Employment
      </p>
      <p className='text-base md:text-lg text-gray-500 font-semibold my-5'>
        Here are some of the companies I've worked with
      </p>
      <div className='flex flex-wrap items-center gap-2'>
        {EMPLOYMENTS.map((item, index) => (
          <Employment key={index} {...item} />
        ))}
      </div>
    </Container>
    <Container className='w-full flex flex-col text-black dark:text-white py-10'>
      <p className='text-xl md:text-2xl font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-[100px] after:h-[2px] after:bg-black dark:after:bg-white'>
        Projects
      </p>
      <p className='text-base md:text-lg text-gray-500 font-semibold my-5'>
        Let me give you a sneak peek at some of the exciting projects I've worked on
      </p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {PROJECTS.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </Container>
    <Container className='w-full flex flex-col text-black dark:text-white py-10'>
      <p className='text-xl md:text-2xl font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-[100px] after:h-[2px] after:bg-black dark:after:bg-white'>
        Let's Work
      </p>
      <p className='w-full md:w-1/2 text-base md:text-lg text-gray-500 font-semibold my-5'>
        Do you want to collaborate on a project or hire a developer? <br />
        I'm currently open to mid-level roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I'll try to get back as soon as possible.
      </p>
      <a href='mailto:smsnmicheal@gmail.com' target='_blank' className='text-base md:text-xl font-bold underline underline-offset-4'>
        smsnmicheal@gmail.com
      </a>
    </Container>
    <Footer />
    </div>
  )
}

export default Home