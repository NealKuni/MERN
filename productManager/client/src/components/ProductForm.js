import React, { useState } from 'react';
import axios from 'axios';

const ProductForm =  () =>{
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  

const submitHandler = (e) =>{
  e.preventDefault();

  axios.post('http://localhost:8000/api/product', {
    title,
    price,
    description
  })
    .then((res) => {
      console.log(res)
      setTitle("");
      setPrice("");
      setDescription("");
    })
    .catch((err) => {
      console.log(err);
    })

}

return (
    <div>
        <header> Product Manager </header>
        <form onSubmit={ submitHandler }>
            <h4>Title:</h4>
            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
            <h4>Price:</h4>
            <input type="text" onChange={(e) => setPrice(e.target.value)}></input>
            <h4>Description:</h4>
            <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
            <hr></hr>
            <button type="submit">Add Product</button>
        </form>
    </div>
)


}
export default ProductForm;