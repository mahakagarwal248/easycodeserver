import React, {useState, useEffect} from 'react'
import "../css/Navbar.css";
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])
  return (
    <nav>
      <h2>EasyCoder</h2>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <li className="items">Home</li>
        <li className="items">Our Services</li>
        <li className="items">About Us</li>
        <li className="items">Catalouge</li>
        <button className="items">Contact Us</button>
      </ul>
      )}

      <button onClick={toggleNav} className="navbtn"><DehazeIcon style={{verticalAlign:'middle'}}/></button>
    </nav>
  );
}

export default Navbar;
