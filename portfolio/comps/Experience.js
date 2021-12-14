import styles from '../styles/Experience.module.css'

const Experience = () => {
    return (
        <section className={styles.section} id='experience'>
            <h2>- Experience -</h2>
            <div className={styles.exp}>
                <ul className={styles.timeline}>
                    <li className={styles.event}>
                        <label className={styles.event_icon}></label>
                        <div className={styles.event_copy}>
                        <p className={styles.event_thumbnail}>October 2021 - present</p>
                        <h3>Side Hustle</h3>
                        <h4>Intern</h4>
                        <p><strong>Frontend Development (React JS)</strong>
                        <br />
                        Worked on personal and team projects.
                        <br />
                        Led 2 teams for capstone projects.
                        <br />
                        team lead in the bootcamp.
                        </p>
                        </div>
                    </li>
                </ul>  
            </div>
        </section>
    )
}

export default Experience