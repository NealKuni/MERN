import React from 'react';
import { Link } from '@reach/router';

const ProductHeader = (props) => {
  return(
    <div>
      <nav className="nav justify-content-start">
        <div className="me-5">
          <h4>Welcome to My App</h4>
        </div>
        <div className="me-5">
          <Link to='/'>Home</Link>
        </div>
        <div className="me-5">
          <Link to='/'>About</Link>
        </div>
        <div className="me-5">
          <Link to='/'>About</Link>
        </div>
      </nav>
    </div>
  )
}

export default ProductHeader;