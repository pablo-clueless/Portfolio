import Badge from 'react-simple-badges'

import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.section} id="skills">
            <h1>Skills</h1>

            <span> 1+ years, a ton of tutorials and online courses, here i am.</span>

            <p>I am autodidactic, solution-oriented and a team player, currently learning Python and Typescript. below are some technologies I&apos;ve been working with:</p>
            <div className={styles.grid}>
                <Badge name='javascript' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='react' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='next.js' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='node.js' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='express'backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='three.js' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='sass' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
                <Badge name='styled-components' backgroundColor='#000000' logoColor='#FFF' style={{ border: "1px solid #FFF" }} />
            </div>
        </section>
    )
}

export default Skills