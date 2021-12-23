import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import PetHeader from '../components/PetHeader';
import PetForm from '../components/PetForm';

const Create = (props) =>{

  return (
    <div>
      <PetHeader/>
      <PetForm/>
    </div>
  )
}

export default Create;