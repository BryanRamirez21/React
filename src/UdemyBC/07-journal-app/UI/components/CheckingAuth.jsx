import { CircularProgress, Grid2 } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
    return (
        <Grid2 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{minHeight:'100vh', backgroundColor:'primary.main', pt:4}}
        >
            <Grid2
                container
                direction='row'
                justifyContent='center'

            >
            <CircularProgress color='warning'/>
            </Grid2>
        </Grid2>
    )
}
