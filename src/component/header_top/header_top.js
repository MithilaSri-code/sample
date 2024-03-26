import React from 'react'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";

const header_top = () => {
  return (
    <div>
      <Box>
        <Container maxWidth="100vw">
          <Grid container >
            <Grid
              item
              xs={12}
              md={4}
              textAlign={{ xs: "center", sm: "left" }}
              className="CurrentDateTime"
            >
              <h1>Mithila</h1>



            </Grid>

            </Grid>




        </Container>

      </Box>
    </div>
  )
}

export default header_top
