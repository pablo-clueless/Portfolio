import React from 'react'
import { Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(2px)',
        zIndex: 2,
    },
    menu: {
        width: '50%',
        height: '100%',
        background: 'var(--color-gray)',
    }
})

const Sidebar = ({ handleToggle }) => {
    const classes = useStyles()

  return (
    <Stack className={classes.root} onClick={handleToggle}>
        <Stack className={classes.menu}>

        </Stack>
    </Stack>
  )
}

export default Sidebar