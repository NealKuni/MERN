import React from 'react';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <Detail path='/pets/:id'/>
        <Create path='/pets/new'/>
        <Update path='/pets/:id/edit'/>
        
      </Router>
    </div>
  );
}

export default App;
