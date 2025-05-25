const express = require("express");
const route = require('./src/routes/routers');
const socketio = require("socket.io");
const http = require("http");
const path = require('path');
const errorHandler = require('./src/handlers/errorHandlers');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');

const app = express();

app.use(session({
    secret: 'realtime-tracker',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

require('dotenv').config();

const server = http.createServer(app);
const io = socketio(server);

// Import your socket handler and pass the io instance
require('./src/socket/socketHandler')(io);
app.use(bodyParser.urlencoded({ extended: false }));

// View engine and static setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Routes
app.use(route);

app.use(errorHandler.notfound);

// Start server
// Connect to the database
mongoose.connect(process.env.MONGO_URI).then(result => {
    app.listen(3000);
}).catch(err => console.log(err));