const app = require('./server');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express now departing from port ${port}!`))



const db = require('./dbConfig/init');


async function print(){
    let all = await db.query('SELECT * FROM authors;')

    console.log(all.rows)
}

print(); 