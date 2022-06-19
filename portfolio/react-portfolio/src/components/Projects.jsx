import { motion } from 'framer-motion'

import '../styles/projects.css'
import Card from './Card'
import { data } from '../../project-data'

const Projects = () => {

    return (
       <motion.section className='section' id='works'>
           <h1>Notable Projects</h1>

           <span>I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.</span>

           <div className='container'>
                {data.map((item) => (
                    <Card key={item.name} {...item} />
                ))}
            </div>
       </motion.section>
    )
}

export default Projects