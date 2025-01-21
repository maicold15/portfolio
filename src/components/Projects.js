import React from "react";
import "../styles/ProjectStyles.css";

function Projects() {
  const myProjects = [
    {
      title: "Constructora Cantabria",
      description: `
        A modern construction company website with a responsive layout, 
        a MERN stack (React, Node, MongoDB, Express), and automated deployment 
        on Vercel (frontend) and Render (backend).
      `,
      image: "/images/ProjectsImages/cantabria.png",
      link: "http://cantabria-taupe.vercel.app",
      technologies: [
        "React.js",
        "Bootstrap",
        "CSS3",
        "JavaScript ES6",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "UniMobility",
      description: `
        UniMobility is a web platform to manage bicycle parking in university campuses. 
        It displays real-time availability and traffic via presence sensors, 
        tracks usage with student IDs, and provides automated reports to optimize services.
      `,
      image: "/images/ProjectsImages/unimobility.png",
      link: "http://example.com",
      technologies: [
        "React.js",
        "Bootstrap",
        "CSS3",
        "JavaScript ES6",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Arduino",
        "ESP32",
        "Sensors",
      ],
    },
    {
      title: "MFDeveloper Portfolio",
      description: `
        My personal portfolio website showing my projects, experience, and skills. 
        Built with React, featuring responsive design and smooth animations. 
        Deployed at mfdeveloper.com to highlight best practices in modern web development.
      `,
      image: "/images/ProjectsImages/portfolio.png",
      link: "https://mfdeveloper.com",
      technologies: [
        "React.js",
        "Bootstrap",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section
      id="projects-screen"
      className="projects-screen-container"
      transition-style="in:wipe:cinematic"
    >
      <div className="projects-main-content">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          {myProjects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.title} className="project-image" />

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>

              <div className="tech-used-container">
                {proj.technologies.map((tech, i) => (
                  <span key={i} className="tech-used">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="projects-screen-footer">
        <p>
          Created by <strong>Maicol Florez</strong> | All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Projects;
