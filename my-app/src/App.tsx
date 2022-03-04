import React, { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { MenuItem } from './models/MenuItem';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PricingPage } from './components/PricingPage';
import { FeaturesPage } from './components/FeaturesPage';
import { RandomUsersPage } from './components/RandomUsersPage';

function App() {
  // const gender: string = 'F';
  const navigate = (url:string) => window.location.href= url;
  // const wrapperClass: string = 
    //
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <HomePage/>}></Route>
          <Route path="/about" element= { <AboutPage/>}></Route>
          <Route path="/pricing" element= { <PricingPage/>}></Route>
          <Route path="/features" element= { <FeaturesPage/>}></Route>
          <Route path="/random-users" element= { <RandomUsersPage/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
       <div className={wrapperClass}>
         You are {gender === 'M' ? 'male': 'female'}
       </div>
       <div className="badge bg-primary" style={ {color: 'white'}}>Prova</div>
      </header> */}
    </div>
  );
}

export default App;
