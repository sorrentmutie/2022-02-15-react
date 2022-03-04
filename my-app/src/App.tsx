import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products2 } from './components/Product';
import { RenderMessage } from './components/RenderMessage';
import { Person } from './models/person';

function App() {
  let person: Person | null =
    { name: 'Mario', surname: 'Rossi', age: 50};
  // person = null;
  const products = 5;
  const gender: string = 'F';
  const wrapperClass: string = 
    gender === 'M' ? 'App-male' : 'App-female';

  let testo: string = person && person?.['name'] ?  person?.['name'] : "Non esiste";
  return (
    <div className="App">
      <header className="App-header">
       <h2>{testo}</h2>
       <div className={wrapperClass}>
         You are {gender === 'M' ? 'male': 'female'}
       </div>
       <div className="badge bg-primary" style={ {color: 'white'}}>Prova</div>
       <RenderMessage products={products}/>
       <Products2 value={products}/>
      </header>
    </div>
  );
}

export default App;
