import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({drawerWidth}) => {

    const {displayName} = useSelector(state => state.auth);
    const {notes} = useSelector(state => state.journal);

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
                    <Typography variant="h6" noWrap component='div'>{displayName}</Typography>
                </Toolbar>
                <Divider />
                <List>
                     {
                        notes.map(note => (
                            //! BAD:
                            //! <SideBarItem note={...note} key={note.id} />
                            //  GOOD:
                            <SideBarItem {...note} key={note.id} />
                        ))
                     }
                </List>
            </Drawer>
        </Box>
    )
}
