import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = (props) => {
    console.log(props)
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            
            .then((res) => {
                console.log(res)
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default Detail;

