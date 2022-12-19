import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* Grid */}
      <Grid
        container
        direction="row"
        spacing={2}
      >


        {/* banner section */}
        <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '', marginBottom: 10 }} >
         

            <img
              src={require('../assets/nature.jpeg')}
              alt="Trees"
              width="100%"

            />

         

        </Grid>


      </Grid>

      {/* Grid Row */}
      <Grid
        container
        direction="row"
        spacing={2}

      >
        {/* left space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>

        {/* Column1 */}
        <Grid item xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor: '', padding: 6 }}>

            {/* icon */}
            <img
              src={require('../assets/mission.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}

            />

            <h1>MISSION</h1>
            <Typography >
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can support.
              Truncation should be conditionally applicable on this long line of text
             
            </Typography>

          </Item>

        </Grid>

        {/* Column2 */}
        <Grid item xs={12} sm={3} md={3}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/vision.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}

            />
            <h1>VISION</h1>
            <Typography >
            Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can support.
              Truncation should be conditionally applicable on this long line of text
            </Typography>


          </Item>
        </Grid>

        {/* Column3 */}
        <Grid item xs={12} sm={3} md={3}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>

            {/* icon */}
            <img
              src={require('../assets/values.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}

            />
            <h1>CORE VALUES</h1>
            <Typography >
            Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can support.
              Truncation should be conditionally applicable on this long line of text
            </Typography>

          </Item>
        </Grid>

         {/* right space */}
         <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>

      </Grid>


    </Box>
  );
}