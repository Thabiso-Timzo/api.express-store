module.exports = {
    database: process.env.MONGO_URI,
    port_: process.env.PORT,
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
    cookie_exp: process.env.COOKIE_EXPIRE,
    cloud_name: process.env.CLOUD_NAME,
    cloud_api_key: process.env.CLOUD_API_KEY,
    cloud_api_secret_key: process.env.CLOUD_API_SECRET_KEY
}