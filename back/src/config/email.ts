require('dotenv/config');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 587,
  auth: {
    user:  process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS,
  },
});

const sendEmail = async ( from: string, to: string, subject: string, text: string ) => {
  const response = await transporter.sendMail({
    from,
    to,
    subject,
    text,
  })
  
  return response;
}

export default sendEmail;