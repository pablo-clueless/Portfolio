import Image from 'next/image'
import Atropos from 'atropos/react'
import { motion } from 'framer-motion'

import 'atropos/css'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles.section} id="about">
            <h1>About</h1>

            <span>Who is Okunola Samson ?</span>
            
            <div className={styles.about}>
                <Atropos className='my-atropos'>
                    <motion.div className={styles.image__container}>
                        <Image src='/8.png' alt='avatar from craftwork' layout='fill' />
                    </motion.div>
                </Atropos>
                <p>I&apos;m a self-taught Frontend Web Developer based in Lagos, Nigeria. I love minimalist & cool designs and animations. I spend most of my time either writing new codes or reviewing previous ones, adhering to real applications implementation with the knowledge and understanding of web development concepts.
                <br /> <br />
                I am like looking for solutions and creating a great experience for users. I&apos;ve worked with other developers on projects and created several working SPAs that are maintainable and scalable.<br /> <br />
                I also love reading a lot. I like pop music and good food. I recently fell in love with writing and I&apos;ve written some articles with a few in my draft.</p>
            </div>
        </section>
    )
}

export default About