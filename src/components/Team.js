import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BackgroundSlideshow from 'react-background-slideshow'
import { Hidden } from '@mui/material';


import image5 from '../assets/nature.jpeg'
import x from '../assets/x.jpeg'
import y from '../assets/y.jpeg'
import z from '../assets/z.jpeg'
import { ImportantDevices } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// parallax image
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const parallaxText = {
  // background: "white",
  padding: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  width: "100%",
  transform: "translate(-50%,-50%)"
};
// end of parallax
export default function Team() {
  return (

    // General Box Layout
    <Box sx={{ flexGrow: 1 }}>
      {/* Grid */}
      {/* parallax section */}
      <Grid
        container
        direction="row"
        spacing={2}
      >
        {/* banner section */}
        <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '', marginBottom: 10 }} >
          <Parallax bgImage={image3} blur={{ min: -1, max: 6 }} strength={-100}>
            <div style={{ height: 300 }}>
              <div style={parallaxText} >
                <h1 style={{ color: 'black', fontSize: 30 }}>OUR TEAM</h1>
                <p style={{ color: 'black', fontSize: 20, marginTop: -40 }}>
                 
                  <br></br>Check out our Team</p>
               
              </div>
            </div>
          </Parallax>
        </Grid>
      </Grid>


   

      {/* Grid Row */}
      <Grid
        container
        direction="row"
        spacing={2}
      // style={{top:530,zIndex:1, position:'absolute'}}

      >

        {/* Column1 */}
        <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '', textAlign: 'center', padding: 6, marginBottom: 20 }}>

          {/* icon */}

          <h1>OUR SUPPORT TEAM</h1>
          <Typography >
           We have a support team , that is reliable to handle your queries.
           
          </Typography>

        </Grid>
        {/* Column2 */}



      </Grid>
      {/* End of Grid Row */}







      {/* GRID ROW */}
      <Grid
        container
        direction="row"
        spacing={2}
      // style={{ marginTop:250 }}

      // style={{marginTop:250, position:'relative'}}
      >
        {/* left space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}


            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >

              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={3} md={3}>
        <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* Column3 */}
        <Grid item xs={12} sm={3} md={3}>
        <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
      {/* END OF GRID ROW */}



      {/* GRID ROW */}
      <Grid
        container
        direction="row"
        spacing={2}
      // style={{ marginTop:250 }}

      // style={{marginTop:250, position:'relative'}}
      >
        {/* left space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={3} md={3}>
        <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* Column3 */}
        <Grid item xs={12} sm={3} md={3}>
        <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={require('../assets/team/wandie.png')}
              alt="Trees"
              width="100%"
              height="70%"
              style={{ marginTop: 30 }}
            />

            {/* social icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              
              <Item>
              <img
              src={require('../assets/socials/facebook.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/twitter.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
              src={require('../assets/socials/instagram.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>

              <Item>
              <img
             src={require('../assets/socials/youtube.png')}
              alt="Trees"
              width="40%"
              height="40%"
              // style={{ marginTop: 10 }}
            />
              </Item>
             
            </Stack>


            <h2 style={{ color:'black' }}>WANDIE INNOCENT </h2>
            <h4 style={{ marginTop:-18,color:'black' }}>Software Engineer / UX Designer </h4>
            
            <Typography style={{ marginTop:-18 }}>
              Truncation should be conditionally applicable on this long line of text
              as this is a much longer line than what the container can .
             
            </Typography>

          </Item>
        </Grid>
        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
      {/* END OF GRID ROW */}

























{/* FOOTER */}

{/* parallax section */}
<Grid
        container
        direction="row"
        spacing={2}
      >
        {/* banner section */}
        <Grid item xs={12} sm={12} md={12} 
        style={{ 
                backgroundColor: 'black', 
                marginBottom: 10 ,
                marginTop:40,
                // borderTopLeftRadius:200 ,
                // borderTopRightRadius:200


                 }} >

          <Parallax  blur={{ min: -1, max: 8 }}>
          {/* <Parallax bgImage={image3} blur={{ min: -1, max: 8 }}> */}
            <div style={{ height: 500 }}>
              <div style={parallaxText} >
                <h1 style={{ color: 'white' }}>LOOKING FOR BETTER  TO PLASTICS ?</h1>
                <p style={{ color: 'white', marginTop: -10 }}>We have a team ofruWe have a team of resilient designers to take u thruWe have
                  a team of resilient designers to take u thru</p>
                <p style={{ color: 'white', marginTop: -10 }}>We have a team ofruWe have a team of resilient designers to take u thruWe have </p>
                {/* button */}
                <Button variant="contained" color="primary" size="large">JOIN TODAY</Button>
                <Button variant="contained" color="success" size="large" style={{ marginLeft: 20 }}>TALK TO US</Button>
              </div>
            </div>
          </Parallax>
        </Grid>
      </Grid>

      {/* End parallax section */}


{/* END OF FOOTER */}



    </Box>
    // End of // General Box Layout
  );
}



// create the Home stylesheet here
