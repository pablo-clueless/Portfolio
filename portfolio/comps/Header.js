import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHome ,FiUser, FiBriefcase, FiArchive, FiMail } from 'react-icons/fi'

import styles from '../styles/Header.module.css'
// import PureThree from './PureThree'

const Header = () => {
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
            {/* <PureThree /> */}
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
        </motion.header>
    )
}

export default Header