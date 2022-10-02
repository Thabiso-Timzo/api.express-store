const nodemailer = require('nodemailer');
const  { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground/';

const {
  mailing_id,
  mailing_secret,
  mailing_refresh,
  smpt_mail
} = require('../config/index');

const oauth2Client = new OAuth2(
  mailing_id,
  mailing_secret,
  mailing_refresh,
  smpt_mail,
  OAUTH_PLAYGROUND
)

const sendEmail = (to, url, txt) => {
  oauth2Client.setCredentials({
    refresh_token: mailing_refresh
  })

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: smpt_mail,
      clientId: mailing_id,
      clientSecret: mailing_secret,
      refreshToken: mailing_refresh,
      accessToken
    } 
  });

  const mailOptions = {
    from: smpt_mail,
    to: to,
    subject: "Gude",
    html: `
      <div>
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to Gude.</h2>
        <p>Congratulations! You're almost set to start using Gude.
          Just click the button below to validate your email address.
        </p>
    
        <a href=${url} style="background: red; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>

        <p>If the button doesn't work for any reason, you can also click on the link below:</p>

        <div>${url}</div>
      </div>  
    `
  }
  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor
  })
}

module.exports = sendEmail;