import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FiGithub, FiTwitter, FiLinkedin, FiCodepen, FiMessageSquare } from 'react-icons/fi'

const Header = () => {
    return (
        <header className={styles.header}>
           <nav>
            <img src='/images/branding.png' alt='logo' />
                <ul>
                    <li>
                        <Link href='#'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
           </nav>
           <div className={styles.hero}>
               <p>Hi, my name is</p>
               <h1>Okunola Samson.</h1>
               <h2>I'm a Frontend Web Developer &amp; Content Writer.</h2>
               <p>I love minimalistic cool designs and animations. In a kinda of love/hate reltionship with JavaScript. </p>
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
                   <li>
                       <Link href='https://pablos-blog.vercel.app' passHref>
                           <a target='_blank' re='noopener noreferrer'><FiMessageSquare /></a>
                       </Link>
                   </li>
               </ul>
               <button> Hire Me </button>
           </div>
        </header>
    )
}

export default Header