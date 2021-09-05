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

CREATE TABLE statistics(
    statistic_id SERIAL PRIMARY KEY, 
    name VARCHAR NOT NULL,
    unit_of_measurement VARCHAR
);

CREATE TYPE PRIORITY AS ENUM ('low', 'normal', 'high');

CREATE TABLE favourites(
    favourite_id SERIAL PRIMARY KEY,
    user_id SERIAL NOT NULL,
    statistic_id SERIAL NOT NULL,
    priority PRIORITY,

    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (statistic_id) REFERENCES statistics(statistic_id)
);

insert into users (first_name, last_name, email, encrypted_password) 
values ('Callum', 'Gedling', 'callum.gedling@my.jcu.edu.au', 'password');