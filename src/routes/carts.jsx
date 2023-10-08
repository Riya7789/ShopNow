import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carts() {
    const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.carts);
        console.log(data,"carts");
      });
  }, []);

  const id = cart.map((carts) => 
  <div key={carts.id} style={{ width: '30%', padding: '10px' }} >
    <Card sx={{ maxWidth: 350, height:'100%' }}>
    <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {carts.id}
            </Typography>
              <Link to = {`/cart/${carts.id}`}> See More</Link>
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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {id}
      </div>
    </>
  )
}