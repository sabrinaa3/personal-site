const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to handle CORS and JSON data
app.use(cors({
    origin: 'https://sabrinaa3.github.io/personal-site/', 
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle the contact form submission
app.post('/send-message', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Set up Nodemailer to send the email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // The email address to receive the messages
        subject: `New message from ${name}: ${subject}`,
        text: message,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send message. Try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});