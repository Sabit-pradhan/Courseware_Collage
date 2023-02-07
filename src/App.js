import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Domain from "./components/pages/Domain";



function App() {
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/domain" element={<Domain/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
