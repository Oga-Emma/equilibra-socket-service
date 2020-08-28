const express = require('express');
const http = require('http');


// const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
// const io = socketio(server);

// io.on('connect', function () {
//     console.log('Connected internal');
// });

module.exports = server