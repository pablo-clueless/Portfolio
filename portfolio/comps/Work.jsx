import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Works.module.css'
import Card from './Card'
import { Data } from './ProjectData'

const Work = () => {

    return (
       <motion.section className={styles.section} id='works'>
           <h1>Notable Projects</h1>

           <span>I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.</span>

           <div className={styles.container}>
                {Data.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
       </motion.section>
    )
}

export default Work