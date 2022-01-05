import Link from 'next/link'
import { FiGithub, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi'

import styles from '../styles/Header.module.css'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className={styles.header}>
           <Navbar />
           <div className={styles.hero}>
               <p>Hi, my name is</p>
               <h1>Okunola Samson.</h1>
               <h2>I&apos;m a Frontend Web Developer &amp; Content Writer.</h2>
               <p>I love minimalistic cool designs and animations. In a kinda love/hate relationship with JavaScript. </p>
               <ul>
                   <li>
                       <Link href='https://github.com/pablo-clueless' passHref>
                           <a target='_blank' re='noopener noreferrer'><FiGithub /></a>
                       </Link>
                   </li>
                   <li>
                       <Link href='https://www.linkedin.com/in/samson-olawale-okunola-76842a169/' passHref>
                           <a target='_blank' re='noopener noreferrer'><FiLinkedin /></a>
                       </Link>
                   </li>
                   <li>
                       <Link href='https://twitter.com/pablo_clueless' passHref>
                           <a target='_blank' re='noopener noreferrer'><FiTwitter /></a>
                       </Link>
                   </li>
                   <li>
                       <Link href='https://codepen.io/pablo-clueless' passHref>
                           <a target='_blank' re='noopener noreferrer'><FiCodepen /></a>
                       </Link>
                   </li>
                   {/* <li>
                       <Link href='https://pablos-blog.vercel.app' passHref>
                           <a target='_blank' re='noopener noreferrer'>
                               <img src="" alt="" />
                           </a>
                       </Link>
                   </li> */}
               </ul>
               <button>
                   <a href="#contact"> Hire Me</a>
               </button>
           </div>
        </header>
    )
}

export default Header