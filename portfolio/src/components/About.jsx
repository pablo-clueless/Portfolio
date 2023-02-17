import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <div id='about' className='flex flex-col items-center w-full text-center px-6 py-10'>
            <div className='mb-12 text-left'>
                <p className='md:text-6xl text-4xl font-black font-heading text-black'>
                    ABOUT
                </p>
                <p className='text-5xl font-black font-heading text-primary outline-text'>
                    OKUNOLA SAMSON
                </p>
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-5xl text-black'>
                        Lead Developer at Zummit Africa
                    </p>
                </div>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-2xl text-black'>
                        I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria.<br />
                        I constantly look for solutions to problems and create a great user experience.<br />
                        I like pop music, good food and video games.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
