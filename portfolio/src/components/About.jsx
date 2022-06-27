import React from 'react'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'var(--color-dark)',
        padding: '0 1rem',
        margin:'3rem 0 0 0'
    }
})

const About = () => {
    const classes = useStyles()

    return (
        <Stack direction='column' className={classes.root} id="about">
            <Typography variant='h3' color='text.primary'>About</Typography>
            <Typography variant='body1'>
                I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria. I love minimalist & cool designs and animations. I spend most of my time either writing new codes or reviewing previous ones, adhering to real applications implementation with the knowledge and understanding of web development concepts.
                <br /> <br />
                I like looking for solutions and creating a great user experience. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br /> <br />
                I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.
            </Typography>
        </Stack>
    )
}

export default About
