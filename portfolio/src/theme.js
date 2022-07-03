import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-body)',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    width: 120,
                    backgroundColor: 'var(--color-dark)',
                    color: 'var(--color-light)',
                    borderRadius: '5px',
                    transition: 'var(--transition)',
                    '&:hover': {
                        backgroundColor: 'var(--color-dark)',
                        color: 'var(--color-primary)'
                    }
                },
                outlined: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    width: 120,
                    backgroundColor: 'transparent',
                    color: 'var(--color-dark)',
                    border: 'thin solid var(--color-primary)',
                    borderRadius: '5px',
                    transition: 'var(--transition)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-light)',
                        borderColor: 'transparent'
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