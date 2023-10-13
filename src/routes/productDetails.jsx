import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                console.log(data)
            })
    }, [productId])
    return (
        <div className="productDetails">
            <p>ID: {productId}</p>
            <h2> Title: {product.title} </h2>
            <p> Description: {product.description} </p>
            <p> Price: {product.price} </p>
            <p>
                <img src={product.thumbnail} alt={product.title} />
            </p>
        </div>
    )
}
export default Product
