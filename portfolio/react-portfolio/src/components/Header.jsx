import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useDownloader from 'react-use-downloader'
import { FiArrowRight } from 'react-icons/fi'

import styles from '../styles/Header.module.css'
import logo from '../public/logo.png'

const menu = ['home', 'about', 'works', 'skills', 'contact']

const Header = () => {
    const { download, error } = useDownloader()
    const fileUrl = '/files/Samson Okunola.pdf'
    const fileName = 'Samson_Okunola.pdf'

    return (
        <motion.header className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 5 } }} id="home">
            <nav className={styles.nav}>
                <Image src={logo} alt='Samson Okunola' width={70} height={70} priority />
                <ul>
                    {menu.map(item => (
                    <li key={item}>
                        <Link href={`#${item}`}>
                            <a>{item}</a>
                        </Link>
                    </li>
                    ))}
                </ul>
                <a className={styles.button} href={fileUrl} download={fileName} onClick={() =>download(fileUrl, fileName)}>
                    Resume <FiArrowRight />
                </a>
            </nav>
            <span>
                Hello, I&apos;m
            </span>
            <h1>Okunola Samson</h1>
            <p>Web Developer. Blockchain Enthusiast. Content Writer.</p>

            {error && <p className={styles.download__error}>Download failed, check your network and retry.</p>}
        </motion.header>
    )
}

export default Header