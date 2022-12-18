import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
        
        {/* Column1 */}
        <Grid item  xs={12} sm={4} md={4} >
          <Item style={{ backgroundColor:'green', padding:6}}>
        
          <h1>hellohelhellodie</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          </Item>
          
        </Grid>

        {/* Column2 */}
        <Grid item xs={12}  sm={4} md={4}>
        <Item>
          <h1>hellow</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          </Item>
        </Grid>

         {/* Column3 */}
         <Grid item xs={12}  sm={4} md={4}>
        <Item>
          <h1>hellow</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          <h1>hellow</h1>
          </Item>
        </Grid>
       
      </Grid>

      
    </Box>
  );
}