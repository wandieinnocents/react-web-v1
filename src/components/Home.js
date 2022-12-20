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

import image5 from '../assets/nature.jpeg'
import x from '../assets/x.jpeg'
import y from '../assets/y.jpeg'
import z from '../assets/z.jpeg'




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
export default function Home() {
  return (
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
          <Parallax bgImage={image4} blur={{ min: -1, max: 6 }} strength={-100}>
            <div style={{ height: 500 }}>
              <div style={parallaxText} >
                <h1 style={{ color: 'black',fontSize:80 }}>MULTIPLE INDUSTRIES</h1>
                <p style={{ color: 'black',fontSize:30, marginTop: -50 }}>
                  We have a team ofruWe have a team of resilient designers to take
                  <br></br> u thruWe havea team of resilient designers to take u thru
                  <br></br>team of resilient designers to take u thru</p>
                {/* button */}
                <Button variant="contained" color="primary" size="large">JOIN TODAY</Button>
                <Button variant="contained" color="success" size="large" style={{ marginLeft: 20 }}>TALK TO US</Button>
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
        <Grid item xs={12} sm={4.5} md={4.5} >
          <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <h1 style={{ backgroundColor: '', textAlign: 'left' }}>Know</h1>
            <h1 style={{ backgroundColor: '', textAlign: 'left' }}>OUR STORY ?</h1>
            <Typography style={{ backgroundColor: '', textAlign: 'left' }}>
              Since 1991, Multiple Industries Limited has been leading the way in the
              manufacturing and trading of Domestic and Industrial Building Materials in Uganda.
              <br></br><br></br>
              Right from reinforcing bars to concrete products, from indoor plumbing to outdoor plumbing, from rainwater gutters to strong dependable plastic pipes, Multiple Industries is in the business of producing a multiplicity
              of building materials that add value to the lives of our customers.
              <br></br><br></br>
              Multiple Industries is committed to ensure that quality and
              services are maintained in all aspects of its operations.
            </Typography>
          </Item>
        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={4.5} md={4.5} style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
          {/* icon */}
          <img
            src={require('../assets/contentimg.jpeg')}
            alt="Trees"
            width="90%"
            height="90%"
            style={{ marginTop: 30, alignContent: 'right', alignItems: 'right', float: 'right' }}
          />
        </Grid>
        {/* Column3 */}
        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
      {/* parallax section */}
      <Grid
        container
        direction="row"
        spacing={2}
      >
        {/* banner section */}
        <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '', marginBottom: 10 }} >
          <Parallax bgImage={image3} blur={{ min: -1, max: 8 }}>
            <div style={{ height: 500 }}>
              <div style={parallaxText} >
                <h1 style={{ color: 'black' }}>LOOKING FOR BETTER SOLUTIONS TO PLASTICS ?</h1>
                <p style={{ color: 'black', marginTop: -10 }}>We have a team ofruWe have a team of resilient designers to take u thruWe have
                  a team of resilient designers to take u thru</p>
                <p style={{ color: 'black', marginTop: -10 }}>We have a team ofruWe have a team of resilient designers to take u thruWe have </p>
                {/* button */}
                <Button variant="contained" color="primary" size="large">JOIN TODAY</Button>
                <Button variant="contained" color="success" size="large" style={{ marginLeft: 20 }}>TALK TO US</Button>
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
      >
        {/* left space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={4.5} md={4.5} >
          <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <h1 style={{ backgroundColor: '', textAlign: 'left' }}>Know</h1>
            <h1 style={{ backgroundColor: '', textAlign: 'left' }}>OUR STORY ?</h1>
            <Typography style={{ backgroundColor: '', textAlign: 'left' }}>
              Since 1991, Multiple Industries Limited has been leading the way in the
              manufacturing and trading of Domestic and Industrial Building Materials in Uganda.
              <br></br><br></br>
              Right from reinforcing bars to concrete products, from indoor plumbing to outdoor plumbing, from rainwater gutters to strong dependable plastic pipes, Multiple Industries is in the business of producing a multiplicity
              of building materials that add value to the lives of our customers.
              <br></br><br></br>
              Multiple Industries is committed to ensure that quality and
              services are maintained in all aspects of its operations.
            </Typography>
          </Item>
        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={4.5} md={4.5} style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
          {/* icon */}
          <img
            src={require('../assets/contentimg.jpeg')}
            alt="Trees"
            width="90%"
            height="90%"
            style={{ marginTop: 30, alignContent: 'right', alignItems: 'right', float: 'right' }}
          />
        </Grid>
        {/* Column3 */}
        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
    </Box>
  );
}



// create the Home stylesheet here
