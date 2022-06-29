import React, { useEffect,useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import image from '/images/pablo_clueless.png'

const useStyles = makeStyles({
    root: {
        width:'100%',
        height: '100vh',
        alignItems:'center',
        justifyContent: 'center',
    },
    section: {
        width: '50%',
        height: '100%',
        padding: '0 1rem',
        alignItems:'center',
        justifyContent: 'center',
        '@media screen and (max-width: 868px)': {
            width: '100vw',
        }
    },
    button: {
        margin: '2rem 0',
    }
})

const Header = ({ data }) => {
    const classes = useStyles()

    return (
        <Stack className={classes.root} id='home'>
            <Stack direction='column' className={classes.section} textAlign='center'>
                <Typography variant='h3' m={2}>
                    Hi! I'm <br />
                    Okunola Samson
                </Typography>
                <Typography variant='body1' m={2}>
                    Frontend Developer, Blockchain Enthusiast and Technical Writer.
                </Typography>
                <Button variant='contained' className={classes.button}>
                    Hire Me
                </Button>
                <Stack direction='row' spacing={4} alignItems='center' style={{ width: 'auto', height: 'auto' }}>
                    <Stack direction='column' m={2}>
                        <Typography variant='h4'>
                            {data.public_repos}
                        </Typography>
                        <Typography variant='caption'>
                            Repos
                        </Typography>
                    </Stack>
                    <Stack direction='column'>
                        <Typography variant='h4'>
                            {data.followers}
                        </Typography>
                        <Typography variant='caption'>
                            Followers
                        </Typography>
                    </Stack>
                </Stack>
                <Stack></Stack>
            </Stack>
        </Stack>
    )
}

export default Header