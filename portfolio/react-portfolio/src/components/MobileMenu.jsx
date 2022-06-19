import { useState } from "react"
import { motion } from "framer-motion"
import useDownloader from 'react-use-downloader'
import { FiArrowRight } from "react-icons/fi"

import '../styles/mobile-menu.css'

const menu = ['home', 'about', 'works', 'skills', 'contact']

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { download, error } = useDownloader()
    const fileUrl = '/files/Samson Okunola.pdf'
    const fileName = 'Samson_Okunola.pdf'

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const closeMenu = () => {
        setShowMenu(close)
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" }
    }

    return (
        <motion.nav className='nav'>
            <div className={showMenu ? `button close` : `button`} onClick={handleShowMenu}>
                <div className='button__line'></div>
                <div className='button__line'></div>
                <div className='button__line'></div>
            </div>
            {showMenu && <motion.div className='menu' animate={showMenu ? "open" : "closed"} variants={variants}>
                <motion.ul initial={{ x: 200 }} animate={{x: 0, transition: {type: "spring", stiffness: 100, duration: 1 }}}>
                    {menu.map((item) => (
                        <motion.li key={item} onClick={closeMenu} whileHover={{
                            borderColor: "var(--pry)",
                            translateY: [5, 0, 5],
                            transition: { type: "spring", stiffness: 100, duration: 0.5, repeat: Infinity}}}>
                            <a href={`#${item}`}>{item}</a>
                        </motion.li>
                    ))}
                    <motion.li onClick={closeMenu} whileHover={{
                        borderColor: "var(--pry)",
                        translateY: [5, 0, 5],
                        transition: { type: "spring", stiffness: 100, duration: 0.5, repeat: Infinity}}}>
                        <a href="https://frontendpablo.hashnode.dev" target='_blank' rel='noreferrer'>
                            blog
                        </a>
                    </motion.li>
                </motion.ul>
                <a className='button_resume' href={fileUrl} download={fileName} onClick={() =>download(fileUrl, fileName)}>
                    Resume <FiArrowRight />
                </a>
            </motion.div>}
        </motion.nav>
    )
}

export default MobileMenu