const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle the contact form submission
app.post('/send-message', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Set up Nodemailer to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail or other email providers
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password',   // Replace with your email password
        },
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',  // Replace with the email you want to receive messages
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
