import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './footer.css';

const Footer = () => {
    return (
        <div>
            <Box>
                <Container className='footer_topic'>
                    <Grid container item >
                        <Grid item xs={12} md={6} py={8}>
                            <h1 >Branches</h1>
                            <p> London to Europe, Sri Lanka, and Nigeria</p>
                        </Grid>
                        <Grid item xs={12} md={2} py={8} className='footer_mainlink' >
                            <h3 >Haqida</h3>
                            <p><a href='/'>Book Online</a></p>
                            <p><a href='/'>About Us</a></p>
                            <p><a href='/'>Our Services</a></p>

                        </Grid>
                        <Grid item xs={12} md={2} py={8} className='footer_mainlink' >
                            <h3 className='solid'>Links</h3>
                            <p><a href='/'>Careers</a></p>
                            <p><a href='/'>Help & Support</a></p>
                            <p><a href='/'>Blog</a></p>

                        </Grid>
                        <Grid item xs={12} md={2} py={8} className='footer_mainlink' >
                            <h3 className='solid'>Contact</h3>
                            <p><a href='/'>Download Android App</a></p>
                            <p><a href='/'>Download iOS App</a></p>
                            <p><a href='/'>Terms and Condition</a></p>

                        </Grid>
                    </Grid>
                    <h6>Developed By ITEYON</h6>
                </Container>
            </Box>
        </div>
    )
}

export default Footer
