import * as React from 'react';
import { useState, useEffect }  from 'react';

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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


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


// Fetch data from api 

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);

            


// End of fetch data from api

export default function Users() {


    // second api
    // fetch('https://dummyjson.com/users')
    // .then(res => res.json())
    // .then( console.log);


    // import data from api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data.users);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

    //   for error handling
    if (error) {
        return <div><center>Error: {error.message}</center></div>;
    } else if (!isLoaded) {
        return <div> <center>Loading...</center></div>;
    } else {

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
                <h1 style={{ color: 'black', fontSize: 30 }}>USERS</h1>
                <p style={{ color: 'black', fontSize: 20, marginTop: -40 }}>
                 
                  <br></br>Check Our Services</p>
               
              </div>
            </div>
          </Parallax>
        </Grid>
      </Grid>


   


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

        {/* start of user fetching */}

        {users.map(user => (

        <Grid item xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor: '', padding: 6 }}>
            {/* icon */}
            <img
              src={user.image}
              alt="Trees"
              width="20%"
              height="20%"
              style={{ marginTop: 30 }}
            />
            <h1>{user.firstName} {user.lastName} </h1>
            <Typography >
              {user.email} 
              
            </Typography>
           
            <Link to={`/usersdetails/${user.id}`}>
            <Button href="#" style={{  marginTop: 20,marginBottom:20 }} variant="contained" color="primary" size="medium">USER DETAILS</Button>
            </Link>

          </Item>
        </Grid>

        ))}

        {/* End of user fetching */}


      



        {/* right space */}
        <Grid item xs={12} sm={1.5} md={1.5} >
        </Grid>
      </Grid>
      {/* END OF GRID ROW */}

      



      {/* END OF GRID ROW */}
















{/* FOOTER */}


{/* END OF FOOTER */}



    </Box>
    // End of // General Box Layout
  );
}
}





