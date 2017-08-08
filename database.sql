DROP USER IF EXISTS galleria;
DROP DATABASE IF EXISTS gallery;

CREATE USER galleria;
CREATE DATABASE gallery WITH OWNER 'galleria';

\c gallery galleria

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  lastname VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE galleries (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  length VARCHAR(10) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE pictures (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  user_id INTEGER REFERENCES users (id),
  gallery_id INTEGER REFERENCES galleries (id)
);