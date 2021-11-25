import styles from '../styles/Contact.module.css'
import { FiMapPin, FiPhone} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className={styles.main} id='contact'>
            <h2>- Contact -</h2>
            <div className={styles.contact}>
                <h1>Get In Touch</h1>
                <p>I'm currently open to Junior Developer/Intern roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I'll try to get back as soon as possible.</p>
                <a href="mailto:smsnmicheal@gmail"> Send Me a Mail</a>
                <div className={styles.info}>
                    <div>
                        <FiMapPin className={styles.icon} />
                        <p>Lagos, Nigeria.</p>
                    </div>
                    <div>
                        <FiPhone className={styles.icon} />
                        <p>+234 (0) 902 396 6260</p>
                    </div>
                </div>
            </div>
            <p className={styles.me}>Designed &amp; Built by Samson Okunola.</p>
        </div>
    )
}

export default Contact