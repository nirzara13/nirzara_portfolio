import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsProfessional.css';

const ProjectsProfessional = () => {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      image: "/images/projet1.jpg", // À remplacer par votre image
      route: "/project/1"
    },
    {
      id: 2,
      title: "Projet 2",
      image: "/images/projet2.jpg", // À remplacer par votre image
      route: "/project/2"
    },
    // Ajoutez d'autres projets selon vos besoins
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Mes projets professionnels</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <Link to={project.route} className="project-button">
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsProfessional;