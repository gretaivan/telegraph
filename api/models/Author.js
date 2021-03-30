const db = require('../dbConfig/init');

class Author {
    constructor(data){
        this.id = data.id
        this.name = data.name
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const authorsData = await db.query(`SELECT * FROM authors;`)
                console.log(authorsData)
                const authors = authorsData.rows.map(d => new Author(d))
               
                resolve(authors);
            } catch (err) {
                reject("Error retrieving Authors")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const authorsData = await db.query(`SELECT from authors WHERE author_id = $1;`, [ id ]);
                const authors = new Author(authorsData.rows[0]);
                resolve (authors);
            } catch (err) {
                reject('Author not found');
            }
        });
    }
}

module.exports = Author;