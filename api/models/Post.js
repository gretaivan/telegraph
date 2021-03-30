const db = require('../dbConfig/init');
const Dog = require("./Author")

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.description = data.description
        //???? 
        this.author_name = { name: data.author_name, path: `/authors/${data.author_id}`}
    }

    static get all(){
        return new Promise (async (resolve, reject) => {
            try{
                let postData = await db.query('SELECT * FROM posts'); 
                let posts  = postData.rows.map(p => new Post(p)); 
                resolve(posts);
            } catch(err){
                reject('Could not find any posts')
            }
        })

    }

    static findById(id){
        return new Promise(async (resolve, reject) =>{
            try{
                console.log("i am searching the index with: " + id)
                
                let postData = await db.query('SELECT posts.*, authors.name AS author_name FROM posts JOIN authors ON posts.author_id = authors.id WHERE posts.id = $1;', [id]);
                console.log(postData.author_id)
                let post = new Post(postData.rows[0]); 
                console.log(post)
                resolve(post);
            }catch(err){
                reject('Post does not exist'); 
            }
        })
    } 
    /// COULD DO find all post by pseudonym but then pseudonym has to have check if it exists


}
module.exports = Post;