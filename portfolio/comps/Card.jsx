import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGlobe, FiGithub } from 'react-icons/fi'

import styles from '../styles/Card.module.css'

const Card = (props) => {
   
    return (
        <div className={styles.card}>
            <h2>{props.name}</h2>
            <p>{props.lang}</p>
            <p>{props.text}</p>
            <ul>
                <motion.li whileHover={{scale: [1, 1.2, 1], transition: {type: "tween", duration: 0.3}}}>
                    <Link href={props.repo} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            Github
                        </a>
                    </Link>
                </motion.li>
                <motion.li whileHover={{scale: [1, 1.2, 1], transition: {type: "tween", duration: 0.3}}}>
                    <Link href={props.live} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            Live
                        </a>
                    </Link>
                </motion.li>
            </ul>
        </div>
    )
}

export default Card