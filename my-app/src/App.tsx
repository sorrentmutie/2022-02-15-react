import React, { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { MenuItem } from './models/MenuItem';
import axios from 'axios';

function App() {
  const gender: string = 'F';
  const navigate = (url:string) => window.open(url);
  const wrapperClass: string = 
    gender === 'M' ? 'App-male' : 'App-female';
//   const menuItems: MenuItem[] = [
//     {key: 1, text: 'Home', url: 'http://www.repubblica.it'},
//     {key:2,  text: 'About', url: 'http://www.gazzetta.it'},
//     {key:3,  text: 'Features', url: 'http://www.microsoft.it'},
//     {key:4, text: 'Pricing', url: 'http://www.google.com'}
// ]
   const [menuItems, setItems] = useState<MenuItem[]>([]);
   useEffect( () => {
     console.log('ho invocato useEffects');
     axios.get<MenuItem[]>('http://localhost:4500/menuitems')
      .then( response => setItems(response.data) )
   }, []);

  return (
    <div className="App">
      <Menu items={menuItems} onItemClicked={navigate}/>
      <header className="App-header">
       <div className={wrapperClass}>
         You are {gender === 'M' ? 'male': 'female'}
       </div>
       <div className="badge bg-primary" style={ {color: 'white'}}>Prova</div>
      </header>
    </div>
  );
}

export default App;
