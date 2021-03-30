const express = require('express');
const router = express.Router();
const ownersController = require('../controllers/owners')

router.get('/:id', ownersController.show)

module.exports = router;