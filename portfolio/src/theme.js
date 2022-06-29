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
                    backgroundColor: 'var(--color-dark)',
                    color: 'var(--color-light)',
                    borderRadius: 0,
                    transition: 'var(--transition)',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: 'var(--color-dark)',
                    }
                },
                outlined: {
                    width: 100,
                    backgroundColor: 'transparent',
                    color: 'var(--color-dark)',
                    border: 'thin solid var(--color-primary)',
                    borderRadius: 0,
                    transition: 'var(--transition)',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: 'transparent',
                        border: 'thin solid var(--color-primary)',
                    }
                }
            }
        }
    },
    palette:{
        text: {
            primary: '#E35A44',
            secondary: '#8A9B8C'
        }
    }
})