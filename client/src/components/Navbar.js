import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  window.addEventListener("scroll", (event) => {
    if (toggleMenu) {
      setToggleMenu(false);
    }
  });
  const handleonclick = () => {
    setToggleMenu(false);
  };

  return (
    <nav>
      <h2>
        <a href="/">EasyCoder</a>
      </h2>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li onClick={handleonclick} className="items">
            <a href="/">Home</a>
          </li>
          <li onClick={handleonclick} className="items">
            <a href="/#services">Our Services</a>
          </li>
          <li onClick={handleonclick} className="items">
            <a href="/#about">About Us</a>
          </li>
          <li onClick={handleonclick} className="items">
            <a href="/#catalogue">Catalogue</a>
          </li>
          <hr />
          <button className="items">
            <Link to="/contactus" style={{ color: "white" }}>
              Contact Us
            </Link>
          </button>
        </ul>
      )}

      <button onClick={toggleNav} className="navbtn">
        <DehazeIcon style={{ verticalAlign: "middle", color: "#035473" }} />
      </button>
    </nav>
  );
}

export default Navbar;
