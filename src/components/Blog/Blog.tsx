import { Box, Divider, Typography } from "@mui/material";
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.jpeg';
import blog3 from '../../assets/blog3.jpeg';
import './Blog.css';

const Blog = () => {
    return (
        <Box>
            <Box className="blog-header">
              <Box className="header-sec">
                <Typography className="blog-header-text">Our Blog</Typography>
                <Typography className="blog-header-sub-text">File storage made easy-including powerfull features</Typography>
              </Box>
               <Box className="blog-img">
                <Box className="blog-img-txt">
                 <img src={blog1} alt="blog1" className="blog-img-item"/>
                   <Box className="blog-sub-txt">
                     <Box className="blog-txt">
                    
                    <Typography mr={2}>Cloud</Typography>
                    <Typography>App Development</Typography>
                   
                     </Box>
                     <Box>
                        <Typography className="blog-files-txt">No worries about lossing files</Typography>
                     </Box>
                   </Box> 
                 </Box>
                 <Box className="blog-sub-txt">
                  <Box className="blog-img-txt">
                    <img src={blog2} alt="blog2" className="blog-img-item"/>
                     <Box className="blog-txt-closer">
                     <Typography>Cloud</Typography>
                   
                    </Box>
                    <Box >
                        <Typography className="blog-files-txt">Do more with less cost</Typography>
                     </Box>
                  </Box>
                </Box>
                <Box className="blog-sub-txt">
                  <Box className="blog-img-txt">
                   <img src={blog3} alt="blog3" className="blog-img-item"/>
                    <Box className="blog-txt-business">
                     <Typography>Business</Typography>
                   
                     </Box>
                     <Box>
                        <Typography className="blog-files-txt">Get good things in life</Typography>
                     </Box>

                  </Box>
                </Box>
               </Box>
               <hr/>
            </Box>
            <Divider />
        </Box>
    )

};
export default Blog;