import JavaScript from 'react-simple-badges/dist/badges/JavaScript'
import TypeScript from 'react-simple-badges/dist/badges/TypeScript'
import ReactBadge from 'react-simple-badges/dist/badges/ReactBadge'
import Nextjs from 'react-simple-badges/dist/badges/Nextjs'
import Nodejs from 'react-simple-badges/dist/badges/Nodejs'
import Express from 'react-simple-badges/dist/badges/Express'
import Threejs from 'react-simple-badges/dist/badges/Threejs'
import Sass from 'react-simple-badges/dist/badges/Sass'
import Styledcomponents from 'react-simple-badges/dist/badges/Styledcomponents'
import TailwindCSS from 'react-simple-badges/dist/badges/TailwindCSS'
import MUI from 'react-simple-badges/dist/badges/MUI'
import Solidity from 'react-simple-badges/dist/badges/Solidity'

import '../styles/skills.css'

const Skills = () => {
    return (
        <section className='skills' id="skills">
            <h1>Skills</h1>

            <span> 2 years, a ton of tutorials and online courses, here i am.</span>

            <p>I am autodidactic, solution-oriented and a team player, currently learning Python and Typescript. below are some technologies I&apos;ve been working with:</p>
            <div className='grid'>
                <JavaScript backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <TypeScript backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <ReactBadge backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Nextjs backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Nodejs backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Express backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Threejs backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Sass backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Styledcomponents backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <TailwindCSS backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <MUI backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
                <Solidity backgroundColor='#FFFFFF' logoColor='#000000' style={{ border: "1px solid #000" }} />
            </div>
        </section>
    )
}

export default Skills