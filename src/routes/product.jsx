import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((data) => {
        setProducts(data.products);
    });
}, []);


const title = products.map ((product) => 
    <div style ={{display: 'flex'}}>
        <li>{product.title}</li>
        <Link to = {`/product/${product.id}`} >See More</Link>
    </div>
); 


    return (
        <>
            <h1>Products</h1>
            <p>{title}</p>
        </>
    );
}