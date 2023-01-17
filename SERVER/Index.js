//REST API

const express = require('express');
const app = express();
const cors = require('cors');

const pool = require("./DB/db");

//middleware
app.use(cors());
app.use(express.json());


//ROUTES//

//CREATE A TODO
app.post("/books", async(req, res)=>{ 
    try {
        const {title, author, publication_date} = req.body;
        const newBook = await pool.query(
            "INSERT INTO books (title, author, publication_date) VALUES($1, $2, $3) RETURNING *", 
            [title, author, publication_date]
        );
        res.json(newBook.rows[0]);
        //console.log(req.body);
    } 
    catch (error) {
        console.log(error.message);
    }
});


//GET ALL BOOKS
app.get("/books", async(req, res)=>{
    try {
        const allBooks = await pool.query("SELECT * FROM books");
        res.json(allBooks.rows)
    } 
    catch (error) {
        console.log(res.error);
    }
});


//GET A BOOK
app.get("/books/:isbn", async(req, res)=>{
    try {
        const {isbn} = req.params;
        const book = await pool.query("SELECT * FROM books WHERE isbn= $1",[isbn]);
        res.json(book.rows[0]);
    } 
    catch (error) {
        console.log(error.message);
    }
});


//UPDATE A BOOK
app.put("/books/:isbn", async(req, res)=>{
    try {
        const {isbn} = req.params;
        const {title}  = req.body;
        const updatebook = await pool.query("UPDATE books SET title=$1 WHERE isbn= $2", [title, isbn]);
        res.json("Book was updated");
    } 
    catch (error) {
        console.log(error.message);    
    }
});


//DELETE A TODO
app.delete("/books/:isbn", async(req, res)=>{
    try{
        const {isbn} = req.params;
        const deleteBook = await pool.query("DELETE FROM books WHERE isbn = $1",[isbn]);
        res.json("Book was deleted");
    }
    catch(error){
        console.log(error.message);
    }
});


app.listen(5000, ()=>{
    console.log("Server has started on port 5000");
})