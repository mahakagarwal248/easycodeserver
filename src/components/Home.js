import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Card';

function Home() {
    return (
        <div>
            <Navbar/>
            <Cards/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
