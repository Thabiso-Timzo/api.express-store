const express = require('express')
const bodyParser = require('body-parser')
const cookParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
// 2:18:20
require('colors')
require('dotenv').config()

const { server_port } = require('./config/env')
const { errorHandler } = require('./middleware/errorHandler')
const dbConnection = require('./config/connection/database')
const authRoutes = require('./routes/user-routes/authRoutes')

// Server port
const PORT = server_port || 8080

const app = express()

// Db Connection
dbConnection()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true}))
app.use(cookParser()) 
app.use(cors());
app.use(morgan('tiny'))

// Middleware
app.use(errorHandler)

// Routes
app.use('/api/user', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`.white.bold)
}) 