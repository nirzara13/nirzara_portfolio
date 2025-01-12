import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

const Contact = () => {
  // États pour gérer les données du formulaire et les états de l'interface
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fonction de validation du formulaire avec des règles strictes
  const validateForm = () => {
    const newErrors = {};
    
    // Validation du nom : au moins 2 caractères, lettres et espaces uniquement
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }
    
    // Validation email avec une expression régulière complète
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }
    
    // Validation du sujet
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Le sujet doit contenir au moins 3 caractères';
    }
    
    // Validation du message
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation avant envoi
    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    if (!captchaToken) {
      toast.error('Veuillez vérifier que vous êtes un humain');
      return;
    }

    setIsSubmitting(true);

    try {
      // Appel au serveur local
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          token: captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message envoyé avec succès !');
        // Réinitialisation du formulaire après succès
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCaptchaToken(null);
        // Réinitialisation du reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        toast.error(data.message || 'Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la communication avec le serveur');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Effacement des erreurs lors de la modification
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" />
      <h1 className="contact-title">Contactez-moi</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Mes Coordonnées</h2>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>votre-email@example.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+33 6 XX XX XX XX</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Paris, France</p>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'error' : ''}
              required
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              required
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="captcha-container">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={token => setCaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;