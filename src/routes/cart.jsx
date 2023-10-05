import { useEffect, useState } from "react";

export default function Cart(){
    const[cart , setCart] = useState([]);
    const[cartId, setCartId] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/carts/${cartId}`)
        .then(res => res.json())
        .then((data) => {
            setCart(data);
        });
    },[cartId]);

    const handleBtnClick = (id) => {
        setCartId(id);
      };


      console.log(cart, "cart");
      return(
        <>
            <p>Id:{cart.id}</p>
            <p>Total:{cart.total}</p>
            <p>Total Quantity:{cart.totalQuantity}</p>
            <p>Total Products:{cart.totalProducts}</p>

        <button onClick={handleBtnClick(1)} >See More</button>
        </>

      );
}