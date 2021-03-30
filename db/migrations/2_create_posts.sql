DROP TABLE IF EXISTS posts; 

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) DEFAULT 'Untitled',
    description varchar(600)
);