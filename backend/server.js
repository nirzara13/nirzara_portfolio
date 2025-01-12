const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const dns = require('dns').promises;
const validator = require('email-validator');

// Chargement des variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS sécurisée
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10kb' })); // Limite la taille des requêtes

// Configuration du rate limiting pour éviter les abus
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 tentatives maximum par IP
    message: { 
        success: false, 
        message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.' 
    }
});

app.use('/contact', limiter);

// Validation complète et stricte des adresses email

async function validateEmailStrict(email) {
    // Validation du format basique
    if (!validator.validate(email)) {
        throw new Error('Format d\'email invalide');
    }

    const [localPart, domain] = email.split('@');

    // Vérification de la longueur
    if (localPart.length > 64 || domain.length > 255) {
        throw new Error('Format d\'email invalide (longueur excessive)');
    }

    // Liste blanche des domaines autorisés
    const allowedDomains = [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
        'yahoo.com',
        'protonmail.com',
        'orange.fr',
        'sfr.fr',
        'free.fr',
        'laposte.net',
        // Ajoutez ici les domaines professionnels spécifiques que vous souhaitez autoriser
        'entreprise.com',  // Exemple à remplacer par vos domaines autorisés
    ];

    // Vérification du domaine
    const domainLower = domain.toLowerCase();
    if (!allowedDomains.includes(domainLower)) {
        throw new Error('Ce service de messagerie n\'est pas autorisé. Veuillez utiliser une adresse email professionnelle ou un fournisseur de messagerie reconnu.');
    }

    try {
        // Double vérification avec DNS
        const [mxRecords, aRecords] = await Promise.all([
            dns.resolveMx(domain).catch(() => []),
            dns.resolve4(domain).catch(() => [])
        ]);

        if (!mxRecords.length && !aRecords.length) {
            throw new Error('Ce domaine email n\'existe pas');
        }

        // Vérification supplémentaire des enregistrements MX pour les services de messagerie connus
        if (mxRecords.length > 0) {
            const mxHostnames = mxRecords.map(record => record.exchange.toLowerCase());
            
            // Vérification que les serveurs MX correspondent aux services attendus
            const knownMXPatterns = [
                'google.com',
                'outlook.com',
                'hotmail.com',
                'yahoo.com',
                'protonmail.ch',
                'orange.fr',
                'sfr.fr',
                'free.fr',
                'laposte.net'
            ];

            const hasTrustedMX = mxHostnames.some(hostname => 
                knownMXPatterns.some(pattern => hostname.includes(pattern))
            );

            if (!hasTrustedMX) {
                throw new Error('Les serveurs de messagerie de ce domaine ne sont pas reconnus');
            }
        }

        return true;
    } catch (error) {
        throw new Error('Impossible de vérifier cette adresse email : ' + error.message);
    }
}

// Validation des entrées du formulaire
async function validateFormData(formData) {
    const { name, email, subject, message } = formData;

    if (!name || name.trim().length < 2 || !/^[a-zA-ZÀ-ÿ\s-]{2,50}$/u.test(name)) {
        throw new Error('Le nom doit contenir entre 2 et 50 caractères et ne peut contenir que des lettres');
    }

    await validateEmailStrict(email);

    if (!subject || subject.trim().length < 3 || subject.trim().length > 100) {
        throw new Error('Le sujet doit contenir entre 3 et 100 caractères');
    }

    if (!message || message.trim().length < 10 || message.trim().length > 1000) {
        throw new Error('Le message doit contenir entre 10 et 1000 caractères');
    }
}

// Configuration du transporteur email
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: process.env.NODE_ENV === 'production'
        }
    });
};

// Route principale pour le formulaire de contact
app.post('/contact', async (req, res) => {
    const { token, formData } = req.body;

    try {
        // Vérification du reCAPTCHA
        if (!token) {
            throw new Error('Veuillez compléter la vérification reCAPTCHA');
        }

        // Validation du reCAPTCHA avec Google
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        });

        const recaptchaData = await recaptchaResponse.json();
        if (!recaptchaData.success) {
            throw new Error('La vérification reCAPTCHA a échoué');
        }

        // Validation des données du formulaire
        await validateFormData(formData);

        // Préparation et envoi de l'email
        const transporter = createTransporter();
        
        const mailOptions = {
            from: `"Formulaire de Contact" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_RECIPIENT,
            subject: `Nouveau message de ${formData.name}: ${formData.subject}`,
            html: `
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                        <h1 style="color: #0056b3; margin: 0 0 20px;">Nouveau message de contact</h1>
                        <p style="margin: 0; color: #666;">Message reçu le ${new Date().toLocaleString('fr-FR')}</p>
                    </div>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 5px; border: 1px solid #dee2e6;">
                        <h2 style="color: #0056b3; margin: 0 0 15px;">Informations du contact</h2>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Nom :</strong>
                            <p style="margin: 5px 0; color: #212529;">${formData.name}</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Email :</strong>
                            <p style="margin: 5px 0; color: #212529;">${formData.email}</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Sujet :</strong>
                            <p style="margin: 5px 0; color: #212529;">${formData.subject}</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Message :</strong>
                            <p style="margin: 5px 0; color: #212529; white-space: pre-wrap;">${formData.message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                        <p>Ce message a été envoyé via votre formulaire de contact sécurisé</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Votre message a été envoyé avec succès'
        });

    } catch (error) {
        console.error('Erreur:', error.message);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// Route de vérification de santé pour Vercel
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Démarrage du serveur
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
}

module.exports = app;