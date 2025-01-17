import React from "react";
import "../styles/AboutMeStyles.css";

function AboutMe() {
  // Reemplaza con la ruta de tu imagen (puede ser la misma que en el home page)
  const profilePic = "/images/perfil2.PNG";

  return (
    <section className="about-me-container" id="about-me">
      <div className="about-me-card">
        <div className="about-me-content">
          {/* Foto circular a la izquierda */}
          <img src={profilePic} alt="Profile" className="about-me-picture" />

          {/* Bloque de texto a la derecha */}
          <div className="about-me-text-block">
            <h2 className="about-me-title">
              A Passionate Electronics Engineer and Web Developer{" "}
              <span role="img" aria-label="star">
                🌟
              </span>
            </h2>
            <p className="about-me-text">
              I am an Electronics and Telecommunications Engineer with
              experience in designing electronic systems, 3D modeling, and
              programming microcontrollers, especially in C and using Arduino
              IDE. Throughout my journey, I have combined these skills with web
              development, enabling me to create comprehensive solutions that
              integrate hardware and software.
            </p>
            <p className="about-me-text">
              As a Full-Stack Developer, I excel in frontend technologies like
              React.js, Bootstrap, and JavaScript, as well as backend tools like
              Node.js and SQL. Additionally, I have experience in Python for
              data analysis and automation. My focus is always on creating
              functional, efficient, and well-designed projects.
            </p>
            <p className="about-me-text">
              I enjoy taking on new challenges, continuously learning, and
              perfecting every project I work on. I believe in the importance of
              organization, efficiency, and lifelong learning to grow both
              personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
