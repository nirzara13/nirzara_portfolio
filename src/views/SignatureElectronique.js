// views/SignatureElectronique.js
import React from 'react';
import '../styles/ProjectDetail.css';
import logo from '../assets/docu sign logo.webp';
import screenshot from '../assets/docu_sign.jpg';

const SignatureElectronique = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Développement d'une solution de signature électronique</h1>

      <img src={logo} alt="Logo Signature Électronique" className="project-logo" />

      <p className="project-description">
        J'ai contribué au développement d'une solution de <strong>signature électronique</strong> visant à faciliter la validation légale de documents en ligne. Ce projet répond à la nécessité croissante de dématérialisation des procédures administratives et commerciales.
      </p>
      <p className="project-description">
        En collaborant avec une équipe multidisciplinaire, j'ai travaillé sur l'implémentation des protocoles de sécurité, la gestion des certificats numériques, et l'intégration d'une interface utilisateur conviviale.
      </p>

      <img src={screenshot} alt="Capture d'écran de la solution de signature électronique" className="project-screenshot" />

      <p className="project-description">
        Ce projet m'a permis d'approfondir mes connaissances en <strong>cryptographie</strong> et en <strong>sécurité informatique</strong>, tout en contribuant à une solution innovante pour les entreprises.
      </p>
    </div>
  );
};

export default SignatureElectronique;