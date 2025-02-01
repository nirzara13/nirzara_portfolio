




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import ProjectsSchool from './views/ProjectsSchool';
import ProjectsProfessional from './views/ProjectsProfessional';
import VeilleTechnologique from './views/VeilleTechnologique';
import EpreuveE5 from './views/EpreuveE5';
import EpreuveE6 from './views/EpreuveE6';
import Contact from './views/Contact';
import MentionsLegales from './views/MentionsLegales';
import Header from './components/Header';
import Footer from './components/Footer';
import { MyContextProvider } from './views/MyContext';

// Import des pages de projet
import DigitalCar from './views/DigitalCar';
import SiteWebWordpress from './views/SiteWebWordpress';
import SignatureElectronique from './views/SignatureElectronique';
import Manim from './views/Manim';
import Dataiku from './views/Dataiku';

function App() {
  return (
    <Router>
      <MyContextProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects-school" element={<ProjectsSchool />} />
            <Route path="/projects-professional" element={<ProjectsProfessional />} />
            <Route path="/veille-technologique" element={<VeilleTechnologique />} />
            <Route path="/epreuve-e5" element={<EpreuveE5 />} />
            <Route path="/epreuve-e6" element={<EpreuveE6 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            
            {/* Routes pour les projets individuels */}
            <Route path="/digitalcar" element={<DigitalCar />} />
            <Route path="/wordpress" element={<SiteWebWordpress />} />
            <Route path="/signature" element={<SignatureElectronique />} />
            <Route path="/manim" element={<Manim />} />
            <Route path="/dataiku" element={<Dataiku />} />
            
          </Routes>
          <Footer />
        </div>
      </MyContextProvider>
    </Router>
  );
}

export default App;