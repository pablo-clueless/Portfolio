import styles from '../styles/About.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <div className={styles.main} id='about'>
            <h2>- About Me -</h2>
            <div className={styles.cover}>
                <div>
                    <p>I'm a self-taught Frontend Web Developer based in Lagos.   I love minimalist &amp; cool designs and animations. I spend most of my time either writing new codes or reviewing my previous ones. I also love reading a lot. I like pop music and good food(it's a zen time for me and you should employ me to keep this coming). I recently fell in love with writing and I've written a some articles with a few in my draft. I'm also hoping to start a cohort for techies in my community soon.</p>
                    <br />
                    <p>Below are a few technologies I've been working with recently:</p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Sveltejs</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>HTML5</li>
                    </ul>
                    <p className={styles.hash}>Check out my blog on Hashnode at
                        <Link href='https://frontendpablo.hasnode.dev' passHref>
                            <a target='_blank' rel='noopener noreferre'> FrontendPablo</a>
                        </Link>
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgWrapper}>
                        <img src="/images/web-pablo.png" alt="samson okunola" className={styles.img1}/>
                        <img src="/images/web-pablo.png" alt="samson okunola" className={styles.img2}/>
                        <img src="/images/web-pablo.png" alt="samson okunola" className={styles.img3}/>
                        <img src="/images/web-pablo.png" alt="samson okunola" className={styles.img4}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About