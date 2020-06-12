const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

// Conexão com o Banco MongoDB
mongoose.connect('mongodb+srv://dev:dev@cluster0-c5yek.mongodb.net/tindev?retryWrites=true&w=majority', { 
    useUnifiedTopology: true, 
    useNewUrlParser:true 
});
//

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);