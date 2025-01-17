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
      ],
    },
    {
      title: "UniMobility",
      description: `
        UniMobility es una plataforma web diseñada para la gestión de estacionamientos de bicicletas en campus universitarios. 
        Proporciona al administrador una vista en tiempo real de los espacios disponibles, ocupados y el flujo de tráfico de personas mediante sensores de presencia. 
        Permite registrar y rastrear el uso de las bicicletas mediante la lectura de carnés o IDs estudiantiles, almacenando información como la fecha y hora de uso. 
        Además, facilita la generación de reportes automáticos para optimizar y mejorar los servicios ofrecidos en la zona común.
      `,
      image: "/images/ProjectsImages/unimobility.png",
      link: "http://example.com", // Sustituir por el enlace real
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
        "Sensores de Presencia",
      ],
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
