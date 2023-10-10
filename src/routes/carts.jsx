import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeFromCart } from './cartSlice';

export default function Carts() {
    // const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    const carts = useSelector((state) => state.cart.carts);
   
    const onClickRemove = (cartId) => {
      dispatch(removeFromCart(cartId));
      console.log("Remove Successfully");
    };

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/carts/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart(data.carts);
  //       console.log(data,"carts");
  //     });
  // }, []);



  const id = carts.map((cart) => 
  <div key={cart.id} style={{ width: '30%', padding: '10px' }} >
    <Card sx={{ maxWidth: 350, height:'100%' }}>
    <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {/* <p>{carts.id}</p> */}
            <img 
              src={cart.thumbnail} 
              alt="product" 
              style={{height:'250' ,width:'100%', objectFit:"cover"}}
            />  

            </Typography>
              {/* <Link to = {`/cart/${cart.id}`}> See More</Link> */}
              <button onClick={() => {
                onClickRemove(cart);
              }}>
                Remove Cart</button>
          </CardContent>
        </CardActionArea>
    </Card>
    </div>
  );
  
  return(
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Carts
      </Typography>
        <p>Total number of carts added:{carts.length}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {id}
      </div>
    </>
  )
}