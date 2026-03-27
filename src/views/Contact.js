// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim() || formData.name.trim().length < 2) {
//       newErrors.name = 'Le nom doit contenir au moins 2 caractères';
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Veuillez entrer une adresse email valide';
//     }

//     if (!formData.subject.trim() || formData.subject.trim().length < 3) {
//       newErrors.subject = 'Le sujet doit contenir au moins 3 caractères';
//     }

//     if (!formData.message.trim() || formData.message.trim().length < 10) {
//       newErrors.message = 'Le message doit contenir au moins 10 caractères';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error('Veuillez corriger les erreurs dans le formulaire');
//       return;
//     }

//     if (!captchaToken) {
//       toast.error('Veuillez vérifier que vous êtes un humain');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           formData,
//           token: captchaToken,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success('Message envoyé avec succès !');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//         setCaptchaToken(null);

//         if (window.grecaptcha) {
//           window.grecaptcha.reset();
//         }
//       } else {
//         toast.error(data.message || 'Erreur lors de l\'envoi du message');
//       }
//     } catch (error) {
//       console.error('Erreur:', error);
//       toast.error('Erreur lors de la communication avec le serveur');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   return (
//     <div className="contact-container">
//       <ToastContainer position="top-right" />
//       <h1 className="contact-title">Contactez-moi</h1>

//       <div className="contact-content">
//         <div className="contact-info">
//           <h2>Mes Coordonnées</h2>
//           <div className="info-item">
//             <i className="fas fa-envelope"></i>
//             <p>votre-email@example.com</p>
//           </div>
//           <div className="info-item">
//             <i className="fas fa-phone"></i>
//             <p>+33 6 XX XX XX XX</p>
//           </div>
//           <div className="info-item">
//             <i className="fas fa-map-marker-alt"></i>
//             <p>Paris, France</p>
//           </div>

//           <div className="social-links">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-github"></i>
//             </a>
//           </div>
//         </div>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Votre nom"
//               value={formData.name}
//               onChange={handleChange}
//               className={errors.name ? 'error' : ''}
//               required
//             />
//             {errors.name && <span className="error-message">{errors.name}</span>}
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Votre email"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? 'error' : ''}
//               required
//             />
//             {errors.email && <span className="error-message">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               name="subject"
//               placeholder="Sujet"
//               value={formData.subject}
//               onChange={handleChange}
//               className={errors.subject ? 'error' : ''}
//               required
//             />
//             {errors.subject && <span className="error-message">{errors.subject}</span>}
//           </div>

//           <div className="form-group">
//             <textarea
//               name="message"
//               placeholder="Votre message"
//               value={formData.message}
//               onChange={handleChange}
//               className={errors.message ? 'error' : ''}
//               required
//             ></textarea>
//             {errors.message && <span className="error-message">{errors.message}</span>}
//           </div>

//           <div className="captcha-container">
//             <ReCAPTCHA
//               sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//               onChange={(token) => setCaptchaToken(token)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="submit-button"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;




// Nouveau code sans reCAPTCHA 

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

/* ───────────────────────────────────────────
   CONFETTI ENGINE (légère, sans dépendance)
   ─────────────────────────────────────────── */
const launchConfetti = (container) => {
  const colors = ['#450920', '#a53860', '#da627d', '#ffa5ab', '#e2d1d1', '#fff'];
  const confettiCount = 80;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    const size = Math.random() * 8 + 4;
    const isCircle = Math.random() > 0.5;

    Object.assign(confetti.style, {
      position: 'fixed',
      width: `${size}px`,
      height: `${isCircle ? size : size * 2.5}px`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: isCircle ? '50%' : '2px',
      left: `${Math.random() * 100}vw`,
      top: '-10px',
      zIndex: '10000',
      pointerEvents: 'none',
      opacity: '1',
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `confettiFall ${Math.random() * 2 + 2}s ease-out forwards`,
      animationDelay: `${Math.random() * 0.5}s`,
    });

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4500);
  }
};

/* ───────────────────────────────────────────
   COMPOSANT CONTACT
   ─────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // ─── Anti-spam : honeypot + timestamp ───
  const [honeypot, setHoneypot] = useState('');
  const formLoadTime = useRef(Date.now());
  const submitCount = useRef(0);
  const lastSubmitTime = useRef(0);

  // ─── Animations au scroll ───
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = useCallback((el, index) => {
    if (el) {
      el.dataset.index = index;
      sectionRefs.current[index] = el;
    }
  }, []);

  // ─── Validation ───
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Le sujet doit contenir au moins 3 caractères';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Anti-spam checks ───
  const isSpam = () => {
    // 1. Honeypot rempli = bot
    if (honeypot) {
      console.log('Bot détecté via honeypot');
      return true;
    }

    // 2. Formulaire soumis trop vite (< 3 secondes)
    const timeSinceLoad = Date.now() - formLoadTime.current;
    if (timeSinceLoad < 3000) {
      console.log('Soumission trop rapide');
      return true;
    }

    // 3. Rate limiting : max 3 envois par minute
    const now = Date.now();
    if (now - lastSubmitTime.current < 20000) {
      submitCount.current += 1;
    } else {
      submitCount.current = 1;
    }
    lastSubmitTime.current = now;

    if (submitCount.current > 3) {
      toast.warning('Trop de messages envoyés. Veuillez patienter un moment.');
      return true;
    }

    return false;
  };

  // ─── Soumission ───
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    if (isSpam()) {
      // On fait croire au bot que c'est envoyé
      toast.success('Message envoyé avec succès !');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          // Plus de token captcha nécessaire
          timestamp: formLoadTime.current,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessageSent(true);
        launchConfetti();
        toast.success('Message envoyé avec succès ! 🎉');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setMessageSent(false), 5000);
      } else {
        toast.error(data.message || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la communication avec le serveur');
    } finally {
      setIsSubmitting(false);
      formLoadTime.current = Date.now();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // ─── Données de coordonnées ───
  const contactItems = [
    { icon: 'fas fa-map-marker-alt', text: 'Paris, France', delay: 0.1 },
  ];

  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Votre nom', icon: '👤' },
    { name: 'email', type: 'email', placeholder: 'Votre email', icon: '✉️' },
    { name: 'subject', type: 'text', placeholder: 'Sujet', icon: '📌' },
  ];

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" />

      {/* ─── Fond décoratif animé ─── */}
      <div className="contact-bg-shapes">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      {/* ─── Titre ─── */}
      <div
        ref={(el) => addRef(el, 0)}
        className={`contact-header ${visibleSections.has('0') ? 'animate-in' : ''}`}
      >
        <h1 className="contact-title">Contactez-moi</h1>
      </div>

      <div className="contact-content">
        {/* ─── Colonne Info ─── */}
        <div
          ref={(el) => addRef(el, 1)}
          className={`contact-info ${visibleSections.has('1') ? 'animate-in' : ''}`}
        >
          <div className="info-header">
            <h2>Mes Coordonnées</h2>
            <div className="info-decoration"></div>
          </div>

          {contactItems.map((item, i) => (
            <div
              key={i}
              className="info-item"
              style={{ animationDelay: `${item.delay + 0.3}s` }}
            >
              <div className="info-icon-wrapper">
                <i className={item.icon}></i>
              </div>
              <p>{item.text}</p>
            </div>
          ))}

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Illustration décorative */}
          <div className="info-illustration">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgba(255,255,255,0.1)"
                d="M44.7,-76.4C58.8,-69.2,71.8,-58.5,79.6,-44.9C87.4,-31.3,90,-14.8,88.2,0.9C86.4,16.7,80.2,31.7,71.2,44.8C62.2,57.9,50.4,69.1,36.5,76.1C22.6,83.1,6.6,85.9,-8.3,83.5C-23.2,81.1,-37,73.5,-49.1,63.5C-61.2,53.5,-71.6,41.1,-77.5,26.7C-83.4,12.3,-84.8,-4.1,-81.2,-19.5C-77.6,-34.9,-69,-49.3,-56.7,-57.4C-44.4,-65.5,-28.4,-67.3,-13.2,-71.8C2,-76.3,30.6,-83.5,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* ─── Formulaire ─── */}
        <div
          ref={(el) => addRef(el, 2)}
          className={`contact-form-wrapper ${visibleSections.has('2') ? 'animate-in' : ''}`}
        >
          {messageSent && (
            <div className="success-overlay">
              <div className="success-icon">🎉</div>
              <h3>Merci pour votre message !</h3>
              <p>Je vous répondrai très bientôt.</p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* ─── Honeypot (invisible pour les humains) ─── */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
              <label htmlFor="website">Ne pas remplir ce champ</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {formFields.map((field, i) => (
              <div
                key={field.name}
                className={`form-group ${focusedField === field.name ? 'focused' : ''} ${
                  formData[field.name] ? 'has-value' : ''
                }`}
                style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              >
                <div className="input-wrapper">
                  <span className="field-icon">{field.icon}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={errors[field.name] ? 'error' : ''}
                    required
                  />
                  <div className="input-highlight"></div>
                </div>
                {errors[field.name] && (
                  <span className="error-message">
                    <i className="fas fa-exclamation-circle"></i> {errors[field.name]}
                  </span>
                )}
              </div>
            ))}

            <div
              className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${
                formData.message ? 'has-value' : ''
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="input-wrapper textarea-wrapper">
                <span className="field-icon">💬</span>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={errors.message ? 'error' : ''}
                  required
                ></textarea>
                <div className="input-highlight"></div>
              </div>
              {errors.message && (
                <span className="error-message">
                  <i className="fas fa-exclamation-circle"></i> {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span className="button-content">
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <span className="button-arrow">→</span>
                  </>
                )}
              </span>
              <div className="button-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;








