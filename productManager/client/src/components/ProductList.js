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
    <div  className="d-flex flex-column">
        {products.map((product, idx)=>{
          console.log(product)
            return (
              <div className="m-2" key={idx}>  
                <Link className="ms-2" to={`/product/${product._id}/`} >{product.title}</Link>
                <Link className="ms-2"to={`/product/${product._id}/edit`}>Edit</Link>
                <button className="ms-2" onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
              </div>
            )
        })}
    </div>
)
}
export default ProductList;

