const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

const connectedUsers = {
    
}

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

// Conexão com o Banco MongoDB
mongoose.connect('mongodb+srv://dev:dev@cluster0-c5yek.mongodb.net/tindev?retryWrites=true&w=majority', { 
    useUnifiedTopology: true, 
    useNewUrlParser:true 
});
//

app.use((request, response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);