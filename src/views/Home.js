import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { FaUsers, FaClipboardList, FaSyncAlt } from 'react-icons/fa';

const Home = () => {
  const tags = ['Cybersécurité', 'Développement Web', 'Power BI', 'HTML/CSS', 'Réseaux', 'SQL'];

  const hexSkills = [
    { label: 'Cybersécurité', top: '5%',   left: '52%',  size: 56, bg: 'rgba(69,9,32,0.45)',    color: '#ffa5ab', delay: '0s',   dur: '4s'   },
    { label: 'Dev Web',       top: '5%',   right: '5%',  size: 50, bg: 'rgba(165,56,96,0.4)',   color: '#fff',    delay: '0.5s', dur: '5s'   },
    { label: 'Power BI',      bottom:'6%', left: '52%',  size: 52, bg: 'rgba(218,98,125,0.4)',  color: '#fff',    delay: '1s',   dur: '4.5s' },
    { label: 'HTML/CSS',      bottom:'6%', right: '4%',  size: 48, bg: 'rgba(69,9,32,0.4)',     color: '#ffa5ab', delay: '1.5s', dur: '3.8s' },
    { label: 'Réseaux',       top: '42%',  right: '3%',  size: 44, bg: 'rgba(165,56,96,0.35)', color: '#fff',    delay: '0.3s', dur: '5.5s' },
    { label: 'SQL',           top: '40%',  left: '50%',  size: 42, bg: 'rgba(69,9,32,0.35)',    color: '#ffa5ab', delay: '0.8s', dur: '4.2s' },
  ];

  const particles = [
    { s:10, l:'55%', b:'4%',  dur:'7s',  del:'0s'   },
    { s:6,  l:'85%', b:'8%',  dur:'9s',  del:'1.5s' },
    { s:8,  l:'70%', b:'2%',  dur:'8s',  del:'0.8s' },
    { s:5,  l:'62%', b:'6%',  dur:'10s', del:'2s'   },
    { s:7,  l:'92%', b:'14%', dur:'6s',  del:'0.3s' },
    { s:4,  l:'75%', b:'10%', dur:'12s', del:'1s'   },
  ];

  return (
    <div className="home-container">

      {/* ══════════════════════════════════════
          HERO — tout fusionné, sans cadre
      ══════════════════════════════════════ */}
      <div className="hero-section">

        {/* Initiales XXL en fond */}
        {/* ← Remplace PN par tes initiales */}
        <div className="hero-bg-letters">PN</div>

        {/* Grille géométrique */}
        <svg className="hero-grid" width="100%" height="100%">
          <defs>
            <pattern id="hgrid" width="55" height="55" patternUnits="userSpaceOnUse">
              <path d="M55 0L0 0 0 55" fill="none" stroke="white" strokeWidth="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hgrid)"/>
        </svg>

        {/* Particules flottantes (côté droit seulement) */}
        {particles.map((p, i) => (
          <div key={i} className="hv-particle" style={{
            width: p.s, height: p.s,
            left: p.l, bottom: p.b,
            animationDuration: p.dur, animationDelay: p.del,
          }}/>
        ))}

        {/* Hexagones flottants */}
        {hexSkills.map((h, i) => (
          <div key={i} className="hv-hex" style={{
            width: h.size, height: h.size,
            top: h.top, left: h.left, right: h.right, bottom: h.bottom,
            background: h.bg, color: h.color,
            animationDelay: h.delay, animationDuration: h.dur,
          }}>
            {h.label}
          </div>
        ))}

        {/* Layout texte + visuel */}
        <div className="hero-inner">

          {/* ── Gauche : texte ── */}
          <div className="left-section">
            {/* ← Remplace par ton vrai nom */}
            <h1 className="name">Nirzara BARUA</h1>
            <p className="description">
              Bonjour,<br />
              Étudiante en Licence 3 Informatique – Développement, Réseaux et Cybersécurité en
              alternance, je me spécialise dans les systèmes d'information, la cybersécurité et le
              développement web. Au fil de mes stages et de mon alternance, j'ai développé des
              compétences en administration de bases de données, en conception de dashboards Power BI
              et en développement full stack. J'aspire à évoluer vers des fonctions de gouvernance
              et de sécurité des systèmes d'information.
            </p>
          </div>

          {/* ── Droite : visuel sans cadre ── */}
          <div className="right-section">

            {/* Orbites concentriques */}
            <div className="hv-orbit-system">
              <div className="hv-orbit hv-orbit1"><div className="hv-orbit-dot"/></div>
              <div className="hv-orbit hv-orbit2"><div className="hv-orbit-dot"/></div>
              <div className="hv-orbit hv-orbit3"><div className="hv-orbit-dot"/></div>
              <div className="hv-center">
                {/* ← Remplace PN par tes initiales */}
                <span className="hv-initials">NB</span>
              </div>
            </div>

            {/* Nom ← Remplace par le tien */}
           
            <p className="hv-role">Étudiante L3 Informatique · Alternance</p>

            <div className="hv-sep" />

            {/* Tags flottants */}
            <div className="hv-tags">
              {tags.map((tag, i) => (
                <span key={tag} className="hv-tag" style={{
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + i * 0.3}s`,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Réseaux ← Remplace les liens */}
            <div className="hv-socials">
              <a href="https://fr.linkedin.com/in/nirzara-barua-01b082260" className="hv-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/nirzara13/" className="hv-social" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Qualités ── */}
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

      {/* ── Présentation ── */}
      <div className="presentation-section">
        <h2>Présentation</h2>
        <p>Bienvenue sur mon portfolio ! Découvrez mon travail et mes projets récents ci-dessous.</p>
        <br />
        <a href="/CV Master M1.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
          Voir le CV
        </a>
      </div>

      {/* ── BTS SIO ── */}
      <div className="bts-section">
        <div className="bts-info">
          <h2>Qu'est-ce que le BTS SIO ?</h2>
          <p>
            Le BTS Services Informatiques aux Organisations (SIO) est un diplôme qui forme des
            professionnels capables de concevoir, de mettre en place et de maintenir des solutions
            informatiques adaptées aux besoins des organisations. Il se divise en deux spécialités
            principales : SLAM (Solutions Logicielles et Applications Métiers) et SISR (Solutions
            d'Infrastructure, Systèmes et Réseaux).
          </p>
        </div>
        <div className="options-container">
          <div className="option-card">
            <h3>Option SLAM</h3>
            <p>
              L'option Solutions Logicielles et Applications Métiers (SLAM) forme des spécialistes
              des logiciels, capables de participer à la conception, au développement, à l'intégration
              et à la maintenance des applications informatiques. Les étudiants acquièrent des
              compétences en analyse des besoins, rédaction de cahiers des charges, développement
              logiciel et gestion de projets informatiques.
            </p>
          </div>
          <div className="option-card">
            <h3>Option SISR</h3>
            <p>
              L'option Solutions d'Infrastructure, Systèmes et Réseaux (SISR) forme des spécialistes
              en infrastructures informatiques, capables de gérer, maintenir et sécuriser les réseaux
              et systèmes d'information des organisations. Les étudiants acquièrent des compétences en
              administration de réseaux, configuration de serveurs, mise en place de solutions de
              sécurité, et résolution de problèmes techniques complexes.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;