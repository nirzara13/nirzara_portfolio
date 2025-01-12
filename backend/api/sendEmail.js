// backend/api/sendEmail.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { subject, text, to } = req.body;

    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Ton email
        pass: process.env.EMAIL_PASSWORD,  // Mot de passe de ton email ou mot de passe d'application
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to || process.env.EMAIL_RECIPIENT,  // Utiliser l'email par défaut ou celui passé dans la requête
      subject: subject || 'Email de test',
      text: text || 'Ceci est un email de test envoyé depuis Vercel!',
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email envoyé');
    } catch (error) {
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
  } else {
    res.status(405).send('Méthode non autorisée');
  }
};
