import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import PetList from '../components/PetList';
import MainHeader from '../components/MainHeader';

const Main = () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/pet')
          .then(res=>{
              setPets(res.data);
              setLoaded(true);
          });
  },[]);

  // const removeFromDom = petId => {
  //     setPets(pets.filter(pet => pet._id != petId));
  // };

  //!!!!!!! PASS THESE PROPS THROUGHT THE PETLIST removeFromDom={removeFromDom} !!!!! 
  return (
  
    <div>
      <MainHeader/>
        { loaded && <PetList pets={pets} /> }
    </div>
)
}

export default Main;