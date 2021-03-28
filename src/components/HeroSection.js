import React from 'react'
import { Button } from './Button'
import'../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
    <h1>Avantura te ceka</h1>
    <p>Sta ti cekas?</p>
    <div className="hero-btns">
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >KRENI</Button>
        <Button className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >Pogledaj <i className='far fa-play-circle'/></Button>        
        </div>    
        </div>
    )
}

export default HeroSection;
