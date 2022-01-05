import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    
    const toggleMenu = () => {
        setToggle(!toggle)
    }
    
    const closeMenu = () => {
        setToggle(false)
    }
    
    return (
        <nav className={styles.nav}>
            <Image src={'/images/branding.png'} alt='logo' width={50} height={50} />

            <ul className={styles.menu_list}>
                <li>
                    <Link href='#about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='#works'>
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href='#experience'>
                        <a>Experience</a>
                    </Link>
                </li>
                <li>
                    <Link href='#contact'>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>

            <div className={toggle ? `${styles.button} ${styles.show}` : `${styles.button}`} onClick={toggleMenu}>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>
            </div>

            {toggle && <div className={styles.menu}>
                <ul>
                    <li onClick={closeMenu}>
                        <Link href='#about'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='#works'>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='#experience'>
                            <a>Experience</a>
                        </Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href='#contact'>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar