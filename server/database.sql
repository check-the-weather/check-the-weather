CREATE DATABASE checktheweather;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    encrypted_password VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

insert into users (first_name, last_name, email, encrypted_password) 
values ('Callum', 'Gedling', 'callum.gedling@my.jcu.edu.au', 'password');