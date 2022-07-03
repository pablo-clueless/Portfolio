import React from 'react'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-primary)',
    transition: 'var(--transition)',
    '&:hover': {
      transform: 'translateY(-5px)',
    }
  },
  card_image: {
    width: '100%',
    height: 300,
  },
  card_content: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'left',
    padding: '0 0.5rem',
    margin: '0.5rem 0',
  },
  card_content_title: {
    width: 'fit-content',
    fontWeight: 600,
    padding: '0 0.5rem',
  }
})

const ItemCard = ({name, description, repo, live, image_dt}) => {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <img src={image_dt} alt="project" className={classes.card_image} />

      <Stack className={classes.card_content}>
        <Typography variant='h6' className={classes.card_content_title}>
          {name}
        </Typography>
        <Typography variant='caption'>
          {description}
        </Typography>

        <Stack direction='row' spacing={4}>
          <a href={repo} target='_blank' rel='noreferrer'>
            <Typography variant='caption'>
              Github
            </Typography>
          </a>
          <a href={live} target='_blank' rel='noreferrer'>
            <Typography variant='caption'>
              Live
            </Typography>
          </a>
        </Stack>
      </Stack>
    </div>
  )
}

export default ItemCard
