import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './header_top.css';

const Header_top = () => {
  return (
    <div>
      <Box>
        <Container className='topic'>
          <Grid container item >
            <Grid item xs={12} md={6} py={4}>
              <h1 >Cavendish <br></br>
                International</h1>
            </Grid>
            <Grid item xs={12} md={6} py={4} className='mainlink' >
              <h4><a href='/'>Home</a></h4>
              <h4><a href='/'>About Us</a></h4>
              <h4><a href='/'>Our Services</a></h4>
              <h4><a href='/'>Our Placements Network</a></h4>
              <h4><a href='/'>Noble Aid</a></h4>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Header_top
