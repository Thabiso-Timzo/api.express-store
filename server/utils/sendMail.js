const nodeMailer = require("nodemailer");

const { 
  smpt_host, 
  smpt_port,
  smpt_service,
  smpt_mail,
  smpt_pass
} = require('../config/index');

const sendMail = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: smpt_host,
      port: smpt_port,
      service: smpt_service,
      auth: {
        user: smpt_mail,
        pass: smpt_pass,
      },
    });
  
    const mailOptions = {
      from: smpt_mail,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    await transporter.sendMail(mailOptions);
  };
  
  module.exports = sendMail;