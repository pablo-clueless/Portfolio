import React from 'react'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  card: {
    width: '60%',
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 900px)': {
      width: '100%',
      height: 'fit-content',
      gap: 10,
    }
  },
  card_image: {
    width: '50%',
    height: '100%',
    objectFit: 'contain',
    '@media screen and (max-width: 900px)': {
      width: '100%',
    }
  },
  card_content: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
    '@media screen and (max-width: 900px)': {
      width: '100%',
      height: 'fit-content',
    }
  },
  card_content_title: {
    background: 'var(--color-primary)',
    width: 'fit-content',
    fontWeight: 600,
    padding: '0 0.5rem',
  }
})

const ItemCard = ({name, description, lang, repo, live, image_dt, icon}) => {
  const classes = useStyles()

  return (
    <Stack direction={{xs: 'column', sm: 'column', md: 'row'}} className={classes.card}>
      <img src={image_dt} alt="project" className={classes.card_image} />

      <Stack className={classes.card_content}>
        <Typography variant='h6' className={classes.card_content_title}>
          {name}
        </Typography>
        <Typography variant='body2'>
          {lang}
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
    </Stack>
  );
}

export default ItemCard
