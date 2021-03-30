const Owner = require('../models/owner')

// owners show route
async function show (req, res) {
    try {
        const owner = await Owner.findById(parseInt(req.params.id))
        res.status(200).json(owner)
    } catch (err) {
        res.status(400).send({err})
    }
}


module.exports = { show }