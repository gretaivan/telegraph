const Post = require('../models/Post');


//all 
async function all(req,res) {
    try{
        const posts = await Post.all; 
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({err}); 
    }
}
//byId
//create

module.exports = { all };