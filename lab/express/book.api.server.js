const express = require('express');
const app = express();
app.use(express.json());

let books = [];

// GET: List all books
app.get('/api/books', (req, res) => res.json(books));

// POST: Add a new book
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT: Update a book by ID
app.put('/api/books/:id', (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// DELETE: Delete a book by ID
app.delete('/api/books/:id', (req, res) => {
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');

    books.splice(bookIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
