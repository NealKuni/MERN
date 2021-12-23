import React from 'react';
import { Router, Link } from '@reach/router';
import AllAuthors from '../components/AllAuthors';
import Detail from '../components/Detail';
import Update from '../components/Update';
import Create from '../components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path='/'/>
        <Detail path='/authors/:id'/>
        <Create path='/authors/new'/>
        <Update path='/authors/:id/edit'/>
        
      </Router>
    </div>
  );
}

export default App;
