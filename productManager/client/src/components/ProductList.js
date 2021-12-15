import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = (props) => {
  const{ removeFromDom, products } = props;
  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/product/' + productId)
        .then((res) => {
          console.log('inside delete method:' + (productId))
          removeFromDom(productId)
          
        })
        .catch((err) => {
          console.log(err)
          console.log('Error occured while during delete request')
        })
  };

  return (
    <div>
        {products.map((product, idx)=>{
          console.log(product)
            return (
              <div key={idx}>  
                <Link to={`/product/${product._id}/`} >{product.title}</Link>
                <Link to={`/product/${product._id}/edit`}>Edit</Link>
                <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
              </div>
            )
        })}
    </div>
)
}
export default ProductList;

