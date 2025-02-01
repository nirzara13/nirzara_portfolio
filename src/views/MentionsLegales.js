import React from 'react';
import '../styles/MentionsLegales.css';

const MentionsLegales = () => {
  return (
    <div className="legal-container">
      <h1>Mentions Légales</h1>
      
      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <p>Ce site est édité par Nirzara BARUA</p>
        <p>Email : nirzarabarua@gmail.com</p>
      </section>

      <section className="legal-section">
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par :</p>
        <p>Vercel Inc.</p>
        <p>340 S Lemon Ave #4133</p>
        <p>Walnut, CA 91789</p>
        <p>États-Unis</p>
        <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>
      </section>

      <section className="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
      </section>

      <section className="legal-section">
        <h2>Protection des données personnelles</h2>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
      </section>

      <section className="legal-section">
        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.</p>
      </section>
    </div>
  );
};

export default MentionsLegales;