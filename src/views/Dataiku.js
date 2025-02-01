// views/Dataiku.js

import React from 'react';
import '../styles/ProjectDetail.css';

const Dataiku = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Analyse de données avec Dataiku</h1>
      <img
        src="/assets/dataiku_logo.png"
        alt="Logo Dataiku"
        className="project-logo"
      />
      <p className="project-description">
        Dans ce projet, j'ai utilisé la plateforme **Dataiku** pour réaliser des analyses de données complexes. L'objectif était de développer des modèles prédictifs et d'extraire des insights pour aider à la prise de décision stratégique.
      </p>
      <p className="project-description">
        J'ai travaillé sur le nettoyage des données, la visualisation interactive et l'automatisation des flux de travail analytiques.
      </p>
      <img
        src="/assets/dataiku_dashboard.png"
        alt="Capture d'écran du tableau de bord Dataiku"
        className="project-screenshot"
      />
      <p className="project-description">
        Ce projet m'a permis d'approfondir mes compétences en **data science** et en **machine learning**, tout en comprenant l'importance de la data dans le monde professionnel actuel.
      </p>
    </div>
  );
};

export default Dataiku;
