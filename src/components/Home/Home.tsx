import { Box, Button, Grid, Typography } from "@mui/material";
import './Home.css';
import HomeImg from '../../assets/home-logo.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Home = () => {
    return(
        <Box className="home-container">
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Box className="home-content">
                        <Typography className="main-title">More than just sharing & storage</Typography>
                        <Typography variant="body1">File storage made easy - including powerful features you won't find anywhere else. whether you're.</Typography>
                        <Box m={2}>
                            <Button variant="contained" className="btn-filled">Get started</Button>
                            <Button className="watch-btn"> <PlayCircleIcon className="watch-icon" /> Watch Video</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                     <img src={HomeImg} className="home-img" alt="Home img"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;