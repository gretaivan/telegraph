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
async function byId(req, res){
    try{
        const post = await Post.findById(req.params.id); 
        res.status(200).json(post); 
    }catch(err){
        res.status(404).json({err})
    }
}
//create
async function create (req, res) {
    try {
        
        let post = await Post.create(req.body);
        // post = JSON.stringify(post)
        console.log("server response") 
        console.log(post)
        res.status(201).send(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { all, byId, create };