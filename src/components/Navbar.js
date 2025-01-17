import React, { useState } from "react";
import "../styles/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>My Portfolio</h2>
      </div>

      {/* Ícono de menú (hamburguesa) */}
      <div className="menu-icon" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Enlaces de navegación */}
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
