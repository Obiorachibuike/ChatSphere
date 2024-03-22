// index.js
const express = require('express');
const http = require('http');
const  Server  = require('socket.io');

class ChatBackend {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io =  Server(this.server);

        this.configureRoutes();
        this.configureSockets();
    }

    configureRoutes() {
        this.app.get('/', (req, res) => {
            res.send('Chat Application Backend');
        });
    }

    configureSockets() {
        this.io.on('connection', (socket) => {
            console.log('A user connected');

            socket.on('disconnect', () => {
                console.log('User disconnected');
            });

            socket.on('chat message', (msg) => {
                console.log('Message received:', msg);
                this.io.emit('chat message', msg);
            });
        });
    }

    start(port) {
        this.server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}




module.exports = ChatBackend
