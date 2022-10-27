

module.exports = {
    database: /*checkConnection()  process.env.MONGO_URI :*/ process.env.MONGO_LOCAL_URI,
    port_: process.env.PORT,
    client_url: process.env.LOCAL_CLIENT_APP,
    jwt_secret: process.env.JWT_SECRET_KEY,
    jwt_exp: process.env.JWT_EXPIRES,
    allowedDomains: (process.env.NODE_ENV === 'production' ? 
    [
        process.env.REMOTE_CLIENT_APP || process.env.REMOTE_MOBILE_APP, 
        process.env.REMOTE_SERVER_API
    ] : [
        process.env.LOCAL_CLIENT_APP || process.env.LOCAL_MOBILE_APP,
        process.env.LOCAL_SERVER_API
    ]),
    smpt_host: process.env.SMPT_HOST,
    smpt_port: process.env.SMPT_PORT,
    smpt_service: process.env.SMPT_SERVICE,
    smpt_mail: process.env.SMPT_MAIL,
    smpt_pass: process.env.SMPT_PASSWORD,
    activation_secret: process.env.ACTIVATION_TOKEN_SECRET,
    access_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_secret: process.env.REFRESH_TOKEN_SECRET,
    mailing_id: process.env.MAILING_SERVICE_CLIENT_ID,
    mailing_secret: process.env.MAILING_SERVICE_CLIENT_SECRET,
    mailing_refresh: process.env.MAILING_SERVICE_REFRESH_TOKEN,
    cloud_: process.env.CLOUD_NAME,
    cloud_api_key: process.env.CLOUD_API_KEY,
    cloud_api_secret_key: process.env.CLOUD_API_SECRET_KEY
}