const mongoose = require('mongoose')

const { db_connection } = require('../env') 

// Database connection
const dbConnection = async () => {
    try {
        mongoose.set("strictQuery", false);

        const conn = await mongoose.connect(db_connection,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log(`Database connected: ${conn.connection.host}`.white.bold)
    } catch (error) {
        console.error(`Database not connected: ${error}`.red.bold)
    }
}

module.exports = dbConnection