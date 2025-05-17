const express = require("express");
const route = require('./src/routes/routers');
const socketio = require("socket.io");
const http = require("http");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Import your socket handler and pass the io instance
require('./src/socket/socketHandler')(io);

// View engine and static setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Routes
app.use(route);

// Start server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});