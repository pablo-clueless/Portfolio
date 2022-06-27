import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-body)',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    width: 100,
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-dark)',
                    transition: 'var(--transition)',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: 'var(--color-primary)',
                    }
                },
                outlined: {
                    width: 100,
                    backgroundColor: 'transparent',
                    color: 'var(--color-dark)',
                    border: 'thin solid var(--color-dark)',
                    transition: 'var(--transition)',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: 'transparent',
                        border: 'thin solid var(--color-dark)',
                    }
                }
            }
        }
    },
    palette:{
        text: {
            primary: '#DED1C1',
            secondary: '#262626'
        }
    }
})