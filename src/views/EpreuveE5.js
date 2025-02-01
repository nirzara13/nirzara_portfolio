import React from 'react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaFileAlt, 
  FaLock,
  FaClipboardList,
  FaClock,
  FaLightbulb,
  FaWrench
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
          L'épreuve E5, intitulée "Support et mise à disposition de services informatiques", est une épreuve orale du BTS SIO. Elle a pour objectif d'évaluer les compétences techniques et méthodologiques acquises par l'étudiant dans le domaine des solutions informatiques. Cette épreuve repose sur un projet réalisé en milieu professionnel ou académique, qui doit répondre à des besoins spécifiques identifiés dans un contexte donné.
        </p>
        <br />
        <p>Cette épreuve est aussi accompagnée d'un tableau des compétences, compétences qui devront être décrites et réalisées au cours des projets présentés.</p>
      </div>

      <div className="pdf-preview animate-fade-in">
        <h2>Voir le tableau des compétences</h2>
        <div className="iframe-container">
          <iframe 
            src="/Nirzara_Barua_Annexe_6-1_Tableau_de_synthese_Epreuve_E5_BTS_SIO_2025.pdf" 
            width="100%" 
            height="500px" 
            frameBorder="0"
            title="Tableau des compétences"
          >
            Ce PDF ne peut pas être affiché dans votre navigateur.
          </iframe>
        </div>
        <a href="/Nirzara_Barua_Annexe_6-1_Tableau_de_synthese_Epreuve_E5_BTS_SIO_2025.pdf" 
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
            <p>10 minutes de présentation réalisée par l'étudiant(e)</p>
            <p>30 minutes d'échange</p>
          </div>
        </div>

        <h2 className="centered-title">Objectifs de l'épreuve</h2>
        <div className="cards-container">
          <div className="objective-card">
            <FaLightbulb className="card-icon" />
            <h4>Analyse des besoins</h4>
            <p>Comprendre et analyser les besoins métiers pour proposer des solutions adaptées.</p>
          </div>

          <div className="objective-card">
            <FaWrench className="card-icon" />
            <h4>Déploiement</h4>
            <p>Mettre en place des services informatiques et assurer leur bon fonctionnement.</p>
          </div>

          <div className="objective-card">
            <FaLock className="card-icon" />
            <h4>Sécurité</h4>
            <p>Garantir la sécurité des données et des services mis en place.</p>
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
            <h3>Stage - Deuxième année de BTS SIO </h3>
            <p>Du 02/12/2024 au 24/01/2025</p>
            <a href="/Rapport_de_Stage_Digital_Car_Nirzara.pdf" 
               className="view-report-btn" 
               target="_blank"
               rel="noopener noreferrer">
              <FaFileAlt className="btn-icon" />
              Voir le rapport de stage
            </a>
          </div>

          <div className="stage-card">
            <h3>Stage - Première année de stage en BTS SIO</h3>
            <p>Du 13/05/2024 au 05/07/2024</p>
            <a href="/Rapport_de_Stage_Nirzara_BARUA.pdf" 
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

export default EpreuveE5;
