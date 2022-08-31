import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <div id='about' className='flex flex-col items-center w-full text-center bg-blak px-6 py-10'>
            <div className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-primary'>
                    ABOUT
                </p>
                <p className='text-5xl font-black font-heading text-primary outline-text'>
                    OKUNOLA SAMSON
                </p>
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-5xl text-white'>
                        Frontend Developer, Blockchain Enthusiast and Technical Writer.
                    </p>
                </div>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-2xl text-white'>
                        I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria.
                        <br />
                        I like looking for solutions and creating a great user experience adhering to real applications implementation with the knowledge and understanding of web development concepts. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br />
                        I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
