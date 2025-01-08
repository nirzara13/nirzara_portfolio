import React from 'react';
import { 
  FaGraduationCap,
  FaClipboardList, 
  FaClock, 
  FaShieldAlt, 
  FaDatabase, 
  FaLock 
} from 'react-icons/fa';
import '../styles/EpreuveE5.css';

const EpreuveE5 = () => {
  return (
    <div className="epreuve-container">
      <h1 className="main-title animate-fade-in">
        <FaGraduationCap className="title-icon" />
        Qu'est ce que l'épreuve E5 ?
      </h1>

      <div className="description-section animate-fade-in">
        <p>
          L'épreuve E5 - Cybersécurité des services informatiques est une épreuve cruciale du BTS SIO qui évalue les compétences en matière de sécurité informatique. Cette épreuve pratique permet aux étudiants de démontrer leur capacité à protéger les systèmes d'information, à sécuriser les données et à mettre en place des solutions de cybersécurité efficaces. Elle met l'accent sur la protection des infrastructures, la gestion des accès et la sécurisation des données sensibles de l'entreprise.
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
            <p>Cybersécurité des services informatiques</p>
          </div>

          <div className="detail-card">
            <FaGraduationCap className="card-icon" />
            <h3>Coefficient</h3>
            <p>Coeff. 4</p>
          </div>

          <div className="detail-card">
            <FaClock className="card-icon" />
            <h3>Durée</h3>
            <p>20 minutes de préparation</p>
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
            <FaDatabase className="card-icon" />
            <h4>Sécurisation</h4>
            <p>Préserver l'identité numérique de l'organisation</p>
          </div>

          <div className="objective-card">
            <FaLock className="card-icon" />
            <h4>Cybersécurité</h4>
            <p>Sécuriser les équipements et les services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EpreuveE5;