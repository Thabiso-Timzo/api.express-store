const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const colors = require('colors');
const fileUpload = require('express-fileupload');
require('dotenv/config');

const { port_, allowedDomains } = require('./config/index');
const DBConnection = require('./config/db');
const errorCatcher = require('./middleware/error');

//const ProductRoutes = require('./routes/product-routes/ProductRoutes');
const UserRoutes = require('./routes/user-routes/UserRoutes');
// const OrderRoutes = require('./routes/order-routes/OrderRoutes');
// const ChatRoutes = require('./routes/chat-routes/ChatRoutes');
// const MessageRoutes = require('./routes/message-routes/MessageRoutes');
const upload = require('./routes/upload/upload');

const app = express();
const port = port_ || 8080;

// Handling uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

// Database connection
DBConnection();

app.use(express.json());
app.use(cors({origin: allowedDomains, credentials: true}));
app.options('*', cors());
app.use(morgan('tiny'));
app.use(fileUpload({
    useTempFiles: true
}))

// To not get any deprecation warning or error
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Error handler
app.use(errorCatcher);

// Routes
//app.use('/api/products', ProductRoutes);
app.use('/api/users', UserRoutes);
// app.use('/api/orders', OrderRoutes);
// app.use('/api/chats', ChatRoutes);
// app.use('/api/messages', MessageRoutes);
app.use('/api/upload', upload);

app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`.yellow.bold);
});

// Unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server, error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    app.close(() => {
        process.exit(1);
    });
})