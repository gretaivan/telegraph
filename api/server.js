const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const authorRoutes = require('./routes/authors');
const postRoutes = require('./routes/posts')

server.use('/authors', authorRoutes);
server.use('/posts', postRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Welcome to Telegraph API'))

module.exports = server