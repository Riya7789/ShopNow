import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Button} from '@mui/material';
// import Counter from './Counter.jsx';

// import cartSlice from './cartSlice.jsx';
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../reducers/cartSlice';
export default function Products() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const carts = useSelector ((state) => state.cart.carts);


    // const [carts, setCarts] = useState([]);
    const  handleClick  = (product) => {
      dispatch(addToCart(product));
      console.log("product add to cart successfully!");
      // setCarts([...carts, product.title]);
    }


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
            <div className='btn'>
            <Link to={`/product/${product.id}`}>See More</Link>
            <Button onClick={() => handleClick(product)}>Add to Cart</Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ));

  return (
    <>
        {/* <p><Counter/></p> */}
      <Typography variant="h4" component="h1" gutterBottom>
        Products
        <br/>
 Available Product: {carts.length}
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productCards}
      </div>
    </>
  );
}





