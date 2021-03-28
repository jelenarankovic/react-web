import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
     const [click, setClick] = useState(false);
    const handleClick= () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
     return (
       <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    TRVL <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/pocetna' className='nav-links' onClick={closeMobileMenu}>
                                Početna
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/usluge' className='nav-links' onClick={closeMobileMenu}>
                                Usluge
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/proizvodi' className='nav-links' onClick={closeMobileMenu}>
                                Proizvodi
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/log' className='nav-links-mobile' onClick={closeMobileMenu}>
                               Uloguj se
                            </Link>
                        </li>

                    </ul>

            </div>
        </nav>


       </>
    )
}

export default Navbar
