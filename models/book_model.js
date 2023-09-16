import { Schema, model } from "mongoose";

let books = Schema({
    name: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Book = model('Book', books , 'Book');
export default Book;