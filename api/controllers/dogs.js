const Dog = require('../models/Dog');

async function index (req, res) {
    try {
        const dogs = await Dog.all;
        res.status(200).json(dogs)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const dog = await Dog.findById(req.params.id);
        res.status(200).json(dog)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const dog = await Dog.create(req.body);
        res.status(201).json(dog)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function destroy (req, res) {
    try {
        const dog = await Dog.findById(req.params.id);
        const resp = await dog.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, destroy }