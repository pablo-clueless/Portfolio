import { useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"

import styles from '../styles/MobileMenu.module.css'

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" }
    }

    return (
        <motion.nav className={styles.nav}>
            <div className={showMenu ? `${styles.button} ${styles.close}` : `${styles.button}`} onClick={handleShowMenu}>
                <div className={styles.button__line}></div>
                <div className={styles.button__line}></div>
                <div className={styles.button__line}></div>
            </div>
            {showMenu && <motion.div
            className={styles.menu}
            animate={showMenu ? "open" : "closed"}
            variants={variants}
            >
                <motion.ul
                initial={{ x: 200 }}
                animate={{ 
                    x: 0,
                    transition: { 
                        type: "spring",
                        stiffness: 100,
                        duration: 1 }}}
                >
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="#home">
                            <a>Home</a>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="#about">
                            <a>About</a>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="#works">
                            <a>Works</a>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="#skills">
                            <a>Skills</a>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="#contact">
                            <a>Contact</a>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            repeat: Infinity
                        }
                    }}>
                        <Link href="https://frontendpablo.hashnode.dev" passHref>
                            <a target="_blank" rel="noopener noreferrer">Blog</a>
                        </Link>
                    </motion.li>
                </motion.ul>
            </motion.div>}
        </motion.nav>
    )
}

export default MobileMenu