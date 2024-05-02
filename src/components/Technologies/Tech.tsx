import { Box, Card, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Tech1 from "../../assets/tech-1.png";
import Tech2 from "../../assets/tech-2.png";
import Clients from "../../assets/clients.png";

import "./Tech.css";
import CardsSections from "./CardsSection";
const TechPage = () => {
  return (
    <Box className="tech-section">
      
      <CardsSections />
      <Card className="plans-card">
        <Box className="tech-cloud">
          <img src={Tech1} className="tech-img" alt="colud storage" />
          <Box ml={25}>
            <Typography className="highlight-text">Plan Hightlights</Typography>
            <Typography className="cloud-title">
              Manage Your cloud profile the way you want,
            </Typography>
            <Typography className="cloud-content">
              File storage made easy - including powerful features you won't{" "}
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Satifaction guranted
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Fair Picking
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Fast Touraround
            </Typography>
          </Box>
        </Box>
        <Box className="tech-cloud">
          <Box mr={24} ml={5}>
            <Typography className="highlight-text">Plan Hightlights</Typography>
            <Typography className="cloud-title">
              Manage Your cloud profile the way you want,
            </Typography>
            <Typography className="cloud-content">
              File storage made easy - including powerful features you won't{" "}
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Satifaction guranted
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Fair Picking
            </Typography>
            <Typography className="highlight-point" gutterBottom>
              <CheckCircleIcon className="highlight-point-icon" />
              Fast Touraround
            </Typography>
          </Box>
          <img src={Tech2} className="tech-img" alt="colud storage" />
        </Box>
      </Card>

      <Box className="client-section">
        <Typography className="client-title">Our Clients</Typography>
        <Typography className="cloud-content">
            File storage made easy - including powerful features
        </Typography>
        <img src={Clients} alt="" />
      </Box>
    </Box>
  );
};

export default TechPage;
