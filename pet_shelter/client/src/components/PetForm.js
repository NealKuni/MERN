import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const PetForm =  () =>{
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState("");

const submitHandler = (e) =>{
  e.preventDefault();

  axios.post('http://localhost:8000/api/pet', {
    petName,
    petType,
    petDescription,
    skill1,
    skill2,
    skill3
  })
  .then((res) => {
    console.log(res);
    console.log("Created new pet in shelter");
    navigate("/");
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
      <h5> Know a pet needing a home? </h5>
      <form className="d-flex justify-content-evenly border border-secondary p-3" onSubmit={ submitHandler }>
        <div className="col-6">
            <label className="form-label">Pet Name:</label>
            <div className="ptsb-3">
              {
                errors.petName ?
                  <p className="text-danger" > {errors.petName.message} </p>
                  : null
              }
              <input className="form-control" type="text" onChange={(e) => setPetName(e.target.value)}/>
            </div>
            
            <label className="form-label">Pet Type:</label>
            <div className="ptsb-3">
              {
                errors.petType ?
                  <p className="text-danger" > {errors.petType.message} </p>
                  : null
              }

              <input className="form-control" type="text" onChange={(e) => setPetType(e.target.value)}/>
            </div>

            <label className="form-label">Pet Description:</label>
            <div className="ptsb-3">
              {
                errors.petDescription ?
                  <p className="text-danger" > {errors.petDescription.message} </p>
                  : null
              }

              <input className="form-control" type="text" onChange={(e) => setPetDescription(e.target.value)}/>
            </div>
        </div>
        <div className="col-6 ms-3">
            <label className="form-label">Skill 1:</label>
            <div className="ptsb-3">
              <input className="form-control" type="text" onChange={(e) => setSkill1(e.target.value)}/>
            </div>

            <label className="form-label">Skill 2:</label>
            <div className="ptsb-3">
              <input className="form-control" type="text" onChange={(e) => setSkill2(e.target.value)}/>
            </div>

            <label className="form-label">Skill 3:</label>
            <div className="ptsb-3">
              <input className="form-control" type="text" onChange={(e) => setSkill3(e.target.value)}/>
            </div>
            <button type="submit" class="bi bi-upload mt-3 btn-primary" > Add Pet</button>
        </div>   
        </form>
    </div>
)
}
export default PetForm;