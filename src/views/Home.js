// Home.js
import React from 'react';
import '../styles/Home.css';
import { FaUsers, FaClipboardList, FaSyncAlt } from 'react-icons/fa'; // N'oubliez pas d'installer : npm install react-icons
import emojiImage from '../assets/emoji.jpeg'; // Importer l'image

const Home = () => {
  return (
    <div className="home-container">
      {/* Section Hero */}
      <div className="hero-section">
        <div class="left-section">
          <h1 className="name">Nirzara BARUA</h1>
          <p class="description">
            Bonjour, <br />
            En tant qu'étudiante en BTS Services Informatiques aux Organisations (SIO) option Solutions Logicielles et Applications Métiers (SLAM), je me forme aux différentes facettes du développement d'applications. Ma formation me permet d'acquérir des compétences en programmation, conception de bases de données, développement web, tout en apprenant à répondre aux besoins spécifiques des entreprises.
          </p>
        </div>
        <div class="right-section">
          <div className="image-container">
            <img 
              src={emojiImage} 
              alt="Nirzara BARUA" 
              className="profile-image"
            />
          </div>
        </div>
      </div>

      {/* Section Qualités */}
      <div className="qualities-section">
        <div className="quality-card">
          <FaUsers className="quality-icon" />
          <h3>Travail d'équipe</h3>
          <p>Capable de collaborer efficacement avec d'autres étudiants et enseignants pour atteindre des objectifs communs.</p>
        </div>
        <div className="quality-card">
          <FaClipboardList className="quality-icon" />
          <h3>Organisation</h3>
          <p>Gestion efficace du temps et des priorités pour jongler entre les études, les projets et les autres engagements.</p>
        </div>
        <div className="quality-card">
          <FaSyncAlt className="quality-icon" />
          <h3>Adaptabilité</h3>
          <p>Capacité à s'adapter rapidement aux nouveaux environnements et aux situations imprévues.</p>
        </div>
      </div>

      {/* Section Présentation */}
      <div className="presentation-section">
        <h2>Présentation</h2>
        <p>Bienvenue sur mon portfolio ! Découvrez mon travail et mes projets récents ci-dessous.</p>
        <br></br>
        <a href="/CV Master M1.pdf" target="_blank" className="cv-button">Voir le CV</a> {/* Lien vers le CV */}
      </div>

      {/* Section BTS SIO */}
      <div className="bts-section">
        <div className="bts-info">
          <h2>Qu'est-ce que le BTS SIO ?</h2>
          <p>Le BTS Services Informatiques aux Organisations (SIO) est un diplôme qui forme des professionnels capables de concevoir, de mettre en place et de maintenir des solutions informatiques adaptées aux besoins des organisations. Il se divise en deux spécialités principales : SLAM (Solutions Logicielles et Applications Métiers) et SISR (Solutions d'Infrastructure, Systèmes et Réseaux).</p>
        </div>
        
        <div className="options-container">
          <div className="option-card">
            <h3>Option SLAM</h3>
            <p>L'option Solutions Logicielles et Applications Métiers (SLAM) forme des spécialistes des logiciels, capables de participer à la conception, au développement, à l'intégration et à la maintenance des applications informatiques. Les étudiants acquièrent des compétences en analyse des besoins, rédaction de cahiers des charges, développement logiciel et gestion de projets informatiques.</p>
          </div>
          
          <div className="option-card">
            <h3>Option SISR</h3>
            <p>L'option Solutions d'Infrastructure, Systèmes et Réseaux (SISR) forme des spécialistes en infrastructures informatiques, capables de gérer, maintenir et sécuriser les réseaux et systèmes d'information des organisations. Les étudiants acquièrent des compétences en administration de réseaux, configuration de serveurs, mise en place de solutions de sécurité, et résolution de problèmes techniques complexes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


