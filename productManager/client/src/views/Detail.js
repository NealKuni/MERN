import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then((res) => {
              console.log('inside delete method:' + (productId));
              navigate("/");
            })
            .catch((err) => {
              console.log(err)
              console.log('Error occured while during delete request')
            })
      };

    return (
        <div>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
export default Detail;

