import { Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { JavaScript, Nextjs, Nodejs, React, Redux, Sass, Solidity, Styledcomponents, Threejs, TypeScript } from '../assets/icons'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'var(--color-dark)',
        padding: '1rem 1.5rem',
        margin:'3rem 0'
    },
})

const Skills = () => {
    const classes = useStyles()

    return (
        <Stack className={classes.root} id="skills">
            <Typography variant='h3' color='text.primary'>
                Skills
            </Typography>
            <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={2}>
                <Stack px={2}>
                    <Typography variant='h6'> 2 years, a ton of tutorials and online courses, here i am.</Typography>

                    <Typography variant='body1'>
                        A passion of mine is translating logic and designs into code. Here are some the tools I use
                    </Typography>
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                        <JavaScript />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Nextjs />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Nodejs />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <React />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Redux />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Sass />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Solidity />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Styledcomponents />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Threejs />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <TypeScript />
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default Skills