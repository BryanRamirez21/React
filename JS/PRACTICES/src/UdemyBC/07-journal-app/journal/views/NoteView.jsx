import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImagesGallery } from '../components'

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:2}}>
            <Typography fontSize={39} fontWeight='light'>August 28 2025</Typography>
            <Grid item>
                <Button color='primary' sx={{padding:2}}>
                    <SaveOutlined sx={{fontSize:30, mr:1}}></SaveOutlined>
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField 
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Type a title'
                    label='title'
                    sx={{border:'none', mb:1}}
                />

                <TextField 
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='What happend today?'
                    label='note'
                    minRows={5}
                />
            </Grid>
            <ImagesGallery />
        </Grid>

    )
}
