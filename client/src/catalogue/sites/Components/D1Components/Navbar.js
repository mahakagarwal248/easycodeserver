import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="d1navbar">
            <div className="logo">
                <span>D</span>
                <span>E</span>
                <span>C</span>
                <span>O</span>
                <span style={{color:'red'}}>R</span>
                <span>R</span>
            </div>
            <div className="D1navcontents">
                <h5 style={{backgroundColor:'#e65c00',color:'white'}}>Home</h5>
                <h5>Services</h5>
                <h5>Our Work</h5>
                <h5>Customer Reviews</h5>
                <h5>Our Team</h5>
                <h5>Contact</h5>
                <h5 style={{color:'#e65c00'}}>Hire Us</h5>
            </div>
        </div>
    )
}

export default Navbar
