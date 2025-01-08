// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import ProjectsSchool from './views/ProjectsSchool';
import ProjectsProfessional from './views/ProjectsProfessional';
import VeilleTechnologique from './views/VeilleTechnologique';
import EpreuveE4 from './views/EpreuveE4';
import EpreuveE5 from './views/EpreuveE5';
import Contact from './views/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { MyContextProvider } from './views/MyContext'; // Import correct

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MyContextProvider> {/* Utilisation correcte */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects-school" element={<ProjectsSchool />} />
            <Route path="/projects-professional" element={<ProjectsProfessional />} />
            <Route path="/veille-technologique" element={<VeilleTechnologique />} />
            <Route path="/epreuve-e4" element={<EpreuveE4 />} />
            <Route path="/epreuve-e5" element={<EpreuveE5 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MyContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
