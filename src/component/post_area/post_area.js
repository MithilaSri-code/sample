import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './post_area.css';
import image from '../../../src/assest/2149649379 1.png';
import image1 from '../../../src/assest/cheerful-students-communicating-after-lessons 1.png';
import image2 from '../../../src/assest/cheerful-students-communicating-after-lessons 2.png';

const Post_area = () => {
    return (
        <div>
            <Box className='main_post_area'>
                <Container >
                    <Grid container item>

                        <Grid item xs={12} md={12} py={4}>
                            <Grid className='topic_area'>
                                <h1>Recent Posts</h1>
                                <h3>see all</h3>
                            </Grid>
                            <Grid className='post_main' >
                                <Grid className='post'>
                                    <img src={image} alt="main image" width={300} />
                                    <p>3.Jun 2023 3min read 2 view</p>
                                    <h3>Unlocking Your Potential: The <br>
                                    </br>Cavendish Approach to Education</h3>
                                    <p>see all</p>
                                </Grid>
                                <Grid className='post'>
                                    <img src={image1} alt="main image" width={300} />
                                    <p>3.Jun 2023 3min read 2 view</p>
                                    <h3>From Classroom to Real Life:<br></br> Experiential Learning at <br></br> Cavendish International</h3>
                                    <p>see all</p>
                                </Grid>
                                <Grid className='post'>
                                    <img src={image2} alt="main image" width={300} />
                                    <p>3.Jun 2023 3min read 2 view</p>
                                    <h3>Revolutionizing Education: A <br></br> Textbook-Free Learning <br></br> Environment</h3>
                                    <p>see all</p>
                                </Grid>

                            </Grid>




                        </Grid>
                    </Grid>




                </Container>




            </Box>

        </div>
    )
}

export default Post_area
