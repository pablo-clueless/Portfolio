import React from 'react'
import { motion } from 'framer-motion'
import { Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} alignItems='center' justifyContent='space-between' p={2}>
            <Typography variant='caption'>Designed and built by Okunola Samson - <span>@pablo_clueless</span></Typography>
            <motion.a href='#home' animate={{ color: "var(--color-primary)", scale: 1 }} whileHover={{color: "var(--color-dark)", translateY: [-5, 0, -5], transition: {type: "spring", stiffness: 100, duration: 0.5, repeat: Infinity}}}>
                scroll to top &uarr;
            </motion.a>
        </Stack>
    )
}

export default Footer