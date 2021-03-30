const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors')

router.get('/', authorsController.index)
router.get('/:id', authorsController.show)
router.get('/', authorsController.create)

module.exports = router;