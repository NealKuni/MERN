import React from 'react'
import { Link } from '@reach/router';

const PetHeader = (props) => {

  return(
    <div className="container-sm">
      <nav className="navbar">
        <h1>Pet Shelter</h1>
        <Link to={'/'} > back to home</Link>
      </nav>
    </div>
  )
}

export default PetHeader;