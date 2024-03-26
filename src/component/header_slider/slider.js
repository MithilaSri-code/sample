import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slider.css'
import localImage from '../../assest/feb-2024-all 1.png';
import { Grid } from "@mui/material";

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <img src={localImage} alt="main image" style={{ maxWidth: '100%', height: 'auto' }} />
            </Slide>

            <Grid className='enroll_link' md={3} style={{ maxWidth: '100%', height: 'auto' }} >
                <a href='/'>    Enroll now for the June 2024  intake </a>

            </Grid>
        </div>
    )
}

export default Slideshow;