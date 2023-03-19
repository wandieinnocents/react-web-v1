import * as React from 'react';
import  { useState, useEffect}  from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Parallax } from "react-parallax";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useParams } from "react-router-dom";

// card
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





// parallax image

const image3 = "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png";
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



export default function UserDetails()  {



    // get details of single id 
    const { id  } = useParams();
    // methods to pick data
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setUser(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    // error handling
    if (error) {
        return <div><center>Error: {error.message}</center></div>;
    } else if (!isLoaded) {
        return <div><center>Loading...</center></div>;
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
          <Parallax bgImage={image3} blur={{ min: -1, max: 3 }} strength={-100}>
            <div style={{ height: 400 }}>
              <div style={parallaxText} >
                <h1 style={{ color: 'black', fontSize: 30 }}>PRODUCT DETAILS</h1>
                <p style={{ color: 'black', fontSize: 20, marginTop: -40 }}>
                 
                  <br></br>Check Our Products</p>
               
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
        <Grid item xs={12} sm={1} md={1} >
        </Grid>
        {/* Column1 */}
        <Grid item xs={12} sm={4} md={4} >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                W
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={user.lastName}
            subheader={user.email}
          />
          <CardMedia
            component="img"
            height="194"
            image={user.image }
            alt="Paella dish"
          />
          <CardContent>
         
          </CardContent>
          
        </Card>
        </Grid>
        {/* Column2 */}
       
        {/* Column3 */}
        <Grid item xs={12} sm={6} md={6}>
        <h3>{user.firstName} {user.lastName}</h3>
        <h1>{user.email}</h1>
        <p> Age : {user.age} </p> 
        <p> Gender : {user.gender} </p> 
        <p> Age : {user.age} </p> 
        <p>{user.company.address.address }</p>
        <p>{user.company.department }</p>



        </Grid>
        {/* right space */}
        <Grid item xs={12} sm={1} md={1} >
        </Grid>
      </Grid><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* END OF GRID ROW */}

      














{/* FOOTER */}


{/* END OF FOOTER */}



    </Box>
    // End of // General Box Layout
  );
}
}






// create the Home stylesheet here
