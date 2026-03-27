// views/Dataiku.js
import React from 'react';
import '../styles/ProjectDetail.css';
import logo from '../assets/dataiku-logo.jpg';
import screenshot from '../assets/dataiku_dashboard.png';

const Dataiku = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Analyse de données avec Dataiku</h1>
      
      <img src={logo} alt="Logo Dataiku" className="project-logo" />
      
      <p className="project-description">
        Dans ce projet, j'ai utilisé la plateforme <strong>Dataiku</strong> pour réaliser des analyses de données complexes. L'objectif était de développer des modèles prédictifs et d'extraire des insights pour aider à la prise de décision stratégique.
      </p>
      <p className="project-description">
        J'ai travaillé sur le nettoyage des données, la visualisation interactive et l'automatisation des flux de travail analytiques.
      </p>
      
      <img src={screenshot} alt="Capture d'écran du tableau de bord Dataiku" className="project-screenshot" />
      
      <p className="project-description">
        Ce projet m'a permis d'approfondir mes compétences en data science, 
notamment en travaillant sur la visualisation de données et la création 
de graphiques analytiques avec Dataiku.
      </p>
    </div>
  );
};

export default Dataiku;