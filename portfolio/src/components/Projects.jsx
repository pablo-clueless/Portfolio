import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import ItemCard from './Card'
import { data } from '../../project-data'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'var(--color-dark)',
        padding: '1rem 1.5rem',
        margin:'3rem 0'
    },
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '3rem',
        padding: '1rem 0',
        margin: '2rem 0 0',
    }
})

const Projects = () => {
    const classes = useStyles()

    return (
       <Stack className={classes.root} id='projects'>
           <Typography variant='h3' color='text.primary'>
                Projects
            </Typography>

           <Typography variant='body1' gutterBottom>
            I like to build as learn and improve on whatever I do. Take a peek into my codes and creations.
            </Typography>

           <div className={classes.container}>
                {data.map((item) => (
                    <ItemCard key={item.name} {...item} />
                ))}
            </div>
       </Stack>
    )
}

export default Projects