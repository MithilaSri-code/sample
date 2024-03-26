import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slider.css'
import localImage from '../../assest/feb-2024-all 1.png';
import { Grid } from "@mui/material";

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <img src={localImage} alt="main image" />
            </Slide>
            

        </div>

    )
}

export default Slideshow;