/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image from '../../../src/assest/is-feb2022 1.png';
import { Grid } from "@mui/material";

const Main_image = () => {
  return (
      <div>
          <Grid item >
          <img src={image} alt="main image" className='image'  />
          </Grid>
      </div>
  )
}

export default Main_image
