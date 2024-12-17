import { Typography } from '@mui/material'
import React from 'react'

export const JournalPage = () => {
    return (
        //this line transforms the component into the "variant" specified
        //<Typography variant='h1'>JournalPage</Typography>

        //BUT this other line transforms ONLY THE NAME OF the component into the "component" specified
        //<Typography component='h1'>JournalPage</Typography>

        <>
        <Typography variant='h1'>JournalPage</Typography>
        </>
    )
}
