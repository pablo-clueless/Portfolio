import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Card.module.css'

const Card = (props) => {
   
    return (
        <motion.div
        className={styles.card}
        initial={{ opacity: 1 }}
        whileHover={{
            opacity: 1,
            scale: 1.05,
            boxShadow: "0 0 25px -10px #FFF",
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5
            }
        }}
        >
            <h2>{props.name}</h2>
            <p>{props.lang}</p>
            <p>{props.text}</p>
            <ul>
                <motion.li whileHover={{
                    scale: [1, 1.2, 1],
                    transition: {
                        type: "tween",
                        duration: 0.3
                    }
                }}>
                    <Link href={props.repo} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            Github
                        </a>
                    </Link>
                </motion.li>
                <motion.li whileHover={{
                    scale: [1, 1.1, 1],
                    transition: {
                        type: "tween",
                        duration: 0.3
                    }
                }}>
                    <Link href={props.live} passHref>
                        <a target='_blank' rel='noreferrer noopener'>
                            Live link
                        </a>
                    </Link>
                </motion.li>
            </ul>
            

            
        </motion.div>
    )
}

export default Card