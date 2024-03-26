import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import './country_list.css'

const Country_list = () => {
  return (
    <div>
          <Box className='list_main'>
              <Container >
                  <Grid container item >
                      <Grid item xs={12} md={8} py={4} className='country_list'>
                          <h1 >Transforming Education <br></br> Worldwide</h1>

                          <h1 > Cavendish International's Global Footprint from <span className='redcolor'> London </span> to <span className='redcolor'> Europe </span>,<span className='redcolor'> Sri Lanka</span>, and <span className='redcolor'> Nigeria</span></h1>
                      </Grid>

                  </Grid>
              </Container>
          </Box>

    </div>
  )
}

export default Country_list
