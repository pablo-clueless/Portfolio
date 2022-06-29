import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, IconButton, List, ListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FiCodepen, FiGithub, FiLinkedin, FiMail ,FiTwitter } from 'react-icons/fi'

const useStyles = makeStyles({
    root: {
        height: 600,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: '0 3rem',
        gap: '1rem',
    },
    link: {
        margin: '3rem 0',
        textDecoration: 'none',
    },
    list: {
        display:'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 35,
        height: 35,
        color: 'var(--color-primary)',
        fontSize: '2rem',
        transition: 'var(--transition)',
        '&:hover': {
            color: 'var(--color-dark)',
        }
    }
})

const Contact = () => {
    const classes = useStyles()
    const [showSection, setShowSection] = useState(false)
    const [lastYPosition, setLastYPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const positionY = window.scrollY
            const isScrolling = positionY > lastYPosition

            setShowSection(isScrolling)
            setLastYPosition(positionY)
        }
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPosition])

    return (
        <motion.section 
        className={classes.root}
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSection ? 1 : 0, transition: { duration: 3 }}}>
            <Typography variant='h3' color='text.primary'>Contact</Typography>

            <Typography variant='body1' color='text.secondary'>Looking to hire? Have a project? </Typography>

            <Typography variant='body1' color='text.secondary'>I&apos;m currently open to junior developer roles. You can also reach out to me for collaborations, to ask questions or just simply say hi. I&apos;ll try to get back as soon as possible.</Typography>

            <a href='mailto:smsnmicheal@gmail.com' className={classes.link}>
                <Button variant='outlined' style={{width:200,gap:'1rem'}}>
                    <FiMail /> get in touch
                </Button>
            </a>

            <List className={classes.list}>
                <ListItem>
                    <IconButton>
                        <a href='https://codepen.io/pablo-clueless' target='_blank' rel='noopener noreferrer' className={classes.icon}>
                            <FiCodepen />
                        </a>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton>
                        <a href='https://github.com/pablo-clueless' target='_blank' rel='noopener noreferrer' className={classes.icon}>
                            <FiGithub />
                        </a>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton>
                        <a href='https://linkedin.com/in/samson-okunola/' target='_blank' rel='noopener noreferrer' className={classes.icon}>
                            <FiLinkedin />
                        </a>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton>
                        <a href='https://twitter.com/pablo_clueless' target='_blank' rel='noopener noreferrer' className={classes.icon}>
                            <FiTwitter />
                        </a>
                    </IconButton>
                </ListItem>
            </List>
        </motion.section>
    )
}

export default Contact