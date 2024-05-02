import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Person2Icon from "@mui/icons-material/Person2";
import './SharingStorage.css';
import "../Technologies/Tech.css";

const SharingStorage = () =>{

    return(
        <Box>
            <Box className="sharing-content">
                <Box className="sharing-header">
                        <Typography className="sharing-title">More than just sharing & storage</Typography>
                        <Typography variant="body1" className="sharing-sub">File storage made easy - including powerful features you won't find anywhere else. whether you're.</Typography>
                        <Box m={2}>
                            <Button variant="contained" className="btn-filled">Get started</Button>
                            <Button className="watch-btn"> <PlayCircleIcon className="play-icon" /> Watch Video</Button>
                        </Box>
                </Box>
            </Box>
            <Box  className='technology'>
            <Box>
            <Box className="tech-info">
        <Box className="tech-content">
          <Typography className="sub-title">
            Unleash the power of Latest Technologies.
          </Typography>
          <Typography variant="body1">
            File storage made easy - including powerful features you won't find
            anywhere else. whether you're.
          </Typography>
        </Box>
        <Box className="nav-logo">
        <Typography mr={1}>Show All</Typography>
        <ArrowForwardIcon />
        </Box>
      </Box>
      <Box className="cards-section">
        <Card className="card-item-sharing card-1">
          <CardContent className="card-content">
            <GppGoodIcon className="card-icon icon-bg-1" />
            <Box className="card-info">
              <Typography className="card-title">Features you find</Typography>
              <Typography>
                File storage made easy - including powerful features you won't
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className="card-item-sharing card-2">
          <CardContent className="card-content">
            <Person2Icon className="card-icon icon-bg-2" />
            <Box className="card-info">
              <Typography className="card-title">Features you find</Typography>
              <Typography>
                File storage made easy - including powerful features you won't
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className="card-item-sharing card-3">
          <CardContent className="card-content">
            <DesktopWindowsIcon className="card-icon icon-bg-3" />
            <Box className="card-info">
              <Typography className="card-title">Features you find</Typography>
              <Typography>
                File storage made easy - including powerful features you won't
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
        </Box>
            </Box>
        </Box>
    )
}

export default SharingStorage;