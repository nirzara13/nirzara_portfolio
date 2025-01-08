import React from 'react';
import '../styles/VeilleTechnologique.css';

const VeilleTechnologique = () => {
  return (
    <div className="veille-container">
      <h1 className="veille-title">Veille Technologique - Forensic Numérique</h1>
      
      <section className="intro-section">
        <h2>Introduction au Forensic Numérique</h2>
        <p>
          Le forensic numérique est une discipline qui consiste à collecter, préserver, 
          analyser et présenter des preuves numériques dans le cadre d'investigations.
        </p>
      </section>

      <section className="topics-section">
        <div className="topic-card">
          <h3>Outils et Technologies</h3>
          <ul>
            <li>Analyse de disques durs</li>
            <li>Récupération de données</li>
            <li>Analyse de malwares</li>
            <li>Investigation sur mobile</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Méthodologies</h3>
          <ul>
            <li>Acquisition de preuves</li>
            <li>Préservation des preuves</li>
            <li>Analyse des données</li>
            <li>Rédaction de rapports</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Tendances Actuelles</h3>
          <ul>
            <li>Cloud Forensics</li>
            <li>IoT Forensics</li>
            <li>Intelligence Artificielle</li>
            <li>Blockchain Analysis</li>
          </ul>
        </div>
      </section>

      <section className="resources-section">
        <h2>Ressources et Veille</h2>
        <div className="resources-grid">
          <button className="resource-link" onClick={() => window.location.href='#'}>Articles Scientifiques</button>
          <button className="resource-link" onClick={() => window.location.href='#'}>Conférences</button>
          <button className="resource-link" onClick={() => window.location.href='#'}>Outils Open Source</button>
          <button className="resource-link" onClick={() => window.location.href='#'}>Certifications</button>
        </div>
      </section>
    </div>
  );
};

export default VeilleTechnologique;
