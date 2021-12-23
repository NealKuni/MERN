import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import MainHeader from './components/MainHeader';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/author')
          .then(res=>{
              setAuthors(res.data);
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
      <Link to={'/authors/new'}>Add an Author</Link>
      <h2>We Have Quotes From:</h2>
      {}
    </div>

)
}

export default Main;