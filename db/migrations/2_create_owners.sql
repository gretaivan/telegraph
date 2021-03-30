DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    address varchar(255)
);