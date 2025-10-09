import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display:"flex"}}>
            {/* navbar */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* sidebar */}
            <SideBar drawerWidth={drawerWidth} />

            {/* the "component" will give it the class(etqiueta) of 'main */}
            <Box 
                component='main'
                sx={{flexGrow:1, p:1}}
            >
                {/* toolbar */}
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
