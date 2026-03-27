import React from 'react';
import '../styles/About.css';
import awsLogo from '../assets/logo_aws.png';
import atelierRgpd from '../assets/logo_rgpd.PNG';
import ciscoBadge from '../assets/badge_intro_cybersecurity.png';
import qiozLogo from '../assets/quioz.png';
import packetTracerLogo from '../assets/cisco_packet_tracer.png';

import phpLogo from '../assets/php.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import angularLogo from '../assets/Angular.png';
import reactLogo from '../assets/react.png';
import vueLogo from '../assets/vue.jpg';
import nodeLogo from '../assets/node_express.png';
import githubLogo from '../assets/github.jpg';
import vscodeLogo from '../assets/vscode.jpg';
import trelloLogo from '../assets/trello.png';
import postgresqlLogo from '../assets/postgreSQL.jpg';
import puttyLogo from '../assets/putty.png';
import filezillaLogo from '../assets/file_zilla.jpg';
import oraclevmLogo from '../assets/oracle_vm_virtual_box.jpg';
import ciscoLogo from '../assets/cisco_packet_tracer.png';
import powerbiLogo from '../assets/powerbi.jpg';



const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="section-title">À propos de moi</h1>
        <p className="intro-text">
          Encore en formation 🎓, ce portfolio présente mon parcours académique et professionnel, 
          ainsi que mes compétences et les outils que j'utilise.
        </p>

        <div className="image-container">
          <img 
            src="/profil_photo.webp" 
            alt="Portrait de profil" 
            className="profile-image"
          />
        </div>

        <section className="education-section">
          <h2 className="section-title">Mon Parcours Scolaire</h2>
          <div className="education-cards">


           <div className="education-card">
           <h3>Licence 3 Informatique</h3>
           <p>Développement, Réseaux et Cybersécurité</p>
           <p>UFA Charles de Foucauld – En partenariat avec le CNAM | Contrat d'apprentissage</p>
           <p className="date">2025 - 2026</p>
           </div>
              
              
              <div className="education-card">
              <h3>BTS SIO Option SLAM</h3>
              <p>Solutions logicielles et Applications Métiers</p>
              <p>Lycée Polyvalent Turgot à Paris (3ᵉ arrondissement)</p>
              <p className="date">2023 - 2025</p>
            </div>

            <div className="education-card">
              <h3>Baccalauréat professionnelle TMCVA avec mention Très bien</h3>
              <p className="date">2020 - 2023</p>
            </div>

            <div className="education-card">
              <h3>Brevet avec mention bien</h3>
              <p>Collège Jean Moulin à Aubervilliers</p>
              <p className="date">2016 - 2020</p>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <h2 className="section-title">Mes Certifications</h2>
          <div className="certification-cards">
            <div className="certification-card">
              <img src={awsLogo} alt="Badge AWS Certification" className="cert-logo" />
              <h3>Attestation du badge chez Amazon AWS</h3>
              <a href="/AWS_Academy_Cloud_Foundations_Badge.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <img src={atelierRgpd} alt="Atelier RGPD" className="cert-logo" />
              <h3>Attestation de suivi du module 1  du RGPD </h3>
              <a href="/Certificat_attestation_de_suivi_Module1_RGPD_et_ses_notions_cles.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <img src={atelierRgpd} alt="Atelier RGPD" className="cert-logo" />
              <h3>Attestation de suivi du module 2 du RGPD.</h3>
              <a href="/Attestation_de_suivi_Module_2_RGPD.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <img src={ciscoBadge} alt="Cisco Badge" className="cert-logo" />
              <h3>Attestation Badge Introduction to Cybersecurity</h3>
              <a href="/Introduction_to_Cybersecurity_Badge.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <img src={qiozLogo} alt="Qioz Certification" className="cert-logo" />
              <h3>Certificat de niveau en anglais avec QIOZ sur mon lycée.net</h3>
              <a href="/Diplome_QIOZ.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <img src={packetTracerLogo} alt="Cisco Packet Tracer" className="cert-logo" />
              <h3>Attestation du badge de Introduction à Packet Tracer de Cisco</h3>
              <a href="/Introduction_to_Packet_Tracer_Badge.pdf" target="_blank" rel="noopener noreferrer" className="cert-button">
                Voir l'attestation
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Mes Compétences en Développement</h2>
          <p className="skills-description">
            <strong>
              Voici un aperçu des compétences que j'ai acquises au cours de mes études et de mes projets personnels. 
              Ces compétences couvrent un large éventail de technologies et de méthodologies en développement logiciel.
            </strong>
          </p>

          <div className="skills-grid">
  <div className="skill-item">
    <img src={phpLogo} alt="PHP" className="skill-image" />
    <p className="skill-desc">Langage incontournable pour le développement web backend...</p>
  </div>

  <div className="skill-item">
    <img src={htmlLogo} alt="HTML" className="skill-image" />
    <p className="skill-desc">Le squelette de toutes les pages web...</p>
  </div>

  <div className="skill-item">
    <img src={cssLogo} alt="CSS" className="skill-image" />
    <p className="skill-desc">CSS permet de styliser les pages web...</p>
  </div>

  <div className="skill-item">
    <img src={angularLogo} alt="Angular" className="skill-image" />
    <p className="skill-desc">Un framework JavaScript utilisé pour des applications web...</p>
  </div>

  <div className="skill-item">
    <img src={reactLogo} alt="React" className="skill-image" />
    <p className="skill-desc">Une bibliothèque JavaScript pour la création d'interfaces utilisateurs...</p>
  </div>

  {/* Répéter pour chaque autre technologie... */}
  <div className="skill-item">
              <img src={vueLogo} alt="Vue.js" className="skill-image" />
              <p className="skill-desc">Un framework JavaScript progressif pour construire des interfaces utilisateurs...</p>
            </div>

            <div className="skill-item">
              <img src={nodeLogo} alt="Node.js" className="skill-image" />
              <p className="skill-desc">Environnement d'exécution JavaScript côté serveur...</p>
            </div>
          
</div>

        </section>

        <section className="tools-section">
          <h2 className="section-title">Mes Outils et Logiciels</h2>
          <p className="tools-description">
            <strong>
              Voici une sélection des outils et logiciels que j'utilise régulièrement dans mon travail. 
              Ces outils me permettent de créer, développer et gérer mes projets de manière efficace.
            </strong>
          </p>

          <div className="tools-grid">
            <div className="tool-item">
              <img src={githubLogo} alt="GitHub" className="tool-image" />
              <p className="tool-desc">
                Plateforme incontournable pour héberger, collaborer et gérer des projets de développement grâce à Git.
              </p>
            </div>

            <div className="tool-item">
              <img src={vscodeLogo} alt="VS Code" className="tool-image" />
              <p className="tool-desc">
                Éditeur de code moderne, léger et personnalisable, idéal pour le développement dans plusieurs langages.
              </p>
            </div>

            <div className="tool-item">
              <img src={trelloLogo} alt="Trello" className="tool-image" />
              <p className="tool-desc">
                Outil de gestion de projet en ligne pour organiser vos tâches et projets facilement.
              </p>
            </div>

            <div className="tool-item">
              <img src={postgresqlLogo} alt="PostgreSQL" className="tool-image" />
              <p className="tool-desc">
                Système de gestion de base de données relationnelle avancé et open-source.
              </p>
            </div>

            <div className="tool-item">
              <img src={puttyLogo} alt="PuTTY" className="tool-image" />
              <p className="tool-desc">
                Client SSH pour établir des connexions sécurisées à distance avec un serveur.
              </p>
            </div>

            <div className="tool-item">
              <img src={filezillaLogo} alt="FileZilla" className="tool-image" />
              <p className="tool-desc">
                Logiciel FTP permettant de transférer des fichiers entre un serveur et un client.
              </p>
            </div>

            <div className="tool-item">
              <img src={oraclevmLogo} alt="Oracle VM" className="tool-image" />
              <p className="tool-desc">
                Outil de virtualisation pour exécuter des machines virtuelles sur un ordinateur physique.
              </p>
            </div>


  <div className="tool-item">
  <img src={powerbiLogo} alt="Power BI" className="tool-image" />
  <p className="tool-desc">
    Outil de visualisation de données et de création de tableaux de bord interactifs.
  </p>
</div>

            <div className="tool-item">
              <img src={ciscoLogo} alt="Cisco Packet Tracer" className="tool-image" />
              <p className="tool-desc">
                Logiciel de simulation de réseaux pour apprendre la configuration et la gestion des réseaux.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default About;



