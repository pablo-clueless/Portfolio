import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Works.module.css'
import Card from './Card'
import { Data } from './ProjectData'

const Work = () => {

    return (
       <motion.section className={styles.section} id='works'>
           <h1>Works</h1>

           <span>I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.</span>

           <div className={styles.container}>
                {Data.map((item, index) => (
                    <Card key={index} name={item.name} lang={item.lang} text={item.text} repo={item.repo} live={item.live} />
                ))}
            </div>
       </motion.section>
    )
}

export default Work