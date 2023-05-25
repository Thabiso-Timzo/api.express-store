const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler');

const { email_address, email_password } = require('../../config/env');

const sendEmail = asyncHandler(
    async (data, req, res) => {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: email_address, // generated ethereal user
              pass: email_password, // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Express store" <no-reply@gmail.com>', // sender address
            to: data.to, // list of receivers
            text: "Hey user",
            subject: data.subject, // Subject lin
            html: data.html, // html body
          });

          console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
)

module.exports = { sendEmail }