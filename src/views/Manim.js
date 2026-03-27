// views/Manim.js
import React from 'react';
import '../styles/ProjectDetail.css';
import logo from '../assets/manim.png';
import screenshot from '../assets/flower.png';

const Manim = () => {
  return (
    <div className="project-detail">
      <h1 className="project-header">Animations mathématiques avec Manim</h1>

      <img src={logo} alt="Logo Manim" className="project-logo" />

      <p className="project-description">
        Passionné par les mathématiques et la programmation, j'ai utilisé <strong>Manim</strong>, un moteur d'animation mathématique créé par <strong>3Blue1Brown</strong>, pour produire des vidéos éducatives. Ces animations visuelles rendent les concepts complexes plus accessibles et engageants.
      </p>
      <p className="project-description">
        J'ai réalisé plusieurs vidéos expliquant des théorèmes et des concepts avancés, en alliant rigueur scientifique et créativité visuelle.
      </p>

      <img src={screenshot} alt="Capture d'écran d'une animation Manim" className="project-screenshot" />

      <p className="project-description">
        Ce projet m'a permis de développer mes compétences en <strong>Python</strong> et en <strong>pédagogie</strong>, et de contribuer à la communauté éducative en ligne.
      </p>
    </div>
  );
};

export default Manim;