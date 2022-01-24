import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <h3>YourDesigner</h3>
                </div>
                <div className="contents">
                    <a href="#">Home</a>
                    <a href="#offerings">Offerings</a>
                    <a href="#catalogue">Catalogue</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
