import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_Nirzara.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave-container-bottom">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#450920" fillOpacity="1" d="M0,64L40,90.7C80,117,160,171,240,192C320,213,400,203,480,186.7C560,171,640,149,720,160C800,171,880,213,960,229.3C1040,245,1120,235,1200,213.3C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="Logo Portfolio" className="footer-logo" />
          
        </div>
        <div className="footer-column">
          <h3>Suivez-moi</h3>
          <p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a> |
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          </p>
        </div>
        <div className="footer-column">
          <h3>© 2025 Nirzara BARUA</h3>
          <Link to="/mentions-legales" className="legal-link">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;