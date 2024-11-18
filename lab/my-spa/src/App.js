import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

export default function App() {
    return (
        <Router>
            <nav className='navbar'>
                <div className='navContainer'>
                    <div className='navbar-logo'>
                        <img src='/logo192.png' alt='Logo' />
                        <span>MyApp</span>
                    </div>
                    <div className='navbar-links'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}
