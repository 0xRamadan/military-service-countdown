import React from 'react'
import { Box } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', color: 'white'}}>
            <p className='text-marginBottom'>© {new Date().getFullYear()}{'.'} <a className="copyrightLink" href="https://www.linkedin.com/in/geekahmed/">Ahmed Mostafa</a> | <a className="copyrightLink" href="https://www.linkedin.com/in/mahmoud-abdallah-942227185/">Mahmoud Abdallah</a></p>
            <p className='text-marginTop'>All rights reserved.</p>
        </Box>
    )
}

export default Footer