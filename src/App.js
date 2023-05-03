import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Art from "./pages/art/Art.js";
import Home from "./pages/home/Home.js";
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        {/* <Footer /> */}
    </HashRouter>
  );
}

export default App;

