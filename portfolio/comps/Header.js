import Link from 'next/link'
import { motion } from 'framer-motion'
import useDownloader from 'react-use-downloader'
import { FiDownload } from 'react-icons/fi'

import styles from '../styles/Header.module.css'
import HeaderBackground from './HeaderBackground'

const Header = () => {
    const { size, elapsed, percentage, download, error, isInProgress } = useDownloader()
    
    const fileUrl = '/files/Okunola Samson.pdf'
    const fileName = 'Okunola_Samson.pdf'
    
    return (
        <motion.header 
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                duration: 5
            }
        }}
        id="home"
        >
            <div className={styles.three}>
                <HeaderBackground />
            </div>
            <h1>okunola samson</h1>
            <p>frontend web developer and content writer</p>
            
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='#about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='#works'>
                        <a>Works</a>
                    </Link>
                </li>
                <li>
                    <Link href='#skills'>
                        <a>Skills</a>
                    </Link>
                </li>
                <li>
                    <Link href='#contact'>
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href='https://frontendpablo.hashnode.dev' passHref>
                        <a target='_blank' rel='noopener noreferrer'>
                            Blog
                        </a>
                    </Link>
                </li>
            </ul>

            <button className={isInProgress ? `${styles.button} ${styles.button__active}` : `${styles.button}`} onClick={() => download(fileUrl, fileName)}>
               {isInProgress ? <FiDownload /> : `Download CV`}
            </button>
            {error && <p className={styles.download__error}>Downloaf failed, check your network and retry.</p>}
        </motion.header>
    )
}

export default Header