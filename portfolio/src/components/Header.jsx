import React, { useEffect,useState } from 'react'
import { Avatar, Button, List, ListItem, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import image from '/images/pablo.jpeg'

const useStyles = makeStyles({
    root: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        '@media screen and (max-width: 900px)': {
            flexDirection: 'column',
        }
    },
    section: {
        width: '50%',
        height: '100%',
        alignItems:'center',
        justifyContent: 'center',
        padding: '0 1rem',
        margin: '6rem 0',
        '@media screen and (max-width: 868px)': {
            width: '100%',
        }
    },
    button: {
        margin: '2rem 0',
    },
    link: {
        textDecoration: 'none',
    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <Stack className={classes.root} id='home'>
            <Stack direction='column' className={classes.section} textAlign='center'>
                <Avatar src={image} sx={{ width: 200, height: 200 }} />
                <Typography variant='h3' m={2} textTransform='uppercase'>
                    Hi! I'm Samson.<br />
                    A web developer based in lagos.
                </Typography>
                <a href='mailto:smsnmicheal@gmail.com' className={classes.link}>
                    <Button variant='contained' className={classes.button}>
                        Hire Me
                    </Button>
                </a>
            </Stack>
        </Stack>
    )
}

export default Header