import Image from 'next/image'
import Link from 'next/link'
import { FiGlobe, FiGithub } from 'react-icons/fi'
import { Icon } from '@iconify/react'

import styles from '../styles/Card.module.css'

const Card = ({name, lang, repo, live, image_dt, icon}) => {
   
    return (
        <div className={styles.card}>
            <Icon icon={icon} className={styles.card_icon} />
            <div className={styles.card_image}>
                <Image src={image_dt} alt={name} width={200} height={250} />
            </div>
            <h2>{name}</h2>
            <p>{lang}</p>
            
            <div className={styles.card_info}>
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
            </div>
        </div>
    )
}

export default Card