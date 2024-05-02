import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Person2Icon from "@mui/icons-material/Person2";
import "./Tech.css";

const CardsSections = () => {
    return(
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
        <Card className="card-item">
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
        <Card className="card-item">
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
        <Card className="card-item">
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
    )
}

export default CardsSections;