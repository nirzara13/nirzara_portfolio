// views/SignatureElectronique.js

import React from 'react';
import '../styles/ProjectDetail.css';

const SignatureElectronique = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Développement d'une solution de signature électronique</h1>
      <img
        src="/assets/signature_logo.png"
        alt="Logo Signature Électronique"
        className="project-logo"
      />
      <p className="project-description">
        J'ai contribué au développement d'une solution de **signature électronique** visant à faciliter la validation légale de documents en ligne. Ce projet répond à la nécessité croissante de dématérialisation des procédures administratives et commerciales.
      </p>
      <p className="project-description">
        En collaborant avec une équipe multidisciplinaire, j'ai travaillé sur l'implémentation des protocoles de sécurité, la gestion des certificats numériques, et l'intégration d'une interface utilisateur conviviale.
      </p>
      <img
        src="/assets/signature_app.png"
        alt="Capture d'écran de la solution de signature électronique"
        className="project-screenshot"
      />
      <p className="project-description">
        Ce projet m'a permis d'approfondir mes connaissances en **cryptographie** et en **sécurité informatique**, tout en contribuant à une solution innovante pour les entreprises.
      </p>
    </div>
  );
};

export default SignatureElectronique;
