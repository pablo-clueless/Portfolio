import Link from 'next/link'
import Badge from 'react-simple-badges'

import styles from '../styles/Work.module.css'
import { Data } from './ProjectData'

const Work = () => {
    return (
       <>
        <section className={styles.section} id='works'>
            <h2>- Works -</h2>
            <div className={styles.intro}>
                <p>I love creating user-friendly and beautiful sites while keeping it clean and scalable and providing great user experience. Below are some of my works over the time.</p>
            </div>
            <div className={styles.wrapper}>
                {Data.map((item, i) => (
                    <div className={styles.container} key={i}>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                        <img src={item.cover} alt={item.name} />
                    </div>
                    <div className={styles.contentBx}>
                        <h2>{item.name}</h2>
                        <p>{item.lang}</p>
                        <div className={styles.content}>
                            <h3>{item.content}</h3>
                        </div>
                        <Link href={item.repo} passHref>
                            <a target='_blank' rel='noreferrer noopener' >Github</a>
                        </Link>
                        <Link href={item.live} passHref>
                            <a target='_blank' rel='noreferrer noopener'>Live</a>
                        </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <p className={styles.more}>More of my works can be found in my
                <Link href='https://github.com/pablo-clueless'>
                    <a target='_blank' rel='noopener noreferrer'> Github </a>
                    </Link>&amp; on 
                <Link href='https://codepen.io/pablo-clueless'>
                    <a target='_blank' rel='noopener noreferrer'> Codepen. </a>
                </Link>
            </p>
        </section>
       </>
    )
}

export default Work