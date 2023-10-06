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
    <div style={{display: 'flex'}}> 
    <li>{carts.id}</li> &emsp;
    <Link to = {`/cart/${carts.id}`}> See More</Link>
    </div>

  );
  
  return(
    <>
      <h2>Carts</h2>
      <p>{id}</p>
    </>
  )
}