import React from 'react'
import { Button, List, ListItem, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'

import logo from '/images/logo.png'
import { Twitter } from '../assets/icons'

const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: 'thin solid var(--color-secondary)',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'var(--color-light)',
        zIndex: 2
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
    },
    list:{
        display:'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 800px)': {
            display: 'none',
        }
    },
    link: {
        textDecoration: 'none',
        color: 'var(--color-dark)',
        textTransform: 'capitalize',
    },
    logo: {
        width: 50,
        height: 50,
    },
    button: {
        display: 'none',
        '@media screen and (max-width: 800px)': {
            display: 'block',
        }
    }
})

const Navbar = () => {
    const classes = useStyles()

  return (
    <nav className={classes.nav}>
        <Toolbar className={classes.toolbar}>
            <img src={logo} alt="logo" className={classes.logo} />

            <List className={classes.list}>
                <ListItem>
                    <a href="#projects" className={classes.link}>
                        Projects
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#contact" className={classes.link}>
                        Contact
                    </a>
                </ListItem>
                <ListItem>
                    <a href="https://frontendpablo.hashnode.dev" target='_blank' rel='noreferrer' className={classes.link}>
                        Blog
                    </a>
                </ListItem>
            </List>
            <a href="https://twitter.com/messages/compose?recipient_id=3805104374" target='_blank' rel='noreferrer' className={classes.link} data-screen-name='@pablo_clueless'>
                <Button variant='outlined' size='small'>
                    Let's Chat <Twitter />
                </Button>
            </a>
        </Toolbar>
    </nav>
  )
}

export default Navbar