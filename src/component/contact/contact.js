import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './contact.css';
import image from '../../assest/icons8-whatsapp-480 1.png';
import image1 from '../../assest/Ellipse 2.png';
import image2 from '../../assest/Ellipse 3.png';
import image3 from '../../assest/Ellipse 4.png';
import image4 from '../../assest/Ellipse 5.png';
import image5 from '../../assest/Ellipse 6.png';
import image6 from '../../assest/Ellipse 7.png';

const Contact = () => {
    return (
        <div>
            <Box>
                <Container className='topic'>
                    <Grid container item >
                        <Grid item xs={12} md={6} py={4}>
                            <h1 className='montserrat-font' >Learn English from <br></br> scratch.</h1>
                            <p className='montserrat-font1'>Learn everything holding you from being that top <br></br> level executive. The CEO. Take the first step. The four <br></br> skills of reading, writing, speaking and listening alone <br></br> ever took one anywhere. There are more important <br></br> skills behind a professional. Wanna learn those? <br></br> Wanna sound an expert in your subject? Wanna learn <br></br> your subject in English and be a presenter and an <br></br> effective analyst? Come on. Just tap on the Whats<br></br> App button. Or just call.</p>
                        <Grid className='contact_main'>

                                <h1 className='contact2'>Contact</h1>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} py={4} className='mainlink' >

                            <img src={image1} alt="main image" width={29} height={28} className='image1'  />
                            <img src={image2} alt="main image" width={21} height={19} className='image2' />
                            <img src={image3} alt="main image" width={15} height={14} className='image3' />
                            <img src={image4} alt="main image" width={29} height={28} className='image4' />
                            <img src={image5} alt="main image" width={29} height={28} className='image5' />
                            <img src={image6} alt="main image" width={86} height={83} className='image6' />
                            <img src={image} alt="main image" width={359} height={338} className='image' style={{ maxWidth: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Contact