CREATE DATABASE pdf_reader;

CREATE TABLE books(
    isbn SERIAL PRIMARY KEY,
    title VARCHAR(60),
    author VARCHAR(60),
    publication_date DATE
);