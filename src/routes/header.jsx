import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout } from './loginSlice'; 
import { useEffect } from 'react';

export default function Header() {

  const userInfo = useSelector((state) => state.login);

  const dispatch = useDispatch();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login());
    }else{
      dispatch(logout());
    }
  },[dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to='/' className='color'>ShopNow</Link> 
          </Typography>
          <div className='btn'> 
          {
            userInfo.isLoggedIn ? (
              <>
                {/* Hello, {userInfo.username} */}
            <Button onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Log Out
            </Button>
              </>
            ):(<><Link to = "/signup">Signup</Link>
            <Link to = "/login">Login</Link></>)
            }
             {/* <Link to='/login' >Login</Link>
             <Link to='/signup' >SignUp</Link>            */}
          </div>
        </Toolbar>
      </AppBar>
  );
}
