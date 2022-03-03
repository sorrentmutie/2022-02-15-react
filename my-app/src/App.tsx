import React from 'react';

import './App.css';

interface Person {
  name: string,
  surname: string,
  age: number
}
interface ProductProps {
  value: number;
}

export const Products = (props: ProductProps) =>  <h3>{props.value} prodotti</h3>
export const Empty = () => <h3>Non ci sono prodotti</h3>

const RenderMessage = (props: any) => {
  return props.products === 0 ? <Empty/> : <Products value = {props.products}/>
}


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
      </header>
    </div>
  );
}

export default App;
