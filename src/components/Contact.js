import React, { useEffect, useState } from 'react';


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
import SendIcon from '@mui/icons-material/Send';


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
// inputs
import TextField from '@mui/material/TextField';








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





export default function Contact() {
  // states
 const [fullname, setFullName] = useState('');
 const [email, setEmail] = useState('');
 const [subject, setSubject] = useState('');
 const [phone, setPhone] = useState('');
 const [feedback, setFeeback] = useState('');

//  error states
const [fullnameError, setFullNameError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [subjectError, setSubjectError] = useState(false);
const [phoneError, setPhoneError] = useState('');
const [feedbackError, setFeebackError] = useState(false);

//  handle subnmit
const handleSubmit = (e) => {
  // prevent from submitting empty field
  e.preventDefault()

  // set error states
  setFullNameError(false)
  setEmailError(false)
  setSubjectError(false)
  setPhoneError(false)
  setFeebackError(false)

  // check if error exists
  if(fullname == ''){
    setFullNameError(true)
  }
  if(email == ''){
    setEmailError(true)
  }
  if(subject == ''){
    setSubjectError(true)
  }
  if(phone == ''){
    setPhoneError(true)
  }
  if(feedback == ''){
    setFeebackError(true)
  }


  // if data has been inserted
  if(fullname && email && subject && phone && feedback ){
    console.log(fullname,email,subject,phone,feedback);
  }
}







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
                <h1 style={{ color: 'black', fontSize: 30 }}>CONTACT US</h1>
                <p style={{ color: 'black', fontSize: 20, marginTop: -40 }}>
                 
                  <br></br>talk to us</p>
               
              </div>
            </div>
          </Parallax>
        </Grid>
      </Grid>


    {/* GRID ROW */}



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

          <h1>TALK TO US</h1>
          <Typography >
           We are responsive to messages
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
              src={require('../assets/contact/phone-call.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <h4>CONTACT</h4>
            <Typography >
              +256706382817
              
            </Typography>
          </Item>
        </Grid>
        {/* Column2 */}
        <Grid item xs={12} sm={3} md={3}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/contact/gmail.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <h4>EMAIL</h4>
            <Typography >
             wandieinnocent2@gmail.com
            </Typography>
          </Item>
        </Grid>
        {/* Column3 */}
        <Grid item xs={12} sm={3} md={3}>
          <Item style={{ backgroundColor: '', padding: 6, marginBottom: 10 }}>
            {/* icon */}
            <img
              src={require('../assets/contact/location.png')}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <h4>ADDRESS</h4>
            <Typography >
              Uganda,Kampala.
            </Typography>
          </Item>
        </Grid>
        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
      {/* END OF GRID ROW */}









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
        <Grid item xs={12} sm={4.5} md={4.5} style={{ backgroundColor: '', padding: 20 }} >

          {/* icon */}
          <h2 style={{ backgroundColor: '', fontSize: 50, color: 'black', textAlign: 'left', fontFamily: "Playfair Display" }}>
            LEAVE A MESSAGE ! </h2>



            {/* first form */}

            <form noValidate autoComplete="off"  >

            {/* fullname */}
            <TextField 
            onChange={ (e) => setFullName(e.target.value) }
            id="outlined-basic" 
            label="Full Name" 
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={fullnameError}
            style={{  marginTop:20,marginBottom:20,display:'block'  }}
            />

           

            {/* email */}
            <TextField 
            onChange={ (e) => setEmail(e.target.value) }
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={emailError}
            style={{  marginTop:20,marginBottom:20,display:'block'  }}
            />

             {/* phone */}
             <TextField 
             onChange={ (e) => setPhone(e.target.value) }
            id="outlined-basic" 
            label="Phone" 
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={phoneError}
            style={{  marginTop:20,marginBottom:20,display:'block'  }}
            />

             {/* subject */}
             <TextField 
             onChange={ (e) => setSubject(e.target.value) }
            id="outlined-basic" 
            label="Subject" 
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={subjectError}
            style={{  marginTop:20,marginBottom:20,display:'block'  }}
            />

            {/* message */}

            <TextField 
            onChange={ (e) => setFeeback(e.target.value) }
            id="outlined-multiline-static" 
            label="Message" 
            variant="outlined"
            color="secondary"
            multiline
              rows={6}
            fullWidth
            required
            error={feedbackError}
            style={{  marginTop:20, marginBottom:20,display:'block' }}
            />

             {/* button */}
             <Stack 
              direction="row"
              alignContent="center"  
              alignItems="center"
              justifyContent="center"
              spacing={2}  
              >
                
                <Button 
                onClick={handleSubmit}
                // onClick = { () => console.log("bUTTON CLICKED")}
                style={{ marginTop:10 , width:'100%' }} 
                variant="contained"  
                color="secondary" 
                endIcon={<SendIcon />}>
                Submit
                </Button>
              </Stack>



           

            

         
            
            </form>

            

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

