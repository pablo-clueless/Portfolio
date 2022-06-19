import { motion } from 'framer-motion'

import styles from '../styles/Works.module.css'
import Card from './Card'
import { data } from '../../project-data'

const Work = () => {

    return (
       <motion.section className={styles.section} id='works'>
           <h1>Notable Projects</h1>

           <span>I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.</span>

           <div className={styles.container}>
                {data.map((item) => (
                    <Card key={item.name} {...item} />
                ))}
            </div>
       </motion.section>
    )
}

export default Work