import { Box, Typography } from "@mui/material";
import BLogo from '../../assets/B-logo.png';
import client from '../../assets/client-logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Client.css';

const Client = () => {
    return(
        <Box className="client-container">
            <Box className="sub-container">
             <Box className="client-header">
               <Box>
                <Typography className="client-main-header">What our happy client say</Typography>
               </Box>
               <Box >
                <Typography className="client-subheader">File storage made easy-including powerful features <br/> you won't find antwhere else.whethere you're</Typography>
               </Box>
             </Box>

             <Box className="client-main-part">
              <Box className="client-logo">
                  <img src={client} alt="happy client" className='client-img'/>
              </Box>

                <Box className="client-sub-part">
                    <Box className="client-sub-img">
                      <img src={BLogo} alt="eye"/>                 
                        <Typography  className="img-text">Besink</Typography>                  
                    </Box>

                    <Box className="client-text">
                       <Typography className="files-text">File storage made easy-including powerful features  you won't find antwhere else.whethere you're</Typography>
                        <Typography className="client-diamomd">Larry Diamond</Typography>
                        <Typography className="client-chief">Chief Execuitive officer,Besnik</Typography>
                      </Box>
                      <Box className="arrow-icon">
                         <ArrowBackIcon className="icon"/>
                         <ArrowForwardIcon  className="icon"/>
                      </Box>
                   
                </Box>
                  
             </Box>
            </Box>
            
        </Box>
    )
};
export default Client;