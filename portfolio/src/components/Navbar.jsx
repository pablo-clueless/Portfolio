import React from 'react'
import { Button, IconButton, List, ListItem, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'

import logo from '/images/logo.png'

const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: 'thin solid var(--color-gray)',
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

const links = ['home', 'about', 'projects', 'skills']

const Navbar = () => {
    const classes = useStyles()

  return (
    <nav className={classes.nav}>
        <Toolbar className={classes.toolbar}>
            <img src={logo} alt="logo" className={classes.logo} />

            <List className={classes.list}>
                {links.map((link) => (
                    <ListItem key={link}>
                        <a href={`#${link}`} className={classes.link}>
                            {link}
                        </a>
                    </ListItem>
                ))}
                <ListItem>
                    <Button variant='outlined' size='small'>
                        Let's Chat
                    </Button>
                </ListItem>
            </List>

            <IconButton className={classes.button}>
                <Icon icon='line-md:chevron-triple-left' />
            </IconButton>
        </Toolbar>
    </nav>
  )
}

export default Navbar