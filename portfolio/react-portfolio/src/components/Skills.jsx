import Badge from 'react-simple-badges'

import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.section} id="skills">
            <h1>Skills</h1>

            <span> 2 years, a ton of tutorials and online courses, here i am.</span>

            <p>I am autodidactic, solution-oriented and a team player, currently learning Python and Typescript. below are some technologies I&apos;ve been working with:</p>
            <div className={styles.grid}>
                <Badge name='javascript' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='typescript' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='react' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='next.js' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='node.js' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='express'backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='three.js' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='sass' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='styled-components' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='Tailwind CSS' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='Material UI' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Badge name='Solidity' backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
            </div>
        </section>
    )
}

export default Skills