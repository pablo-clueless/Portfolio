import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const ItemCard = ({name, description, lang, repo, live, image_dt, icon}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image_dt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {lang.map((lan) => (
            <Typography key={lan} variant='caption' textTransform='uppercase' color='text.secondary'>
                {lan}{' '}
            </Typography>
        ))}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' size="small">GITHUB</Button>
        <Button variant='outlined' size="small">Live</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard
