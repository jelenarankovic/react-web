/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
//import OurCoffee from './components/pages/OurCoffee';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/about-us' exact component = {AboutUs}/>
       
        </Switch>
        <Footer/>
      </Router>
      </>
  );
}

export default App;