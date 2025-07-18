import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

    const dispatch = useDispatch();
    const {isSaving, active} = useSelector(state => state.journal);

    const onClickNewNote = () =>{
        dispatch(startNewNote());
    }

    return (
        //this line transforms the component into the "variant" specified
        //<Typography variant='h1'>JournalPage</Typography>

        //BUT this other line transforms ONLY THE NAME OF the component into the "component" specified
        //<Typography component='h1'>JournalPage</Typography>

        <JournalLayout className='animate__animated animate__fadeIn animate__faster'>
            {
                active
                ? <NoteView />
                : <NothingSelectedView />
            }
            
            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                size='large'
                sx={{
                    color:'white',
                    backgroundColor:'error.main',
                    ":hover":{backgroundColor:'error.main', opacity:0.9},
                    position:'fixed',
                    right:50,
                    bottom:50
                }}
            >
                <AddOutlined sx={{fontSize:30}}/>
            </IconButton>
        </JournalLayout>
    )
}
