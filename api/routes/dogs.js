const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogs')

router.get('/', dogsController.index)
router.get('/:id', dogsController.show)
router.post('/', dogsController.create)
router.delete('/:id', dogsController.destroy)

module.exports = router;