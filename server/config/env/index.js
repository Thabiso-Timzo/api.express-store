module.exports = {
    server_port: process.env.PORT,
    db_connection: process.env.LOCAL_MONGO_URI,
    jwt_secret: process.env.JWT_SECRET,
    email_address: process.env.EMAIL_ADDRESS,
    email_password: process.env.EMAIL_PASSWORD
}