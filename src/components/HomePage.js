import React from "react";
import "../styles/HomePageStyles.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  const profilePic = "/images/perfil1.PNG";

  return (
    <div
      id="home"
      className="homepage-container"
      transition-style="in:wipe:top-right"
    >
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
              {/* Sustitución de textos por imágenes desde /public/images/icons */}
              <img
                src="/images/icons/react.png"
                alt="React"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/vue.png"
                alt="Vue.js"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/laravel.png"
                alt="Laravel"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/node.png"
                alt="Node.js"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/git.png"
                alt="Git"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/html.png"
                alt="HTML"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/css.png"
                alt="CSS"
                className="tech-icon-img"
              />
              <img
                src="/images/icons/js.png"
                alt="JavaScript"
                className="tech-icon-img"
              />
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
      
      {/* Footer integrado */}
      <footer className="footer-container">
        <p>
          Created by <strong>Maicol Florez</strong> | All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
