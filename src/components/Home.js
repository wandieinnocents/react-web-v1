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
        
       
        <Grid item  xs={12} sm={12} md={12} >
          <Item style={{ backgroundColor:'brown',marginBottom:10}}>
        
          <img
            src={require('../assets/nature.jpeg')}
            alt="Trees"
            width="100%"
           
          />

          </Item>
          
        </Grid>

        
      </Grid>

      {/* Grid Row */}
      <Grid 
      container 
      direction="row"
      spacing={2}
      >
        
        {/* Column1 */}
        <Grid item  xs={12} sm={4} md={4} >
          <Item style={{ backgroundColor:'green', padding:6}}>
        
          <h1>MISSION</h1>
        <Typography >
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
        </Typography>

          </Item>
          
        </Grid>

        {/* Column2 */}
        <Grid item xs={12}  sm={4} md={4}>
        <Item style={{ backgroundColor:'brown', padding:6,marginBottom:10}}>
          <h1>MISSION</h1>
          <Typography >
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
        </Typography>
        
          
          </Item>
        </Grid>

         {/* Column3 */}
         <Grid item xs={12}  sm={4} md={4}>
        <Item style={{ backgroundColor:'brown', padding:6,marginBottom:10}}>
        <h1>MISSION</h1>
        <Typography >
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
          as this is a much longer line than what the container can support.
          Truncation should be conditionally applicable on this long line of text
          as this is a much longer line than what the container can support.
        </Typography>

          </Item>
        </Grid>
       
      </Grid>

      
    </Box>
  );
}