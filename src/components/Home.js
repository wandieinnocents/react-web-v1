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
import { ImportantDevices } from '@mui/icons-material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




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
                <h1 style={{ color: 'black', fontSize: 80 }}>MULTIPLE INDUSTRIES</h1>
                <p style={{ color: 'black', fontSize: 30, marginTop: -50 }}>
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


      {/* Featured icons */}
      {/* Grid Row */}
      <Grid
        container
        direction="row"
        spacing={2}
        // style={{top:530,zIndex:1, position:'absolute'}}
        style={{ backgroundColor: '', padding: 6, marginBottom: 10, marginTop: 10 }}

      >
        {/* left space */}
        <Grid item xs={12} sm={2} md={2} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={2} md={2}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/values.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <p>Instant </p>

          </Item>
        </Grid>


        {/* Column2 */}
        <Grid item xs={12} sm={2} md={2}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/values.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <p>Instant </p>

          </Item>
        </Grid>


        {/* Column3 */}
        <Grid item xs={12} sm={2} md={2}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/values.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <p>Instant </p>

          </Item>
        </Grid>

        {/* Column */}

        <Grid item xs={12} sm={2} md={2}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/values.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <p>Instant </p>

          </Item>
        </Grid>
        {/* right space */}
        <Grid item xs={12} sm={2} md={2} >
        </Grid>
      </Grid>
      {/* Grid Row */}

      {/* End of featured icons */}


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

          <h1>WHAT WE DO ?</h1>
          <Typography >
            Truncation should be conditionally applicable on this long line of text
            as this is a much longer line than what the container can support.
            <br></br>
            Truncation should be conditionals long line of text
            as this is a much longer line than what the container can support.
            <br></br>
            Truncation should be conditionally applicable on this long line of text
          </Typography>

        </Grid>
        {/* Column2 */}



      </Grid>
      {/* Grid Row */}




      {/* Grid Row */}
      <Grid
        container
        direction="row"
        spacing={2}
      // style={{top:530,zIndex:1, position:'absolute'}}

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
        <Grid item xs={12} sm={4.5} md={4.5} style={{ backgroundColor: '', padding: 6 }} >

          {/* icon */}
          <h2 style={{ backgroundColor: '', fontSize: 50, color: 'black', textAlign: 'left', fontFamily: "Playfair Display" }}>
            Become a monthly giver and save a child’s life today</h2>
          <p style={{ backgroundColor: '', textAlign: 'left' }}>
            Since 1991, Multiple Industries Limited has been leading the way in the
            manufacturing and trading of Domestic and Industrial Building Materials in Uganda.
            <br></br><br></br>
            Right from reinforcing bars to concrete products, from indoor plumbing to outdoor plumbing, from rainwater gutters to strong dependable plastic pipes, Multiple Industries is in the business of producing a multiplicity
            of building materials that add value to the lives of our customers.
            <br></br><br></br>
            Multiple Industries is committed to ensure that quality and
            services are maintained in all aspects of its operations.
          </p>

          {/* buttons */}
          <Button variant="contained" color="primary" size="large">JOIN TODAY</Button>
          <Button variant="contained" color="success" size="large" style={{ marginLeft: 20 }}>TALK TO US</Button>

        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={4.5} md={4.5} style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
          {/* icon */}
          <img
            src={require('../assets/child.png')}
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






      {/* Grid Row */}
      <Grid
        container
        direction="row"
        spacing={2}
      // style={{top:530,zIndex:1, position:'absolute'}}

      >
        {/* left space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={3} md={3} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
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



    </Box>
  );
}



// create the Home stylesheet here
