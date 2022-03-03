import React from 'react';

import './App.css';
import { Products2 } from './components/Product';
import { RenderMessage } from './components/RenderMessage';
import { Person } from './models/person';

function App() {
  let person: Person | null =
    { name: 'Mario', surname: 'Rossi', age: 50};
  person = null;
  const products = 5;
  let testo: string = person && person?.['name'] ?  person?.['name'] : "Non esiste";
  return (
    <div className="App">
      <header className="App-header">
       <h2>{testo}</h2>
       <RenderMessage products={products}/>
       <Products2 value={products}/>
      </header>
    </div>
  );
}

export default App;
