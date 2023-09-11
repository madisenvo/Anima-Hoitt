import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Art from "./pages/art/Art.js";
import Home from "./pages/home/Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} /> 
        </Routes>
    </Router>
  );
}

export default App;

