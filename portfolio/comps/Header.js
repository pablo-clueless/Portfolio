import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { FiGithub, FiLinkedin, FiTwitter, FiCodepen } from 'react-icons/fi'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <img src='/images/branding.png' alt='brand logo' />
                <ul>
                    <li>
                        <Link href='#about'>
                        <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#skills'>
                        <a>SKILLS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#projects'>
                        <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#contact'>
                        <a>CONTACT</a>
                        </Link>
                    </li>
                </ul>
                
            </nav>
            <div className={styles.hero}>
                <div className={styles.bio}>
                    <h1>
                        Samson
                        <br />
                        Okunola.
                    </h1>
                    <span>
                        <Link href='https://github.com/pablo-clueless'>
                            <a>
                                <FiGithub />
                            </a>
                        </Link>
                        <Link href='https://www.linkedin.com/in/samson-okunola-76842a169/'>
                            <a>
                                <FiLinkedin />
                            </a>
                        </Link>
                        <Link href='https://twitter.com/pablo_clueless'>
                            <a>
                                <FiTwitter />
                            </a>
                        </Link>
                        <Link href='https://codepen.io/pablo-clueless'>
                            <a>
                                <FiCodepen />
                            </a>
                        </Link>
                    </span>
                </div>
                <div className={styles.info}>
                    <p>- @pablo_clueless</p>
                    <h1>Frontend Web Developer, Content Writer, based in Lagos, Nigeria</h1>
                    <p> In a love/hate relationship with JavaScript but I love her still. </p>
                </div>
            </div>
        </header>
    )
}

export default Header