import React from "react";
import "../styles/ProjectStyles.css";

function ProjectCard({ title, description, image, link, technologies = [] }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      {/* Tecnologías usadas */}
      {technologies.length > 0 && (
        <div className="tech-used-container">
          {technologies.map((tech, index) => (
            <span className="tech-used" key={index}>
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Enlace al proyecto */}
      <div style={{ marginTop: "15px" }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
