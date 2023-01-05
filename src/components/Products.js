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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// card
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// expand more
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
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
export default function Products() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
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
                <h1 style={{ color: 'black', fontSize: 30 }}>PRODUCTS</h1>
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

          <h1>WHAT WE DO ?</h1>
          <Typography >
            Truncation should be conditionally applicable on this long line of text
            as this is a much longer line than what the container can support.
            
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
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://abdelghafour122.github.io/ecommerce-product-page/static/media/image-product-1.520cc50bd13955f55cb2.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
          
          
        </CardContent>
      </Collapse>
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
            <h1>MOBILE APPS</h1>
            
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
            <h1>UX DESIGN</h1>
           
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
