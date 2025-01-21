import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar estará visible en todas las páginas */}
        <Navbar />
        <main>
          <Routes>
            {/* Rutas para cada página */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
