import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to='/' className='color'>ShopNow</Link> 
          </Typography>
          <div className='btn'> 
             <Link to='/login' >Login</Link>
             <Link to='/signup' >SignUp</Link>           
          </div>
        </Toolbar>
      </AppBar>
  );
}
