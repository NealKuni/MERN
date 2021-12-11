import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product =  () =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [productArr, setProductArr] = useState([]);

const submitHandler = (e) =>{
    e.preventDefault();
    const newProductObject = {
        title,
        price,
        description
    }
    setProductArr([...productArr, newProductObject]);
    setTitle('');
    setPrice('');
    setDescription('');
    }

return (
    <div>
        <h1> Product Manager </h1>
        <form onSubmit={ (e) => submitHandler(e)}>
            <h4>Title:</h4>
            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
            <h4>Price:</h4>
            <input type="number" onChange={(e) => setPrice(e.target.value)}></input>
            <h4>Description:</h4>
            <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
            <button type="submit">Add Product</button>
        </form>
    </div>
)


}
export default Product;