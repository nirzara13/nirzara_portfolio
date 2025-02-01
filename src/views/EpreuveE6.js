// views/EpreuveE6.js

import React from 'react';
import { 
  FaGraduationCap,
  FaClipboardList, 
  FaClock, 
  FaShieldAlt,
  FaLightbulb,
  FaCode,
  FaTools
} from 'react-icons/fa';
import '../styles/EpreuveE6.css';

const EpreuveE6 = () => {
  return (
    <div className="epreuve-container">
      <h1 className="main-title animate-fade-in">
        <FaGraduationCap className="title-icon" />
        Qu'est-ce que l'épreuve E6 ?
      </h1>

      <div className="description-section animate-fade-in">
        <p>
          L'épreuve E6, intitulée <strong>"Conception et maintenance de solutions informatiques"</strong>, est composée de deux projets ayant un contexte commun en rapport avec l’option choisie (SISR ou SLAM). L’objectif est de mettre en place une ou des solutions informatiques visant à faire évoluer une infrastructure conformément au contexte présenté.
        </p>
      </div>

      <div className="pdf-preview animate-fade-in">
        <h2>Voir le tableau des compétences</h2>
        <div className="iframe-container">
          <iframe 
            src="/Tableau_competences_E5.pdf" 
            width="100%" 
            height="500px" 
            frameBorder="0"
            title="Tableau des compétences E5"
          >
            Ce PDF ne peut pas être affiché dans votre navigateur.
          </iframe>
        </div>
        <a href="/Tableau_competences_E5.pdf" 
           className="download-btn" 
           download
        >
          Télécharger le tableau des compétences
        </a>
      </div>

      <section className="details-section animate-fade-in">
        <h2>Détails de l'Épreuve</h2>
        <div className="cards-container">
          <div className="detail-card">
            <FaClipboardList className="card-icon" />
            <h3>Nature</h3>
            <p>Conception, développement et maintenance de solutions logicielles adaptées aux besoins d'une organisation.</p>
          </div>

          <div className="detail-card">
            <FaGraduationCap className="card-icon" />
            <h3>Coefficient</h3>
            <p>Coeff. 4</p>
          </div>

          <div className="detail-card">
            <FaClock className="card-icon" />
            <h3>Durée</h3>
            <p>1h 30 minutes de préparation</p>
            <p>20 minutes d'oral</p>
          </div>
        </div>

        <h2 className="centered-title">Objectifs de l'épreuve</h2>
        <div className="cards-container">
          <div className="objective-card">
            <FaShieldAlt className="card-icon" />
            <h4>Protection des données</h4>
            <p>Protéger les données à caractère personnel</p>
          </div>

          <div className="objective-card">
            <FaLightbulb className="card-icon" />
            <h4>Conception</h4>
            <p>Concevoir des solutions logicielles adaptées aux besoins métiers.</p>
          </div>

          <div className="objective-card">
            <FaCode className="card-icon" />
            <h4>Développement</h4>
            <p>Développer des applications fonctionnelles en respectant les bonnes pratiques.</p>
          </div>

          <div className="objective-card">
            <FaTools className="card-icon" />
            <h4>Maintenance</h4>
            <p>Assurer la maintenance et l’évolution des solutions logicielles déployées.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EpreuveE6;
