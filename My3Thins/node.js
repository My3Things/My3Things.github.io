const nodemailer = require("nodemailer");


require("dotenv").config({ path: "./passwords.env" }); // Load variables from passwords.env

// Debug logs
console.log("EMAIL_USER:", process.env.EMAIL_USER); // Should print your Gmail email address
console.log("EMAIL_PASS Loaded:", !!process.env.EMAIL_PASS); // Should print "true" if password is loaded



  
  console.log("Transporter configured successfully.");
  
// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter verification failed:", error);
  } else {
    console.log("Transporter is ready to send emails:", success);
  }
});

// Email options
const mailOptions = {
  from: process.env.EMAIL_USER, // Sender address
  to: process.env.EMAIL_USER,   // Send to your own email for testing
  subject: "Test Email from Nodemailer",
  text: "This is a test email sent using Gmail and Nodemailer.",
};

// Send a test email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
