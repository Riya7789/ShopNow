import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout } from '../reducers/loginSlice'; 
import { useEffect } from 'react';

export default function Header() {

  const userInfo = useSelector((state) => state.login);
  const dispatch = useDispatch();

//app reload
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const gender = localStorage.getItem("gender");
    const image = localStorage.getItem("image");
    if (token) {
      dispatch(login({
        token,id,email,username,firstName,lastName,gender,image
      }));
    }else{
      dispatch(logout());
      localStorage.clear();
    }
  },[dispatch]);

  const handleLogout = () => {
    dispatch(logout());

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
              <Link to= '/profile'>

              <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                Profile
              </Button>
              </Link>
                <h3>Welcome, {userInfo.email}</h3>
                <Link to= '/'>
           <Button onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Log Out
            </Button>
                </Link>   
              </>
            ):(<><Link to = "/signup">Signup</Link>
            <Link to = "/login">Login</Link></>)
            }
          </div>
        </Toolbar>
      </AppBar>
  );
}
