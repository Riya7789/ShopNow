import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carts() {
    const [cart, setCart] = useState([]);

    const [cartId, setCartId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, [cartId]);
  
  return(
    <>
      <h2>Carts</h2>
      <p> ID: {cart.id}</p>
      <p>TotalQuantity:{cart.totalQuantity}  </p>
      <p> TotalProducts: {cart.totalProducts} </p>
      <h2> Total: {cart.total} </h2>
      <Link to = {`/carts/${cart.id}`}> See More</Link>
    </>
  )
}