import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = (props) => {
  return (
    <div>
        {props.product.map((product, idx)=>{
          console.log(product)
            return (
            <div key={idx}>  
              <Link to={`/product/${product._id}/`} >{product.title}</Link>
            </div>
            )
        })}
    </div>
)
}
export default ProductList;

