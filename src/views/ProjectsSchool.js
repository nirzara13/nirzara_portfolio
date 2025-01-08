import React from 'react';
import '../styles/ProjectsProfessional.css';

const ProjectsSchool = () => {
  const projects = [
    {
      id: 1,
      title: "Projet Scolaire 1",
      description: "Description détaillée du projet scolaire 1...",
      image: "/images/school-project1.jpg", // À remplacer par votre image
      pdfUrl: "/pdfs/projet1.pdf"
    },
    {
      id: 2,
      title: "Projet Scolaire 2",
      description: "Description détaillée du projet scolaire 2...",
      image: "/images/school-project2.jpg", // À remplacer par votre image
      pdfUrl: "/pdfs/projet2.pdf"
    },
    // Ajoutez d'autres projets selon vos besoins
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Mes projets scolaires</h1>
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
              <p className="project-description">{project.description}</p>
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Visualiser le PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSchool;