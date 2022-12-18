import { Outlet, Link } from "react-router-dom";
import LayoutStyles from '../components/stylesheets/LayoutStyles.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// styles
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Layout() {
  return (


    // nav
    <Box sx={{ flexGrow: 1 }}>

      {/* Grid */}
      <Grid 
      container 
      direction="row"
      spacing={2}
      >
        
        {/* logo */}
        <Grid item  xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor:'green', padding:6}}>
        
          <p>logo</p>
         
          </Item>
          
        </Grid>
       
       {/* navigation */}
        <Grid item  xs={12} sm={6} md={6} >
          <Item style={{ backgroundColor:'yellow', padding:6}}>
        
                <div className="center">
                    <nav>
                      <ul className="listHorizontal">
                        <li  >
                          <Link to="/"> Home |  </Link>
                        </li>
                        <li>
                          <Link to="/blogs"> Blogs  |</Link>
                        </li>
                        <li>
                          <Link to="/contact"> Contact </Link>
                        </li>
                      </ul>
                    </nav>

                 
                </div>
                
          </Item>
          
        </Grid>

        {/* socias */}
        {/* logo */}
        <Grid item  xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor:'gray', padding:6}}>
        
          <p>socials</p>
         
          </Item>
          
        </Grid>



        
      </Grid>
      {/* add the outlet outside any columns it shoud be isolated */}
      <Outlet />

  </Box>


    
  );
}