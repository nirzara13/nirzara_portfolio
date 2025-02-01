import React from 'react';
import '../styles/ProjectsSchool.css';
// Importez les images
import paniersGourmands from '../assets/paniers_gourmands.png';
import accessibiliteNumerique from '../assets/accessibilite_numerique.png';
import mvc from '../assets/mvc.png';

const ProjectsSchool = () => {
  const projects = [
    {
      id: 1,
      title: "Les Coffrets Gourmands Bio",
      subtitle: "Projet de création d'une boutique en ligne",
      description: "Dans le cadre de notre projet en groupe, nous avons accompagné Juliette Bongout, une entrepreneuse fictive souhaitant se lancer dans la vente en ligne de coffrets gourmands bio. Notre mission était de l'aider à développer un site web fonctionnel et de lui fournir des solutions techniques adaptées pour gérer son activité.",
      objectives: [
        "Définir les aspects techniques et juridiques pour la création d'une boutique en ligne.",
        "Proposer une solution matérielle et logicielle pour l'informatique de Juliette.",
        "Créer un site web responsive avec une charte graphique pour la vente en ligne des coffrets gourmands."
      ],
      additionalInfo: "Le projet a impliqué des recherches en e-commerce, la mise en place de l'environnement de travail en équipe avec GitHub, ainsi que la réalisation de diverses missions techniques et la création de la boutique en ligne.",
      image: paniersGourmands,
      pdfUrl: "/Doc_CEJM_Paniers_Gourmands.pdf"
    },
    {
      id: 2,
      title: "Projet sur l'accessibilité web",
      description: "L'accessibilité web est une démarche essentielle pour rendre les sites internet accessibles à tous, y compris aux personnes en situation de handicap. Dans ce projet, notre objectif était de rendre un site web conforme aux normes d'accessibilité WCAG (Web Content Accessibility Guidelines), afin de garantir une expérience utilisateur optimale pour un public diversifié.",
      objectives: [
        "Étudier les normes d'accessibilité WCAG",
        "Réaliser un audit d'accessibilité du site existant",
        "Appliquer les corrections nécessaires pour rendre le site accessible",
        "Effectuer des tests d'accessibilité et valider les modifications"
      ],
      additionalInfo: "Ce projet a permis de mieux comprendre les enjeux de l'accessibilité numérique et d'acquérir des compétences pratiques pour rendre les sites web accessibles à un public plus large.",
      image: accessibiliteNumerique,
      pdfUrl: "/Projet_sur_l_accessibilité numerique.pdf"
    },
    {
      id: 3,
      title: "Application avec modèle MVC",
      description: "Lors de ma première année de BTS SIO, j'ai dû réaliser un projet personnel dans le cadre d'une activité exploitable pour l'épreuve E5. En classe, nous avons suivi des cours en demi-groupes sur le modèle MVC à partir d'une application de restaurant. Mon projet, Cultural Couture, est un site qui regroupe les tenues et accessoires traditionnels de différents pays, organisés par continent.",
      objectives: [
        "Créer une application web fonctionnelle et accessible basée sur le modèle MVC.",
        "Intégrer des fonctionnalités essentielles telles que l'inscription, la connexion sécurisée et le CRUD.",
        "Respecter les bonnes pratiques de développement (PDO, requêtes préparées, accessibilité).",
        "Publier le site en ligne avec une documentation complète (diagrammes, MCD, etc.)."
      ],
      additionalInfo: "Mon projet, Cultural Couture, est un site qui regroupe les tenues et accessoires traditionnels de différents pays, organisés par continent.\nPour une description complète avec captures d'écran, cliquez sur le bouton ci-dessous pour visualiser la documentation :",
      image: mvc,
      pdfUrl: "/Projet_Modele_MVC.pdf"
    }
  ];

  return (
    <div className="projects-school">
      <h1 className="projects-title">Mes Projets Scolaires et Personnels</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              width="400"
              height="300"
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              {project.subtitle && <h3 className="project-subtitle">{project.subtitle}</h3>}
              <p className="project-description">{project.description}</p>
              
              {project.objectives && (
                <>
                  <h4 className="objectives-title">Objectifs du projet :</h4>
                  <ul className="objectives-list">
                    {project.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.additionalInfo && (
                <p className="additional-info">{project.additionalInfo}</p>
              )}
              
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