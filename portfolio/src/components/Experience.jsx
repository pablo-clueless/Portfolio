import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { WorkData } from '../../work-data'

const useStyles = makeStyles({
  root: {
    height: 400,
    textAlign: 'center',
    color: 'var(--color-dark)',
    padding: '0 1rem',
    margin:'3rem 0 0 0'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem 2rem',
  }
})

const Experience = () => {
  const classes = useStyles()

  return (
    <section className={classes.root} id="experince">
      <Typography variant='h3' color='text.primary'>Experience</Typography>

      <Typography variant='body1'>Below are some of the places where I&apos;ve plied the art of web development.</Typography>

      <Stack direction='column' alignItems='center' p={2}>
        {WorkData.map((item, i) => (
          <Card key={i} className={classes.card}>
            <Typography variant='h5' color='text.secondary'>{item.company}</Typography>
            <Typography variant='body2' color='text.secondary'>{item.position}, {item.type}</Typography>
            <Typography variant='caption' color='text.secondary'>{item.start} - {item.end}</Typography>
          </Card>
        ))}
      </Stack>
    </section>
  )
}

export default Experience