import React from 'react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaFileAlt, 
  FaCode,
  FaDatabase,
  FaLock,
  FaClipboardList,
  FaClock
} from 'react-icons/fa';
import '../styles/EpreuveE4.css';

const EpreuveE4 = () => {
  return (
    <div className="epreuve-container">
      <h1 className="main-title animate-fade-in">
        <FaGraduationCap className="title-icon" />
        Qu'est ce que l'épreuve E4 ?
      </h1>

      <div className="description-section animate-fade-in">
        <p>
          L'épreuve E4 - Production et fourniture de services informatiques est une épreuve majeure du BTS SIO qui évalue les compétences techniques et pratiques dans le développement d'applications. Cette épreuve permet aux étudiants de démontrer leur maîtrise dans la conception et le développement de solutions applicatives, la gestion des bases de données, et la mise en place de mesures de sécurité. Elle reflète les situations réelles rencontrées en entreprise et valorise la capacité à fournir des services informatiques de qualité.
        </p>
      </div>

      <div className="pdf-preview animate-fade-in">
        <h2>Voir le tableau des compétences</h2>
        <div className="iframe-container">
          <iframe 
            src="/Nirzara_Barua_Annexe_6_1_Tableau_de_synthese_Epreuve_E4_BTS_SIO_2024.pdf" 
            width="100%" 
            height="500px" 
            frameBorder="0"
            title="Tableau des compétences"
          >
            Ce PDF ne peut pas être affiché dans votre navigateur.
          </iframe>
        </div>
        <a href="/Nirzara_Barua_Annexe_6_1_Tableau_de_synthese_Epreuve_E4_BTS_SIO_2023.pdf" 
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
            <p>Production et fourniture de services</p>
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
            <FaCode className="card-icon" />
            <h4>Conception</h4>
            <p>Concevoir et développer des solutions applicatives</p>
          </div>

          <div className="objective-card">
            <FaDatabase className="card-icon" />
            <h4>Base de données</h4>
            <p>Gérer les données et leur persistance</p>
          </div>

          <div className="objective-card">
            <FaLock className="card-icon" />
            <h4>Sécurité</h4>
            <p>Protéger les données et les accès aux applications</p>
          </div>
        </div>
      </section>

      <section className="parcours-section animate-fade-in">
        <h2>
          <FaBriefcase className="section-icon" />
          Mon Parcours Professionnel
        </h2>
        <div className="stages-container">
          <div className="stage-card">
            <h3>Stage 2023 - Premier stage</h3>
            <p>Décrivez ici les détails de votre stage, les tâches que vous avez accomplies, les compétences que vous avez acquises, etc.</p>
            <a href="/rapport-stage1-E4.pdf" 
               className="view-report-btn" 
               target="_blank"
               rel="noopener noreferrer">
              <FaFileAlt className="btn-icon" />
              Voir le rapport de stage
            </a>
          </div>

          <div className="stage-card">
            <h3>Stage 2023 - Deuxième stage</h3>
            <p>Décrivez ici les détails de votre stage, les tâches que vous avez accomplies, les compétences que vous avez acquises, etc.</p>
            <a href="/rapport-stage2-E4.pdf" 
               className="view-report-btn"
               target="_blank"
               rel="noopener noreferrer">
              <FaFileAlt className="btn-icon" />
              Voir le rapport de stage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EpreuveE4;