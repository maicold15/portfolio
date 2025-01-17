import React from "react";
import "../styles/HomePageStyles.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  const profilePic = "/images/perfil1.PNG";

  return (
    /* Agregamos un id="home" para que la sección "Home" ancle correctamente */
    <div id="home" className="homepage-container">
      <div className="main-content">
        {/* Columna izquierda: Títulos, descripción, tecnologías */}
        <div className="left-section">
          <h1 className="name">Maicol Florez</h1>
          <h2 className="engineer-title">
            Electronics and Telecommunications Engineer
          </h2>
          <h3 className="stack-title">
            Full-Stack Web and Mobile App Developer
          </h3>

          <p className="about-description">
            Hi! I’m Maicol Florez, a Full-Stack Web and Mobile App Developer
            with experience in creating modern solutions for web and mobile
            apps. I’ve also worked on hardware-software projects using
            microcontrollers in fields like robotics and embedded systems, along
            with 3D modeling skills. My goal is to turn ideas into innovative
            and functional solutions.
          </p>

          <div className="technologies-container">
            <h4 className="technologies-title">Technologies I Use</h4>
            <div className="technologies-icons">
              <span className="tech-icon">HTML</span>
              <span className="tech-icon">CSS</span>
              <span className="tech-icon">JavaScript</span>
              <span className="tech-icon">React</span>
              <span className="tech-icon">Vue.js</span>
              <span className="tech-icon">Laravel</span>
              <span className="tech-icon">Node.js</span>
              <span className="tech-icon">Git</span>
            </div>
          </div>
        </div>

        {/* Columna derecha: Foto y redes sociales */}
        <div className="right-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/maicol-florez-425416342/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/maicold15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
