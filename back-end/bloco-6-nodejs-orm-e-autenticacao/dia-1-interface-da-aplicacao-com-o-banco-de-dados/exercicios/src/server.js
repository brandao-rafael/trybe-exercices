require('dotenv').config();
const BooksController = require('./controllers/Book.controller');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));