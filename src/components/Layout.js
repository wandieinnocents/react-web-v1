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
        <Grid item  xs={12} sm={4} md={4} >
          <Item style={{ backgroundColor:'', padding:6 , textAlign: 'center'}}>
          <img
              src={require('../assets/log.jpeg')}
              alt="Trees"
              width="70%"
              height="60"

            />
         
          </Item>
          
        </Grid>
       
       {/* navigation */}
        <Grid item  xs={12} sm={8} md={8} >
          <Item style={{ backgroundColor:''}}>
        
                <div >
                    <nav >
                      <ul className="listHorizontal">
                        <li  >
                          <Link to="/"> HOME |  </Link>
                        </li>
                        <li>
                          <Link to="/about"> ABOUT  |  </Link>
                        </li>
                        <li>
                          <Link to="/services"> SERVICES | </Link>
                        </li>

                        <li>
                          <Link to="/blogs"> TEAM  |</Link>
                        </li>

                        <li  >
                          <Link to="/"> BLOGS |  </Link>
                        </li>
                      
                        <li>
                          <Link to="/contact"> CONTACT |  </Link>
                        </li>

                        <li>
                          <Link to="/contact"> PRODUCTS </Link>
                        </li>

                      </ul>
                    </nav>

                 
                </div>
                
          </Item>
          
        </Grid>

        {/* socias */}
        {/* logo */}
        {/* <Grid item  xs={12} sm={3} md={3} >
          <Item style={{ backgroundColor:'gray', padding:6}}>
        
          <p>socials</p>
         
          </Item>
          
        </Grid> */}



        
      </Grid>
      {/* add the outlet outside any columns it shoud be isolated */}
      <Outlet />

  </Box>


    
  );
}