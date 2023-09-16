import express from "express";
import { getBooks, getBookById, addNewBook, updateBook } from "../controllers/book_controller.js";

let bookRouter = express.Router();

bookRouter.get('/bookapi', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Library API for Books'
    });
});

// Routes for Books
bookRouter.route('/bookapi/books')
    .get(getBooks)

bookRouter.route('/bookapi/book/:id')
    .get(getBookById)
    .put(updateBook);

bookRouter.route('/bookapi/book')
    .post(addNewBook);

export default bookRouter;