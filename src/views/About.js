// About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="section-title">À propos de moi</h1>
        <p className="intro-text">
          Encore en formation 🎓, ce portfolio présente mon parcours académique et professionnel, 
          ainsi que mes compétences et les outils que j'utilise.
        </p>

        {/* Remplacez le chemin de l'image par votre image dans le dossier public */}
        <div className="image-container">
          <img 
            src="/images/profile.jpg" 
            alt="Portrait de profil" 
            className="profile-image"
          />
        </div>

        <section className="education-section">
          <h2 className="section-title">Mon Parcours Scolaire</h2>
          <div className="education-cards">
            <div className="education-card">
              <h3>BTS SIO Option SLAM</h3>
              <p>Solutions logicielles et Applications Métiers</p>
              <p className="date">2023 - 2025</p>
            </div>

            <div className="education-card">
              <h3>Baccalauréat professionnelle TMCVA</h3>
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
              <h3>Certification 1</h3>
              <p>Mini description ou titre de la certification</p>
              <a 
                href="/certifications/cert1.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-button"
              >
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <h3>Certification 2</h3>
              <p>Mini description ou titre de la certification</p>
              <a 
                href="/certifications/cert2.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-button"
              >
                Voir l'attestation
              </a>
            </div>

            <div className="certification-card">
              <h3>Certification 3</h3>
              <p>Mini description ou titre de la certification</p>
              <a 
                href="/certifications/cert3.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-button"
              >
                Voir l'attestation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
