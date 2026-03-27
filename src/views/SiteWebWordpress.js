// views/SiteWebWordpress.js
import React from 'react';
import '../styles/ProjectDetail.css';
import logo from '../assets/Logo-WordPress.png';
import screenshot from '../assets/pluch_univers.png';

const SiteWebWordpress = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Création d'un site web avec WordPress</h1>

      <img src={logo} alt="Logo WordPress" className="project-logo" />

      <p className="project-description">
        Au cours de mes expériences, j'ai développé un site web professionnel en utilisant <strong>WordPress</strong>, l'un des CMS les plus populaires. Ce projet avait pour objectif de créer une plateforme en ligne pour une petite entreprise, afin de renforcer sa présence sur le web.
      </p>
      <p className="project-description">
        J'ai personnalisé des thèmes, intégré des plugins spécifiques pour ajouter des fonctionnalités comme un formulaire de contact, un blog d'actualités, et optimisé le référencement naturel <strong>(SEO)</strong> pour améliorer la visibilité du site.
      </p>

      <img src={screenshot} alt="Capture d'écran du site WordPress" className="project-screenshot" />

      <p className="project-description">
        Ce projet m'a permis de maîtriser les aspects clés de <strong>WordPress</strong> et de comprendre l'importance d'une interface intuitive pour l'utilisateur final.
      </p>
    </div>
  );
};

export default SiteWebWordpress;