import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = (props) => {
  const { pets } = props;


  return (
    
    <div  className="container-sm">
      <h5> These pets are looking for a good home </h5>
      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            <td> Name </td>
            <td> Type </td>
            <td> Actions </td>
          </tr>
        </thead>
        <tbody>
          {pets.map((eachPet, idx)=>{
            console.log(eachPet)
              return (
                <tr key={idx}>  
                  <td>{eachPet.petName}</td>
                  <td>{eachPet.petType}</td>
                  <td>
                    <Link className="ms-2" to={`/pets/${eachPet._id}`} > details</Link>
                    <Link className="ms-2" to={`/pets/${eachPet._id}/edit`}>edit</Link>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </table>  
    </div>
  )
}

export default PetList;