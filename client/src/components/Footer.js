import React from "react";
import "../css/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className="footer">
      <div className="fd">
        <div className="fd1">
          <h3>YourDesigner</h3>
          <p>We are an independent team who work on people's requirements.</p>
          <p id="p2"><MailOutlineIcon style={{verticalAlign:'middle'}}/> easycoding2000@gmail.com</p>
        </div>
        <div className="fd2">
          <h5>Pages</h5>
          <h6>Home</h6>
          <h6>Our Services</h6>
          <h6>About us</h6>
          <h6>Catalogue</h6>
        </div>
        <div className="fd3">
          <h5>Follow Us:-</h5>
          <div className="icons">
            <a href="https://www.instagram.com/easycoding._/">
              <InstagramIcon style={{ fontSize: 32, marginRight: 10 }} />
            </a>
            <a href="https://www.linkedin.com/in/mahakagarwal248/">
              <LinkedInIcon style={{ fontSize: 32 }} />
            </a>
          </div>
        </div>
      </div>
      <div className="fdd">
        <p>@ Copyright 2022</p>
      </div>
    </div>
  );
}

export default Footer;
