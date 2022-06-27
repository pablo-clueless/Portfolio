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
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        height: 400,
        textAlign: 'center',
        color: 'var(--color-dark)',
        padding: '0 1rem',
        margin:'3rem 0 0 0'
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '1rem 0',
        padding: '0 3rem',
    },
    badge: {
        width: 100,
        height: 25
    }
})

const Skills = () => {
    const classes = useStyles()

    return (
        <Stack className={classes.root} id="skills">
            <Typography variant='h3' color='text.primary'>Skills</Typography>

            <Typography variant='h6'> 2 years, a ton of tutorials and online courses, here i am.</Typography>

            <Typography variant='body1'>I am autodidactic, solution-oriented and a team player, currently learning Python and Typescript. below are some technologies I&apos;ve been working with:</Typography>
            <div className={classes.grid}>
                <JavaScript className={classes.badge} />
                <TypeScript className={classes.badge} />
                <ReactBadge className={classes.badge} />
                <Nextjs className={classes.badge} />
                <Nodejs className={classes.badge} />
                <Express className={classes.badge} />
                <Threejs className={classes.badge} />
                <Sass className={classes.badge} />
                <Styledcomponents className={classes.badge} />
                <TailwindCSS className={classes.badge} />
                <MUI className={classes.badge} />
                <Solidity className={classes.badge} />
            </div>
        </Stack>
    )
}

export default Skills