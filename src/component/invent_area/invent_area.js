import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './invent_area.css'
import image from '../../../src/assest/college-students-cramming-outdoor 1.png';

const Invent_area = () => {
    return (
        <div>
            <Box>
                <Container className='topic'>
                    <Grid container item >
                        <Grid item xs={12} md={6} py={4}>
                            <h1 >Invent
                                <span className='redcolor'>   A New You</span>
                                 with us </h1>
                            <h1> Disruptive Education </h1>
                        </Grid>
                        <Grid item xs={12} md={6} py={4} className='mainlink' >
                            <img src={image} alt="main image" style={{ maxWidth: '100%', height: 'auto' }}  />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </div>
    )
}

export default Invent_area
