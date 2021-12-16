import React, { useState } from 'react';
import axios from 'axios';

const ProductForm =  () =>{
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  

const submitHandler = (e) =>{
  e.preventDefault();

  axios.post('http://localhost:8000/api/product', {
    title,
    price,
    description
  })
    .then((res) => {
      console.log(res)
      
    })
    .catch((err) => {
      console.log(err);
      if(err.response.data.errors){
        setErrors(err.response.data.errors)
      }
    })

}

return (
    <div className="container">
        <header> Product Manager </header>
        <form className="col-9" onSubmit={ submitHandler }>
            <label className="form-label">Title:</label>
            <div className="col- mb-3">
              {
                errors.title ?
                  <p className="text-danger" > {errors.title.message} </p>
                  : null
              }
              <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <h4>Price:</h4>
            {
              errors.price ?
                <p className="text-danger" > {errors.price.message} </p>
                : null
            }

            <input type="text" onChange={(e) => setPrice(e.target.value)}/>
            <h4>Description:</h4>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            <hr></hr>
            <button type="submit">Add Product</button>
        </form>
    </div>
)


}
export default ProductForm;