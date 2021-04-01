TRUNCATE owners, dogs RESTART IDENTITY;

INSERT INTO owners (name, address) 
VALUES
    ('Owner1', 'Address1' ),
    ('Owner2', 'Address2' );

INSERT INTO dogs (name, age, owner_id) 
VALUES
    ('Dog1', 10, 1 ),
    ('Dog2', 3, 2 ),
    ('Dog3', 5, 1 );