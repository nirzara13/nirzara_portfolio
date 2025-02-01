// views/VeilleTechnologique.js

import React from 'react';
import '../styles/VeilleTechnologique.css';
import { 
  FaSearch, 
  FaNetworkWired, 
  FaMobileAlt, 
  FaCloud, 
  FaLightbulb, 
  FaTools, 
  FaShieldAlt, 
  FaRobot, 
  FaBrain, 
  FaGlobe 
} from 'react-icons/fa';

const VeilleTechnologique = () => {
  return (
    <div className="veille-container">
      <h1 className="veille-title">Veille Technologique : Forensic Numérique</h1>

      {/* Introduction */}
      <section className="intro-section">
        <h2>Qu'est-ce que le Forensic Numérique ?</h2>
        <p>
          Le <strong>forensique numérique</strong>, également connu sous le nom d'investigation numérique légale, est un domaine incontournable de l’informatique, permettant la collecte et l’analyse des preuves numériques dans des enquêtes criminelles ou d’entreprise. Elle constitue l'application des techniques scientifiques et d'investigation à l'identification, la collecte, la préservation et l'analyse des preuves numériques. Avec l’essor de la cybercriminalité, les méthodes d’investigation s’adaptent, notamment via l’OSINT (Open Source Intelligence), qui repose sur des sources ouvertes.
        </p>
      </section>

      {/* Illustration avec icône */}
      <section className="illustration-section">
        <FaSearch className="illustration-icon" aria-hidden="true" />
      </section>

      {/* Branches du Forensic Numérique */}
      <section className="branches-section">
        <h2>Les différentes branches du Forensic Numérique</h2>
        <div className="branches-grid">
          <div className="branch-card">
            <FaTools className="branch-icon" aria-hidden="true" />
            <h3>Forensique des Systèmes</h3>
            <p>Analyse des systèmes d'exploitation, des fichiers et des métadonnées.</p>
          </div>
          <div className="branch-card">
            <FaNetworkWired className="branch-icon" aria-hidden="true" />
            <h3>Forensique Réseau</h3>
            <p>Analyse du trafic réseau, des logs et des communications.</p>
          </div>
          <div className="branch-card">
            <FaBrain className="branch-icon" aria-hidden="true" />
            <h3>Forensique de la Mémoire</h3>
            <p>Analyse de la mémoire volatile (RAM).</p>
          </div>
          <div className="branch-card">
            <FaMobileAlt className="branch-icon" aria-hidden="true" />
            <h3>Forensique Mobile</h3>
            <p>Investigation des appareils mobiles et IoT.</p>
          </div>
          <div className="branch-card">
            <FaCloud className="branch-icon" aria-hidden="true" />
            <h3>Forensique Cloud</h3>
            <p>Analyse des environnements cloud et services distants.</p>
          </div>
        </div>
        <p>
          La particularité du forensique numérique réside dans son principe fondamental de non-altération des preuves originales, utilisant des techniques de copie bit à bit et de validation par sommes de contrôle (hashing).
        </p>
      </section>

      {/* Ma Démarche de Veille Technologique */}
      <section className="demarche-section">
        <h2>Ma Démarche de Veille Technologique</h2>

        <h3>Outils Utilisés</h3>
        <ul className="tools-list">
          <li><FaGlobe aria-hidden="true" /> <strong>Feedly</strong> : Pour suivre les flux RSS des sites spécialisés.</li>
          <li><FaLightbulb aria-hidden="true" /> <strong>Alertes Google</strong> : Surveillance des mots-clés spécifiques.</li>
          <li><FaRobot aria-hidden="true" /> <strong>Perplexity AI</strong> : Aide à la recherche et vérification des sources.</li>
          <li><FaSearch aria-hidden="true" /> <strong>Recherche manuelle</strong> : Exploration des blogs techniques et forums.</li>
        </ul>

        <h3>Processus de Veille</h3>
        <p>
          Pour cette veille technologique, j’ai utilisé une méthode structurée en exploitant différents outils pour rechercher et analyser des informations pertinentes. J’ai commencé par configurer un agrégateur de flux RSS, comme Feedly, pour suivre des blogs spécialisés reconnus dans le domaine de la cybersécurité, tels que <em>Krebs on Security</em>. J’ai également mis en place des alertes Google avec des mots-clés précis, comme "OSINT outils 2024" ou "Forensique numérique", afin d’être informé des publications récentes.
        </p>
        <p>
          En complément, j’ai effectué des recherches manuelles en ligne, en utilisant des filtres de date pour me concentrer sur les articles récents publiés en 2023 et 2024. Pour évaluer mes sources, j’ai appliqué des critères stricts : la fiabilité de l’auteur, la récence des données et leur qualité. Ensuite, j’ai découvert une IA appelée Perplexity, qui m’a beaucoup aidé. Elle est pratique car elle fournit des informations claires accompagnées de plusieurs sources en même temps. Grâce à cet outil, j’ai pu accéder à des données que je n’avais pas forcément trouvées lors de mes recherches manuelles, tout en croisant les sources pour vérifier leur fiabilité.
        </p>
      </section>

      {/* Outils et Ressources avec sources et boutons cliquables */}
      <section className="resources-section">
        <h2>Outils et Ressources Clés</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <FaTools className="resource-icon" aria-hidden="true" />
            <h3>Outils de Forensic Numérique</h3>
            <p>Découvrez les outils professionnels utilisés dans les investigations numériques.</p>
            <p className="resource-source">
              <strong>Source :</strong> <a href="https://www.tracip.fr" target="_blank" rel="noopener noreferrer">Tracip.fr</a>
            </p>
            <a href="https://www.tracip.fr" target="_blank" rel="noopener noreferrer" className="resource-link">Explorer</a>
          </div>
          <div className="resource-card">
            <FaShieldAlt className="resource-icon" aria-hidden="true" />
            <h3>Récupération de Preuves</h3>
            <p>Méthodologies pour la récupération et la préservation des preuves numériques.</p>
            <p className="resource-source">
              <strong>Source :</strong> <a href="https://www.nist.gov/digital-evidence" target="_blank" rel="noopener noreferrer">NIST Digital Evidence</a>
            </p>
            <a href="https://www.nist.gov/digital-evidence" target="_blank" rel="noopener noreferrer" className="resource-link">Explorer</a>
          </div>
          <div className="resource-card">
            <FaLightbulb className="resource-icon" aria-hidden="true" />
            <h3>Analyse des Traces</h3>
            <p>Techniques pour l'analyse des traces numériques en forensique.</p>
            <p className="resource-source">
              <strong>Source :</strong> <a href="https://www.forensicfocus.com/" target="_blank" rel="noopener noreferrer">Forensic Focus</a>
            </p>
            <a href="https://www.forensicfocus.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Explorer</a>
          </div>
          <div className="resource-card">
            <FaNetworkWired className="resource-icon" aria-hidden="true" />
            <h3>Enquêtes sur les Cyberattaques</h3>
            <p>Méthodes pour investiguer les cyberattaques et collecter des preuves.</p>
            <p className="resource-source">
              <strong>Source :</strong> <a href="https://www.parissi.com/le-cyber-forensics-au-service-des-enquetes-sur-les-cyberattaques/" target="_blank" rel="noopener noreferrer">Le cyber forensics au service des enquêtes sur les cyberattaques</a>
            </p>
            <a href="https://www.parissi.com/le-cyber-forensics-au-service-des-enquetes-sur-les-cyberattaques/" target="_blank" rel="noopener noreferrer" className="resource-link">Explorer</a>
          </div>
        </div>
      </section>

      {/* Sources Complémentaires */}
      <section className="additional-sources-section">
        <h2>Sources Complémentaires</h2>
        <ul className="additional-sources-list">
          <li>
            <a href="https://geekflare.com/fr/forensic-investigation-tools/" target="_blank" rel="noopener noreferrer">
              GeekFlare - 22 outils GRATUITS d’investigation pour les experts en sécurité informatique
            </a>
          </li>
          <li>
            <a href="https://www.cyberuniversity.com/analyse-forensique-la-recherche-de-preuves-numeriques/" target="_blank" rel="noopener noreferrer">
              Cyberuniversity - Analyse Forensique : la recherche de preuves numériques
            </a>
          </li>
        </ul>
      </section>

      {/* Lien avec le SMACS */}
      <section className="smacs-section">
        <h2>Lien avec le SMACS</h2>
        <ul className="smacs-list">
          <li><FaGlobe aria-hidden="true" /> <strong>Social :</strong> Analyse des interactions sur les réseaux sociaux dans les enquêtes.</li>
          <li><FaMobileAlt aria-hidden="true" /> <strong>Mobilité :</strong> Investigation sur les données des appareils mobiles.</li>
          <li><FaBrain aria-hidden="true" /> <strong>Analytique :</strong> Utilisation d'outils d'analyse de données massives.</li>
          <li><FaCloud aria-hidden="true" /> <strong>Cloud :</strong> Forensique appliqué aux environnements cloud.</li>
          <li><FaShieldAlt aria-hidden="true" /> <strong>Sécurité :</strong> Protection des systèmes via les investigations numériques.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="conclusion-section">
        <h2>Conclusion</h2>
        <p>
          Le forensique numérique et l'OSINT sont devenus des outils essentiels dans la lutte contre les cybermenaces. Cette veille technologique m'a permis de comprendre l'importance croissante de ces compétences dans un monde de plus en plus numérisé, où la sécurité des systèmes d'information est devenue primordiale.
        </p>
      </section>
    </div>
  );
};

export default VeilleTechnologique;
