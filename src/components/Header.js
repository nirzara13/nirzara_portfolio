import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="wave-container-top">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#450920" fillOpacity="1" d="M0,64L40,90.7C80,117,160,171,240,192C320,213,400,203,480,186.7C560,171,640,149,720,160C800,171,880,213,960,229.3C1040,245,1120,235,1200,213.3C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <h1 className="header-title">Nirzara BARUA</h1>
      <br></br>
      <br></br>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/projects-school">Projets Scolaires</Link></li>
          <li><Link to="/projects-professional">Projets Professionnels</Link></li>
          <li><Link to="/veille-technologique">Veille Technologique</Link></li>
          <li className="dropdown">
          Épreuves
            <ul className="dropdown-content">
              <li><Link to="/epreuve-e5">Épreuve E5</Link></li>
              <li><Link to="/epreuve-e6">Épreuve E6</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li> {/* Ajout du lien de la page de contact */}
        </ul>
      </nav>
      <br></br>
    </header>
  );
};

export default Header;
