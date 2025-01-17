import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectStyles.css";

function Projects() {
  // Lista de proyectos (solo dos para que llenes manualmente el segundo)
  const myProjects = [
    {
      title: "Constructora Cantabria",
      description: `
        A modern construction company website demonstrating a responsive layout and 
        integration of a MERN stack (React, Node, MongoDB, Express). 
        Continuous deployment using Vercel (frontend) and Render (backend).
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
        "Vercel",
      ],
    },
    {
      // Proyecto vacío para que lo llenes luego
      title: "My Second Project",
      description: "Project description goes here",
      image: "https://via.placeholder.com/300x200",
      link: "http://example.com",
      technologies: [],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {myProjects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            link={proj.link}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
