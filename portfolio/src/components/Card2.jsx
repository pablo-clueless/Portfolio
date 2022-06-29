import React from 'react'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        border: '2px solid var(--color-dark)',
    },
    block: {
        width: 30,
        height: 30,
        display: 'grid',
        placeItems: 'center',
        background: 'var(--color-dark)',
        color: 'var(--color-light)',
    }
})

const Card2 = ({index, company, position, type, start, end}) => {
    const classes = useStyles()

  return (
    <div className={classes.root}>
        <Typography className={classes.block}>
            {index}
        </Typography>
        <Stack direction='column'>
            <Typography variant='h5'>
                {company}
            </Typography>
            <Stack direction='row'>
                <Typography variant='caption'>
                    {start} - {end}
                </Typography>
            </Stack>
        </Stack>
        <Stack direction='column'>
            <Typography variant='body2'>
                {position}
            </Typography>
            <Typography variant='caption'>
                {type}
            </Typography>
        </Stack>
    </div>
  )
}

export default Card2