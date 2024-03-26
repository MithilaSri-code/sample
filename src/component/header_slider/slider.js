import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slider.css'
import localImage from '../../assest/feb-2024-all 1.png';

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <img src={localImage} alt="main image" style={{ maxWidth: '100%', height: 'auto' }} />
            </Slide>
        </div>
    )
}

export default Slideshow;