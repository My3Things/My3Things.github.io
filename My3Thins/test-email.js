const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "recipient-email@example.com", // Replace with your email for testing
  subject: "Test Email from Nodemailer",
  text: "This is a test email sent using Gmail and Nodemailer.",
};

// Send the test email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});

require("dotenv").config(); // Load .env variables

console.log("EMAIL_USER:", process.env.EMAIL_USER); // Should print your email
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not loaded"); // Should confirm password loaded

transporter.verify((error, success) => {
    if (error) {
      console.error("Transporter verification failed:", error);
    } else {
      console.log("Transporter is ready to send emails:", success);
    }
  });