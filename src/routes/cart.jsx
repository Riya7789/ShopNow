import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cart = () => {
    const{cartId} = useParams();
    const [cart, setCart] = useState({});


  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, [cartId]);
  
  const cartDetail = cart.products && cart.products.map ((carts) =>
    <div>
        <br/>
        <li>{carts.title}</li>
        <li>{carts.price}</li>
        <li>{carts.quantity}</li>
        <li>{carts.total}</li>
    </div>
  ); 

  return(
    <div className="cartDetails">
        <p>ID: {cartId}</p>
        <p>Total: {cart.total}</p>
        <p>TotalQuantity:{cart.totalQuantity}  </p>
      <p> TotalProducts: {cart.totalProducts} </p>
      <p> UserId: {cart.userId} </p>
      <h2>Details</h2>
      <p>{cartDetail}</p>
    </div>
  )
}

export default Cart;