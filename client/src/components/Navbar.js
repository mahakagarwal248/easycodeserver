import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h3>EasyCoding</h3>
          <a href="/" className="hoverclass1">
            Home
          </a>
          <a href="#services" className="hoverclass1">
            Our Services
          </a>
          <a href="#about" className="hoverclass1">
            About us
          </a>
          <a href="#catalogue" className="hoverclass1">
            Catalogue
          </a>
        </div>
        <div className="contents">
          <button className="btn">
            <Link to="/contactus" style={{ color: "white" }}>
              Contact us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
