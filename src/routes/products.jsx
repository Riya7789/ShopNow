import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
export default function Products() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data,"products");
      });
  },[]);

  const productCards = products.map((product) => (
    // <div key={product.id} style={{ display: 'flex', margin: '10px' }}>
      <div key={product.id} style={{ width: '30%', padding: '10px' }} >
      <Card sx={{ maxWidth: 350, height:'100%' }}>
        <CardActionArea>
          <img src={product.thumbnail} alt="product" style={{ height:'8rem'  ,width: '100%', objectFit: 'cover' }} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Link to={`/product/${product.id}`}>See More</Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ));

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productCards}
      </div>
    </>
  );
}





