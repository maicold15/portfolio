import React from "react";
import "../styles/AboutMeStyles.css";

function AboutMe() {
  const profilePic = "/images/perfil2.PNG";

  return (
    <section
      id="about-me-screen"
      className="about-me-screen-container"
      transition-style="in:wipe:down"
    >
      <div className="about-me-screen-content">
        {/* Sección Izquierda: Imagen con efecto de luz */}
        <div className="about-me-screen-left">
          <div className="about-me-screen-image-container">
            <img
              src={profilePic}
              alt="Profile"
              className="about-me-screen-image"
            />
            <div className="about-me-screen-light"></div>
          </div>
        </div>

        {/* Sección Derecha: Texto */}
        <div className="about-me-screen-right">
          <h2 className="about-me-screen-title">
            Electronic Engineer | Full Stack Developer
          </h2>
          <p className="about-me-screen-paragraph">
            I am an Electronics and Telecommunications Engineer with experience
            in designing electronic systems, 3D modeling, and programming
            microcontrollers, especially in C and using Arduino IDE. Throughout
            my journey, I have combined these skills with web development,
            enabling me to create comprehensive solutions that integrate
            hardware and software.
          </p>
          <p className="about-me-screen-paragraph">
            As a Full-Stack Developer, I excel in frontend technologies like
            React.js, Vue.js, Bootstrap, and JavaScript, as well as backend tools
            like Node.js, Laravel, and SQL. Additionally, I have experience in
            Python for data analysis and automation. My focus is always on
            creating functional, efficient, and well-designed projects.
          </p>
          <p className="about-me-screen-paragraph">
            I enjoy taking on new challenges, continuously learning, and
            perfecting every project I work on. I believe in the importance of
            organization, efficiency, and lifelong learning to grow both
            personally and professionally.
          </p>
        </div>
      </div>

      {/* Footer al final */}
      <footer className="about-me-screen-footer">
        <p>
          Created by <strong>Maicol Florez</strong> | All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default AboutMe;
