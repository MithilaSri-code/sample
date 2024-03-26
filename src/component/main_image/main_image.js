/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image from '../../../src/assest/is-feb2022 1.png';
import { Grid } from "@mui/material";

const Main_image = () => {
  return (
      <div>
      <Grid item className='image' >
        <img src={image} alt="main image" width={1300} height={753} />

          </Grid>
      </div>
  )
}

export default Main_image
