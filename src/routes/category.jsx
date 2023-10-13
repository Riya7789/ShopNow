import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Category() {
    const { categoryID } = useParams()
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryID}`)
            .then((res) => res.json())
            .then((data) => {
                setCategory(data.products)
                console.log(data.products)
            })
    }, [categoryID])

    const categoryCards = category.map((product) => (
        <div key={product.id} style={{ width: '30%', padding: '10px' }}>
            <Card sx={{ maxWidth: 350, height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                </Typography>
                <CardActionArea>
                    <img
                        src={product.thumbnail}
                        alt="product"
                        style={{
                            height: '8rem',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        />
                        {/* {product.description} */}
                    <CardContent></CardContent>
                    <Link to={`/product/${product.id}`}>See More</Link>
                </CardActionArea>
            </Card>
        </div>
    ))

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                <div className="title">{categoryID}</div>
                <br />
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {categoryCards}
            </div>
        </>
    )
}
