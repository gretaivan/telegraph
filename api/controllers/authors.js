const Author = require('../models/Author');


async function create (req, res) {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function index (req, res) {
    try {
        const authors = await Author.all;
        res.status(200).json(authors)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const authors = await Author.findById(req.params.id);
        res.status(200).json(authors)
    } catch (err) {
        res.status(404).json({err})
    }
}



module.exports = { index, show, create }