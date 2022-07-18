const mongoose = require('mongoose');
const { database } = require('./index');

// Database Connection
const DBConnection = async () => {
    try {
        const conn = await mongoose.connect(database, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.bold)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit()
    }
}

module.exports = DBConnection;