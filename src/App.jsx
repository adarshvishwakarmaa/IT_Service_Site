import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
           

          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
