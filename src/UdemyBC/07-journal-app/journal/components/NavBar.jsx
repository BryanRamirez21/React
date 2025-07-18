import { Logout, LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogOut } from '../../store/auth'

export const NavBar = ({drawerWidth}) => {

    const dispatch = useDispatch();
    const onLogOut = () => {
        console.log('log out');
        dispatch(startLogOut());
    }

    return (
        <AppBar 
            position='fixed'
            sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{mr:2, display:{sm:'none'}}}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div' >JournaApp</Typography>
                    <IconButton 
                        color='error'
                        onClick={onLogOut}    
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
