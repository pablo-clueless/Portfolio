import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>designed and built by Okunola Samson - <span>@pablo_clueless</span></p>

            <Link href='#home' passHref>
                <motion.a
                animate={{ color: "var(--dark)", scale: 1 }} whileHover={{color: "var(--light)", translateY: [-5, 0, -5], transition: {type: "spring", stiffness: 100, duration: 0.5, repeat: Infinity}}}>
                    scroll to top &uarr;
                </motion.a>
            </Link>
        </footer>
    )
}

export default Footer