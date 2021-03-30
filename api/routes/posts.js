const express = require('express');
const router = express.Router();
const postsControl = require('../controllers/posts');

const Post = require('../models/Post');

//get all 
router.get('/', postsControl.all);

//get by id
//router.get('/:id', postsControl.byId); 
//create ne post
//router.post('/', postsControl.create); 


module.exports = router; 

