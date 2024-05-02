import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/B-logo.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './NavBar.css'

const NavBar = () => {
    return(
        <Box className="nav-bar">
            <Box className="nav-bar-item">
            <Box className="nav-logo" mr={3}>
                <img src={logo} alt="eye"/>                 
                <Typography  className="img-text">Besink</Typography>                  
            </Box>
            <Box className="nav-logo">
                <LocalPhoneIcon />
                <Typography variant="body1" ml={2}> 1-2626-323-233</Typography>
            </Box>
                
            </Box>
            <Box className="nav-bar-item">
                <Box className="nav-logo" mr={1}>
                    <Typography variant="body1">Products</Typography>
                    <ArrowDropDownIcon />
                </Box>
                <Box className="nav-logo"  mr={1}>
                    <Typography variant="body1">Resources</Typography>
                    <ArrowDropDownIcon />
                </Box>
                <Typography variant="body1">Get a Demo</Typography>
            </Box>
            <Box className="nav-bar-item">
                <Typography variant="body1" mr={2}>Log in</Typography>
                <Button className="get-started-btn" variant="outlined">Get Started</Button>
            </Box>
        </Box>
    )
}

export default NavBar;