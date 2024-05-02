import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import './Pricing.css';

const Pricing = () => {
    return (
     <Box>
        <Box>
            <Typography className="pricing">Pricing</Typography>
        </Box>
        <Box className="pricing-txt">
            <Typography>The best storage service in the world</Typography>
        </Box>
        <Box className="pricing-cards">
        <Card className="price-card-item">
          <CardContent className="card-content">
         <Box className="price-card">
            <Box className="price-free">
            
            <Typography>Free</Typography>
           
           <Typography className="amount-block">
            <sup className="suppix">$</sup><Box className="amount">0</Box><Box className="measure">/m</Box>
           </Typography>
           
           <Typography>Round the clock storage</Typography>

           </Box>
           <Box className="pricing-btn">
            <Button variant="outlined" className="price-btn-1">Sign up</Button>
           </Box>
           <Box className="pricing-content">
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>5 Computers</Typography>
            </Box>
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>5 Users</Typography>
            </Box>
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>P server</Typography>
            </Box>
            
           </Box>
           </Box>
          </CardContent>
        </Card>


           <Box>
           <Card className="price-card-item">
          <CardContent className="card-content">
         <Box className="price-card">
            <Box className="price-free">
            <Box>
            <Typography>Personal Cloud</Typography>
           </Box>
           <Typography className="amount-block">
            <sup className="suppix">$</sup><Box className="amount">10.00</Box><Box className="measure">/m</Box>
           </Typography>
           <Box>
           <Typography>No hidden charges</Typography>
           </Box>
           </Box>
           <Box className="pricing-btn">
            <Button variant="outlined" className="price-btn-2">Sign up</Button>
           </Box>
           <Box className="pricing-content">
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>5 Computers</Typography>
            </Box>
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>5 Users</Typography>
            </Box>
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>P server</Typography>
            </Box>
            <Box className="check-icon">
                <CheckIcon className="tick-icon"/>
                <Typography>1TB Storage</Typography>
            </Box>
           </Box>
           </Box>
          </CardContent>
        </Card>

           </Box>
        </Box> 
     </Box>
    )

};
export default Pricing;