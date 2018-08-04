var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Genre = require('./models/genre');
var Book = require('./models/book');

mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;


app.get('/api',(req,res) => {
    res.send('Welcome to Node');
});


//Get All Genres
app.get('/api/genres',(req,res)=>{
    Genre.getGenres((err , data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
});

//Post Books
app.post('/api/books',(req,res) => {
    Book.addBook(req.body , (err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    })
})


//Post Genre
app.post('/api/genres',(req,res) => {
    Genre.addGenre(req.body,(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    })
})


//Get all Books
app.get('/api/books',(req,res) => {
    Book.getBooks((err , data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
});

//Get Book By Id
app.get('/api/books/:_id',(req,res) => {
    var id = req.params._id;
    Book.getBookById(id,(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    })
})

//Delete Book
app.delete('/api/books/:_id',(req,res) => {
    var id = req.params._id;
    Book.removeBook(id,(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
});


// Delete Genre
app.delete('/api/genres/:_id',(req,res) => {
    var id = req.params._id;
    Genre.removeGenre(id,(err,data)=>{
        if(err){
            throw err;
        }
        res.json(data);
    });
});


//Update Genre
app.put('/api/genre/:_id',(req,res) => {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{},(err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    })
})


//Update Book
app.put('/api/book/:_id',(req,res) => {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{} , (err,data) => {
        if(err){
            throw err;
        }
        res.json(data);
    });
});


app.listen(3000);
console.log('Running on port 3000...');

