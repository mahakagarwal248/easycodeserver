import React from 'react';
import '../css/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <span>Follow Us:-</span>
            <div className="icons">
            <InstagramIcon style={{fontSize:32, marginRight:10}}/>
            <LinkedInIcon style={{fontSize:32}}/>
            </div>
            <p>@Copyright 2022</p>
        </div>
    )
}

export default Footer;
