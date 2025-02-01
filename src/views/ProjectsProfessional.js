import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, PenTool, Play, Database } from 'lucide-react';
import digitalCarLogo from '../assets/car_logo.png';
import wordpressLogo from '../assets/cms.jpg';
import signatureLogo from '../assets/docu_sign.jpg';
import manimLogo from '../assets/manim_logo_noir.png';
import dataikusLogo from '../assets/dataiku-logo.jpg';
import '../styles/ProjectsProfessional.css';

const ProjectsProfessional = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Car",
      subtitle: "Application full-stack A.D.A.S",
      image: digitalCarLogo,
      route: "/digitalcar",
      alt: "Logo Digital Car",
      icon: <Code size={24} color="#a53860" />
    },
    {
      id: 2,
      title: "Site Web Wordpress",
      subtitle: "Développement web",
      image: wordpressLogo,
      route: "/wordpress",
      alt: "Logo WordPress",
      icon: <Globe size={24} color="#a53860" />
    },
    {
      id: 3,
      title: "Signature Électronique",
      subtitle: "Solution de signature numérique",
      image: signatureLogo,
      route: "/signature",
      alt: "Logo Signature Électronique",
      icon: <PenTool size={24} color="#a53860" />
    },
    {
      id: 4,
      title: "Manim",
      subtitle: "Animation mathématique",
      image: manimLogo,
      route: "/manim",
      alt: "Logo Manim",
      icon: <Play size={24} color="#a53860" />
    },
    {
      id: 5,
      title: "Dataiku",
      subtitle: "Analyse de données",
      image: dataikusLogo,
      route: "/dataiku",
      alt: "Logo Dataiku",
      icon: <Database size={24} color="#a53860" />
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Mes projets professionnels</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.alt} className="project-image" />
            <div className="project-info">
              <div className="project-header">
                {project.icon}
                <h2>{project.title}</h2>
              </div>
              <p>{project.subtitle}</p>
              <Link 
                to={project.route} 
                className="project-link"
                aria-label={`En savoir plus sur ${project.title}`}
              >
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