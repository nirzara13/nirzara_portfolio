// views/DigitalCar.js

import React from 'react';
import '../styles/ProjectDetail.css';

const DigitalCar = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">
        Développement d'une application full-stack pour Digital Car
      </h1>
      <img
        src="/assets/car_logo.png"
        alt="Logo de Digital Car"
        className="project-logo"
      />
      <p className="project-description">
        Ce projet a été réalisé dans le cadre de mon stage de deuxième année en BTS SIO. J'ai effectué ce stage au sein de l'entreprise **Digital Car**, spécialisée dans le calibrage des systèmes avancés d’aide à la conduite (A.D.A.S) pour les professionnels de la réparation automobile.
      </p>
      <p className="project-description">
        L'objectif principal était de créer une application pour Digital Car, afin de répondre aux besoins et exigences de l'entreprise. Ce projet m'a permis de développer des compétences en développement d'application full-stack.
      </p>
      <p className="project-description">
        L’application a été développée avec **Django** pour le backend et **Vue.js 3** pour le frontend. Les utilisateurs peuvent s’inscrire avec un mot de passe sécurisé et se connecter pour accéder à un formulaire de sélection des composants, incluant des menus déroulants pour les marques, modèles et composants ADAS.
      </p>
      <img
        src="/assets/digital_car.png"
        alt="Capture d'écran de l'application"
        className="project-screenshot"
      />
      <p className="project-description">
        Pour plus de détails sur ce projet, je vous invite à consulter mon rapport de stage de deuxième année de BTS SIO, disponible dans la page dédiée à l’épreuve E4 de mon site web.
      </p>
    </div>
  );
};

export default DigitalCar;
