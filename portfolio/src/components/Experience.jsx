import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { WorkData } from '../../work-data'
import Card2 from './Card2'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    color: 'var(--color-dark)',
    padding: '1rem 1.5rem',
    margin:'3rem 0'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem 2rem',
    textAlign: 'left',
    position: 'relative',
    '&::before': {
      position: 'absolute',
      top: 0,
      left: -2,
      content: '',
      width: 20,
      height: 20,
      background: 'red',
    }
  }
})

const Experience = () => {
  const classes = useStyles()

  return (
    <section className={classes.root} id="experince">
      <Typography variant='h3' color='text.primary'>Experience</Typography>

      <Typography variant='body1'>Below are some of the companies where I've worked as a developer.</Typography>

      <Stack direction='column' alignItems='center' p={2}>
        {WorkData.map((item) => (
          <Card2 key={item.index} {...item} />
        ))}
      </Stack>
    </section>
  )
}

export default Experience