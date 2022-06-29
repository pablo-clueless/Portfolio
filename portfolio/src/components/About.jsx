import React from 'react'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'var(--color-dark)',
        padding: '1rem 1.5rem',
        margin:'3rem 0'
    },
    div: {
        width: '50%',
        textAlign: 'left',
        '@media screen and (max-width: 900px)': {
            width: '100%',
        }
    },
})

const About = () => {
    const classes = useStyles()

    return (
        <Stack direction='column' alignItems='center' className={classes.root} id="about">
            <Typography variant='h3' color='text.primary' gutterBottom>
                About
            </Typography>
            <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={2}>
                <Stack direction='column' className={classes.div}>
                    <Typography variant='h4'>
                        Okunola Samson
                    </Typography>
                    <Typography variant='h3'>
                        Frontend Developer, Blockchain Enthusiast and Technical Writer.
                    </Typography>
                </Stack>
                <Stack direction='column' className={classes.div}>
                    <Typography variant='h4'>
                        Various versions have evolved over the years, sometimes 
                    </Typography>
                    <Typography variant='subtitle1'>
                        I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria.
                        <br />
                        I like looking for solutions and creating a great user experience adhering to real applications implementation with the knowledge and understanding of web development concepts. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br />
                        I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About
