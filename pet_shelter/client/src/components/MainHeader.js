import React from 'react'
import { Link } from '@reach/router';

const MainHeader = (props) => {

  return(
    <div className="container-sm">
      <nav className="navbar">
        <h1>Pet Shelter</h1>
        <Link to={'/pets/new'} > add a pet to the shelter</Link>
      </nav>
    </div>
  )
}

export default MainHeader;