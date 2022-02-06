import React from "react";
import '../css/Demofirst.css'
import Footer from "./Components/D1Components/Footer";
import MainPage from "./Components/D1Components/MainPage";
import Navbar from "./Components/D1Components/Navbar";

export const Demofirst = () => {
  return (
    <div className="demo1">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
};
