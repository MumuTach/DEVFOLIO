const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
/*
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Autorise toutes les méthodes HTTP courantes
  allowedHeaders: '*', // Autorise tous les en-têtes
};*/

// Middleware
app.options('*', cors());
/*app.use(cors(corsOptions));*/
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).json({});
  }
  next();
});
app.use(bodyParser.json());

require('dotenv').config();
console.log('Email User:', process.env.EMAIL_USER); // Should print your email
console.log('App Specific Password:', process.env.APP_SPECIFIC_PASSWORD); 

// Configurez le transporteur Nodemailer
let transporter;
try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_SPECIFIC_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  console.log('Nodemailer transporter created successfully');
} catch (error) {
  console.error('Error creating Nodemailer transporter:', error);
}

// Route pour envoyer le formulaire de contact
app.post('/send-email', (req, res) => {
    console.log("in send email server");
    const { name, email, message } = req.body;
    console.log('Received contact form data:', req.body);
  
    const mailOptions = {
      from: process.env.EMAIL_USER, // Adresse e-mail de l'expéditeur
      to: 'my-email@gmail.com', // Adresse e-mail du destinataire
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ error: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });