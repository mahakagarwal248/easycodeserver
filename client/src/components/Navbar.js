import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navcss, setnavcss] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setnavcss(true);
    } else {
      setnavcss(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div className={navcss ? "navbar navactive" : "navbar"}>
        <div className="title">
          <h3>
            <Link to="/" className="link">EasyCoder</Link>
          </h3>
          <div className="navbar-collapse">
          <Link to="/#s1" className="hoverclass1">
            Home
          </Link>
          <a href="/#services" className="hoverclass1">
            Our Services
          </a>
          <a href="/#about" className="hoverclass1">
            About us
          </a>
          <a href="/#catalogue" className="hoverclass1">
            Catalogue
          </a>
          </div>
          
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
