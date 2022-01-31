import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <h3>YourDesigner</h3>
                    <a href="/">Home</a>
                    <a href="#services">Our Services</a>
                    <a href="#about">About us</a>
                    <a href="#catalogue">Catalogue</a>
                </div>
                <div className="contents">
                    <button className="btn">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
