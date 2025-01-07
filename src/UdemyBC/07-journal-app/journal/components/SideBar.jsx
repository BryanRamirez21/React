import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
    return (
        <Box
            component='nav'
            sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
        >
            <Drawer
                variant="permanent" // could be "temporary"
                open
                sx={{
                    display:{xs:'block'},
                    '& .MuiDrawer-paper': {boxSizing:'border-box', width:drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>DonByron</Typography>
                </Toolbar>
                <Divider />
                <List>
                     {
                        ['january', 'february', 'march', 'april'].map(element => (
                            <ListItem key={element} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={element} />
                                        <ListItemText secondary={''} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                     }
                </List>
            </Drawer>
        </Box>
    )
}
