import Image from 'next/image'
import Atropos from 'atropos/react'
import { motion } from 'framer-motion'
import 'atropos/css'

import img from '/public/me.png'
import styles from '../styles/About.module.css'
// import AboutBackground from './AboutBackground'

const About = () => {
    return (
        <section className={styles.section} id="about">
            <h1>About</h1>

            <span>Who is Okunola Samson ?</span>
            
            <div className={styles.about}>
                <Atropos className='my-atropos'>
                    <motion.div className={styles.image__container}>
                        <Image src={img} alt='Okunola Samson' layout='fill' />
                    </motion.div>
                </Atropos>
                <p>I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria. I love minimalist & cool designs and animations. I spend most of my time either writing new codes or reviewing previous ones, adhering to real applications implementation with the knowledge and understanding of web development concepts.
                <br /> <br />
                I like looking for solutions and creating a great user experience. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br /> <br />
                I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.</p>
            </div>
        </section>
    )
}

export default About