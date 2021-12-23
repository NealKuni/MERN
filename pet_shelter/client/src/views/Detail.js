import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import PetHeader from '../components/PetHeader';


const Detail = (props) => {
    console.log(props)
    const [pet, setPet] = useState({})
    console.log(pet)
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            
            .then((res) => {
                console.log(res)
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const deletePet = (petId) => {
      axios.delete('http://localhost:8000/api/pet/' + petId)
          .then((res) => {
            console.log('inside delete method:' + (petId));
            navigate("/");
          })
          .catch((err) => {
            console.log(err)
            console.log('Error occured while during delete request')
          })
    };

    return (
      <div>
        <PetHeader />
        <div className="container-sm d-flex justify-content-between pb-2">
          <h5>Details about: {pet.petName}</h5>
          <button className="ms-2 bi bi-house-door btn-danger" onClick={(e) => {deletePet(pet._id)}}> Adopt {pet.petName}</button>
        </div>
        <div className="container-sm border border-secondary p-3 ">
          <table className="table-borderless">
            <tr>
              <td>Type:</td>
              <td>{pet.petType}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td> {pet.petDescription}</td>
            </tr>
            <tr>
              <td>Skills:</td>
              <td> {pet.petSkills} </td>
            </tr>
          </table>
        </div>
      </div>
  )

}
export default Detail;