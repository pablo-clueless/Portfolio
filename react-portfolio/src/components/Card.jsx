import React from 'react'
import { FiGlobe, FiGithub } from 'react-icons/fi'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

import '../styles/card.css'

const Card = ({name, lang, repo, live, image_dt, icon}) => {
   
    return (
        <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1, transition: { duration: 2 }}}
        className='card'>
            <Icon icon={icon} className='card_icon' />
            <h2>{name}</h2>
            <p>{lang}</p>
            <ul>
                <li>
                    <a href={repo} target='_blank' rel='noreferrer noopener'>
                        <FiGithub />
                    </a>
                </li>
                <li>
                    <a href={live} target='_blank' rel='noreferrer noopener'>
                        <FiGlobe />
                    </a>
                </li>
            </ul>
        </motion.div>
    )
}

export default Card