import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Pocetna from './components/stranice/Pocetna';

function App() {
  return (
   <>
   <Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component={Pocetna}/>
  </Switch>
  </Router>
        </>
   
  );
}

export default App;
