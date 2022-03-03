import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Person {
  name: string,
  surname: string,
  age: number
}


function App() {
  let person: Person | null =
    { name: 'Mario', surname: 'Rossi', age: 50};
  person = null;
  let testo: string = person && person?.['name'] ?  person?.['name'] : "Non esiste";

  return (
    <div className="App">
      <header className="App-header">
       <h2>{testo}</h2>
      </header>
    </div>
  );
}

export default App;
