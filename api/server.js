const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const dogRoutes = require('./routes/dogs')
const ownerRoutes = require('./routes/owners')

server.use('/dogs', dogRoutes)
server.use('/owners', ownerRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server