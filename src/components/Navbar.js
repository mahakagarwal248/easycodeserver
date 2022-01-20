import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="title">
                    <h3>YourDesigner</h3>
                </div>
                <div className="content">
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
