import React, { useState } from 'react';
import { Grid } from "@mui/material";
import './reg_form.css';


const Reg_form = () => {
    return (
        <div>
            <Grid>
                <h1 className='header'>Stay informed, join our newsletter</h1>
            </Grid>
            <Grid>
                <form className='form' style={{ maxWidth: '100%', height: 'auto' }}>
                    <label><h3>Enter Email</h3></label>
                    <textarea placeholder='email here'className='teat_area' ></textarea>
                    <label><h3>Enter Full Name</h3></label>
                    <textarea placeholder='full name here' className='teat_area'  ></textarea>
                    <button className='button' style={{ maxWidth: '100%', height: 'auto' }} ><h1>Subscribe</h1></button>
                </form>
            </Grid>
        </div>
    )
}

export default Reg_form
