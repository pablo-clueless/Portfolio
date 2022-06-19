import Image from 'next/image'
import Link from 'next/link'
import { FiGlobe, FiGithub } from 'react-icons/fi'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

import styles from '../styles/Card.module.css'

const Card = ({name, lang, repo, live, image_dt, icon}) => {
   
    return (
        <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1, transition: { duration: 2 }}}
        className={styles.card}>
            <Icon icon={icon} className={styles.card_icon} />
            <h2>{name}</h2>
            <p>{lang}</p>
            <ul>
                <li>
                    <Link href={repo} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            <FiGithub />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={live} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            <FiGlobe />
                        </a>
                    </Link>
                </li>
            </ul>
        </motion.div>
    )
}

export default Card