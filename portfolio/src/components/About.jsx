import React from 'react'
import { motion } from 'framer-motion'

import img from '/images/me.png'
import '../styles/about.css'

const About = () => {
    return (
        <section className='about' id="about">
            <h1>About</h1>
            <span>Who is Okunola Samson ?</span>
            <div className='about'>
                <motion.div className='image__container'>
                    <img src={img} alt='Okunola Samson' />
                </motion.div>
                <p>I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria. I love minimalist & cool designs and animations. I spend most of my time either writing new codes or reviewing previous ones, adhering to real applications implementation with the knowledge and understanding of web development concepts.
                <br /> <br />
                I like looking for solutions and creating a great user experience. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br /> <br />
                I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.</p>
            </div>
        </section>
    )
}

export default About
