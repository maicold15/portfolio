import React, { useState } from "react";
import "../styles/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to="/" onClick={handleToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleToggle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleToggle}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleToggle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
