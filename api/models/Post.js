const db = require('../dbConfig/init');
const Author = require("./Author")

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.author_name = { name: data.author_name, path: `posts:${this.id}-authors:${data.author_id}`}
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
    
    static create(data){
        return new Promise(async (res, rej) => {
            try {
                const result = await db.query('SELECT id FROM authors WHERE name = ($1);' , [data.author_name]); 
                console.log("authors result")
        
                let author_id; 
                console.log("author id: ")
                if(result.rows.length === 0){
                    const author = await Author.create(data.author_name)
                    console.log(author)
                    author_id = author.id; 
                } else {
                    author_id = result.rows[0].id
                }
                console.log(author_id)


                let postResult = await db.query(`INSERT INTO posts (title, description, author_id)
                                                VALUES ('${data.title}', '${data.description}', ${author_id}) RETURNING *;`);
                console.log(postResult.rows)

                let post = this.findById(postResult.rows[0].id)
                console.log(post)
                                                // let post = new Post(postResult.rows[0]);
                res(post)
            } catch (err) {
                rej(`Error creating Post: ${err}`)
            }
        })
//         let post = new Post(data);


//         let result = await db.query(`INSERT INTO authors (name)
//         VALUES ($1) RETURNING *;`, [ name ]);
// let author = new Author(result.rows[0]);

//         console.log("model returns: ")
//         console.log(post)
//         return post; 
    } 


}
module.exports = Post;