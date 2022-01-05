import Link from 'next/link'
import Image from 'next/image'
import Badge from 'react-simple-badges'
import Atropos from 'atropos/react'

import 'atropos/css'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles.section} id='about'>
            <h2>- About Me -</h2>
            <div className={styles.cover}>
                <div>
                    <p>I&apos;m a self-taught Frontend Web Developer based in Lagos.   I love minimalist &amp; cool designs and animations. I spend most of my time either writing new codes or reviewing my previous ones. I also love reading a lot. I like pop music and good food(it&apos;s a zen time for me and you should employ me to keep this coming). I recently fell in love with writing and I&apos;ve written a some articles with a few in my draft. I&apos;m also hoping to start a cohort for techies in my community soon.</p>
                    <br />
                    <p>Below are a few technologies I&apos;ve been working with recently:</p>
                    <ul>
                        <li>
                            <Badge name="JavaScript" backgroundColor='#000000' logoColor='#e7fb00' />
                        </li>
                        <li>
                            <Badge name="React" backgroundColor='#000000' logoColor='#61dafb' />
                        </li>
                        <li>
                            <Badge name='Next.js' backgroundColor='#000000' logoColor='#ffffff' />
                        </li>
                        <li>
                            <Badge name='Svelte' backgroundColor='#ff3e00' />
                        </li>
                        <li>
                            <Badge name='Node.js' />
                        </li>
                        <li>
                            <Badge name='Express' />
                        </li>
                        <li>
                            <Badge name='CSS3' />
                        </li>
                        <li>
                            <Badge name='Sass' />
                        </li>
                        <li>
                            <Badge name='Bootstrap' />
                        </li>
                        <li>
                            <Badge name='HTML5' />
                        </li>
                    </ul>
                    <p className={styles.hash}>Check out my blog on Hashnode at
                        <Link href='https://frontendpablo.hasnode.dev' passHref>
                            <a target='_blank' rel='noopener noreferre'> &rarr; FrontendPablo </a>
                        </Link>
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Atropos>
                        <Image src={'/images/web-pablo.png'} alt='Samson Okunola' width={300} height={300} className={styles.img} />
                    </Atropos>
                </div>
            </div>
        </section>
    )
}

export default About